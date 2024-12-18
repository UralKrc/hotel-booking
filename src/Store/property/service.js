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
      console.log(data.data);
      const property = data.data.find(
        (property) => property.property.id === id
      );
      console.log(property);
      return property ? property.property : null;
    })
    .catch((error) => null);
};
