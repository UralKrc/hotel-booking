import data from "./../../data.json";

export const getProperties = async () => {
  return fetch("./data.json")
    .then(() => {
      const properties = data.data.map((property) => property.property);
      return properties;
    })
    .catch((error) => []);
};

export const fetchPropertyById = async (id) => {
  return fetch("./data.json")
    .then(() => {
      const property = data.data.find(
        (property) => property.property.id === id
      );
      return property ? property.property : null;
    })
    .catch((error) => null);
};
