import data from "../../data.json";
import { Property } from "../../Types/types";

const LOCAL_STORAGE_KEY = "propertiesData";

export const loadPropertiesFromLocalStorage = (): Property[] => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const savePropertiesToLocalStorage = (properties: Property[]): void => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(properties));
};

const loadInitialData = (): Property[] => {
  return data.data.map((item: { property: Property }) => item.property);
};

export const getProperties = async (): Promise<Property[]> => {
  const localStorageData = loadPropertiesFromLocalStorage();
  if (localStorageData.length > 0) {
    return localStorageData;
  }
  return loadInitialData();
};

export const fetchPropertyById = async (
  id: string
): Promise<Property | null> => {
  const properties = await getProperties();
  return properties.find((property) => property.id === id) || null;
};

export const editProperty = async (property: Property): Promise<Property> => {
  const properties = loadPropertiesFromLocalStorage();
  const index = properties.findIndex((p) => p.id === property.id);
  if (index !== -1) {
    properties[index] = property;
  } else {
    properties.push(property);
  }
  savePropertiesToLocalStorage(properties);
  return property;
};

export const removeProperty = async (id: string): Promise<string> => {
  let properties = loadPropertiesFromLocalStorage();
  properties = properties.filter((property) => property.id !== id);
  savePropertiesToLocalStorage(properties);
  return id;
};
