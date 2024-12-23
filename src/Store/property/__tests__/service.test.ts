import {
  editPoliciesService,
  editPolicyService,
  fetchPropertyById,
  getProperties,
  loadPropertiesFromLocalStorage,
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
    const property = await fetchPropertyById(mockProperties[0].property.id);
    expect(property).toEqual(mockProperties[0]);
  });

  it("should return null if property not found by id", async () => {
    localStorage.setItem("propertiesData", JSON.stringify(mockProperties));
    const property = await fetchPropertyById("non-existent-id");
    expect(property).toBeNull();
  });

  it("should edit policies of a property", async () => {
    localStorage.setItem("propertiesData", JSON.stringify(mockProperties));
    const updatedPolicies = [
      { ...mockProperties[0].policies[0], name: "Updated Policy" },
    ];
    const result = await editPoliciesService(
      mockProperties[0].property.id,
      updatedPolicies
    );
    const storedProperties = JSON.parse(
      localStorage.getItem("propertiesData") || "null"
    );
    expect(result.policies).toEqual(updatedPolicies);
    expect(storedProperties[0].policies).toEqual(updatedPolicies);
  });

  it("should edit a specific policy", async () => {
    localStorage.setItem("propertiesData", JSON.stringify(mockProperties));
    const updatedPolicy = {
      ...mockProperties[0].policies[0],
      name: "Updated Policy",
    };
    const result = await editPolicyService(updatedPolicy);
    const storedProperties = JSON.parse(
      localStorage.getItem("propertiesData") || "null"
    );
    expect(result).toEqual(updatedPolicy);
    expect(storedProperties[0].policies[0]).toEqual(updatedPolicy);
  });

  it("should throw error if policy not found for editing", async () => {
    localStorage.setItem("propertiesData", JSON.stringify(mockProperties));
    const nonExistentPolicy = {
      ...mockProperties[0].policies[0],
      id: "non-existent-id",
    };
    await expect(editPolicyService(nonExistentPolicy)).rejects.toThrow(
      "Policy not found"
    );
  });
});
