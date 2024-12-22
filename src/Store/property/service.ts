import dayjs from "dayjs";
import data from "../../data.json";
import { Property } from "../../Types/types";

const LOCAL_STORAGE_KEY = "propertiesData";

// Load properties from local storage, returning an empty array if none are found
export const loadPropertiesFromLocalStorage = (): Property[] => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : null;
};

// Save the given properties array to local storage
export const savePropertiesToLocalStorage = (properties: Property[]): void => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(properties));
};

// Load initial data from the JSON file, formatting date strings
const loadInitialData = (): Property[] => {
  return data.data.map((item: { property: Property }) => {
    const property = item.property;

    // Assume today's date for time-only strings
    const today = dayjs().format("YYYY-MM-DD");

    return {
      ...property,
      checkInTime: dayjs(`${today}T${property.checkInTime}`).isValid()
        ? dayjs(`${today}T${property.checkInTime}`).toISOString()
        : "Invalid Date",
      checkOutTime: dayjs(`${today}T${property.checkOutTime}`).isValid()
        ? dayjs(`${today}T${property.checkOutTime}`).toISOString()
        : "Invalid Date",
    };
  });
};

export const getProperties = async (): Promise<Property[]> => {
  const localStorageData = loadPropertiesFromLocalStorage();
  if (!localStorageData) {
    return loadInitialData();
  }
  return localStorageData;
};

// Fetch a property by its ID, returning null if not found
export const fetchPropertyById = async (
  id: string
): Promise<Property | null> => {
  const properties = await getProperties();
  return properties.find((property) => property.id === id) || null;
};

// Edit or add a property, updating local storage accordingly
export const editProperty = async (property: Property): Promise<Property> => {
  const properties = loadPropertiesFromLocalStorage();
  const index = properties.findIndex((p) => p.id === property.id);

  // Update existing property or add new one
  if (index !== -1) {
    properties[index] = property;
  } else {
    properties.push(property);
  }

  // Save updated properties to local storage
  savePropertiesToLocalStorage(properties);
  return property;
};

// Remove a property by ID, updating local storage
export const removeProperty = async (id: string): Promise<string> => {
  let properties = loadInitialData();

  // Filter out the property to be removed
  properties = properties.filter((property) => property.id !== id);

  // Save updated properties to local storage
  savePropertiesToLocalStorage(properties);

  return id;
};
