import dayjs from "dayjs";
import data from "../../data.json";
import { Policy, PropertyDetails } from "../../Types/types";

const SESSION_STORAGE_KEY = "propertiesData";

// Load properties from local storage, returning null if none are found
export const loadPropertiesFromSessionStorage = ():
  | {
      property: PropertyDetails;
      policies: Policy[];
    }[]
  | null => {
  const data = sessionStorage.getItem(SESSION_STORAGE_KEY);
  try {
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Failed to parse sessionStorage data:", error);
    return null;
  }
};

// Save the given properties array to local storage
export const savePropertiesToSessionStorage = (
  properties: { property: PropertyDetails; policies: Policy[] }[]
): void => {
  sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(properties));
};

// Load initial data from the JSON file, formatting date strings
export const loadInitialData = (): {
  property: PropertyDetails;
  policies: Policy[];
}[] => {
  return data.data.map((item) => {
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

    // Flatten the policies into a single array
    const allPolicies: Policy[] = [
      ...(policies.noShowPolicies || []),
      ...(policies.cancellationPolicies || []),
    ].map((policy) => ({
      ...policy,
      propertyId: property.id,
    }));

    return {
      property: formattedProperty,
      policies: allPolicies,
    };
  });
};

export const getProperties = async (): Promise<
  { property: PropertyDetails; policies: Policy[] }[]
> => {
  const sessionStorageData = loadPropertiesFromSessionStorage();

  if (!sessionStorageData) {
    return loadInitialData();
  }
  return sessionStorageData;
};

// Fetch a property by its ID, returning null if not found
export const fetchPropertyById = async (
  id: string
): Promise<{ property: PropertyDetails; policies: Policy[] } | null> => {
  const properties = await getProperties();
  return properties.find((property) => property.property.id === id) || null;
};

export const editPolicyService = async (policy: Policy): Promise<Policy> => {
  let properties = loadPropertiesFromSessionStorage();

  // Ensure properties is not null
  if (!properties) {
    properties = loadInitialData();
  }

  let policyUpdated = false;

  properties.forEach((property) => {
    const policyIndex = property.policies.findIndex((p) => p.id === policy.id);
    if (policyIndex !== -1) {
      property.policies[policyIndex] = policy;
      policyUpdated = true;
    }
  });

  if (policyUpdated) {
    savePropertiesToSessionStorage(properties);
    return policy;
  }

  throw new Error("Policy not found");
};
