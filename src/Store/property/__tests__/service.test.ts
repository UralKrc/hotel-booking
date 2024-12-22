import {
  editProperty,
  fetchPropertyById,
  getProperties,
  loadPropertiesFromLocalStorage,
  removeProperty,
  savePropertiesToLocalStorage,
} from "../service";
import { mockProperties } from "../utils/mockData";

describe("property service", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it("should load properties from local storage", () => {
    localStorage.setItem("propertiesData", JSON.stringify(mockProperties));
    const properties = loadPropertiesFromLocalStorage();
    expect(properties).toEqual(mockProperties);
  });

  it("should save properties to local storage", () => {
    savePropertiesToLocalStorage(mockProperties);
    const storedProperties = JSON.parse(
      localStorage.getItem("propertiesData") || "[]"
    );
    expect(storedProperties).toEqual(mockProperties);
  });

  it("should get properties", async () => {
    localStorage.setItem("propertiesData", JSON.stringify(mockProperties));
    const properties = await getProperties();
    expect(properties).toEqual(mockProperties);
  });

  it("should fetch property by id", async () => {
    localStorage.setItem("propertiesData", JSON.stringify(mockProperties));
    const property = await fetchPropertyById("1YK15JGO");
    expect(property).toEqual(mockProperties[0]);
  });

  it("should return null if property not found by id", async () => {
    localStorage.setItem("propertiesData", JSON.stringify(mockProperties));
    const property = await fetchPropertyById("non-existent-id");
    expect(property).toBeNull();
  });

  it("should edit property", async () => {
    localStorage.setItem("propertiesData", JSON.stringify(mockProperties));
    const updatedProperty = { ...mockProperties[0], name: "Updated Property" };
    const property = await editProperty(updatedProperty);
    const storedProperties = JSON.parse(
      localStorage.getItem("propertiesData") || "null"
    );
    expect(property).toEqual(updatedProperty);
    expect(storedProperties[0]).toEqual(updatedProperty);
  });

  it("should remove property", async () => {
    localStorage.setItem("propertiesData", JSON.stringify(mockProperties));
    const id = await removeProperty(mockProperties[0].id);
    const storedProperties = JSON.parse(
      localStorage.getItem("propertiesData") || "null"
    );
    expect(id).toEqual(mockProperties[0].id);
    expect(storedProperties).toEqual(mockProperties.slice(1));
  });
});
