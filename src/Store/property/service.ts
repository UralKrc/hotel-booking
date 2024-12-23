import dayjs from "dayjs";
import data from "../../data.json";
import { Policy, Property, PropertyDetails } from "../../Types/types";

const LOCAL_STORAGE_KEY = "propertiesData";

// Load properties from local storage, returning an empty array if none are found
export const loadPropertiesFromLocalStorage = (): {
  property: PropertyDetails;
  policies: Policy[];
}[] => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

// Save the given properties array to local storage
export const savePropertiesToLocalStorage = (
  properties: { property: PropertyDetails; policies: Policy[] }[]
): void => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(properties));
};

// Load initial data from the JSON file, formatting date strings
export const loadInitialData = (): {
  property: PropertyDetails;
  policies: Policy[];
}[] => {
  const initialData = data.data.map((item) => {
    const { property, policies } = item;
    const today = dayjs().format("YYYY-MM-DD");

    const formattedProperty: PropertyDetails = {
      ...property,
      checkInTime: dayjs(`${today}T${property.checkInTime}`).isValid()
        ? dayjs(`${today}T${property.checkInTime}`).toISOString()
        : "Invalid Date",
      checkOutTime: dayjs(`${today}T${property.checkOutTime}`).isValid()
        ? dayjs(`${today}T${property.checkOutTime}`).toISOString()
        : "Invalid Date",
    };

    const allPolicies: Policy[] = [
      ...(policies.noShowPolicies || []),
      ...(policies.cancellationPolicies || []),
    ].map((policy) => ({ ...policy, propertyId: property.id }));

    return {
      property: formattedProperty,
      policies: allPolicies,
    };
  });

  console.log("Loaded Initial Data:", initialData); // Debugging log
  return initialData;
};

export const getProperties = async (): Promise<
  { property: PropertyDetails; policies: Policy[] }[]
> => {
  const localStorageData = loadPropertiesFromLocalStorage();
  if (!localStorageData.length) {
    return loadInitialData();
  }
  return localStorageData;
};

// Fetch a property by its ID, returning null if not found
export const fetchPropertyById = async (
  id: string
): Promise<{ property: PropertyDetails; policies: Policy[] } | null> => {
  const properties = await getProperties();
  return properties.find((property) => property.property.id === id) || null;
};

// Edit policies of a property, updating local storage
export const editPoliciesService = async (
  id: string,
  policies: Policy[]
): Promise<{ id: string; policies: Policy[] }> => {
  let properties = loadPropertiesFromLocalStorage();
  const index = properties.findIndex((p) => p.property.id === id);

  if (index !== -1) {
    properties[index].policies = policies;
    savePropertiesToLocalStorage(properties);
    return { id, policies };
  }

  throw new Error("Property not found");
};

export const editPolicyService = async (policy: Policy): Promise<Policy> => {
  let properties = loadPropertiesFromLocalStorage();
  let policyUpdated = false;

  properties.forEach((property) => {
    const policyIndex = property.policies.findIndex((p) => p.id === policy.id);
    if (policyIndex !== -1) {
      property.policies[policyIndex] = policy;
      policyUpdated = true;
    }
  });

  if (policyUpdated) {
    savePropertiesToLocalStorage(properties);
    return policy;
  }

  throw new Error("Policy not found");
};
