import { RootState } from "../../store";
import {
  getPropertiesSelector,
  getPropertyByIdSelector,
  getPropertyErrorSelector,
  getPropertyLoadingSelector,
} from "../selectors";
import { mockProperties } from "../utils/mockData";

describe("property selectors", () => {
  const state: RootState = {
    property: {
      properties: mockProperties,
      loading: false,
      error: null,
    },
  };

  it("should select properties", () => {
    const selectedProperties = getPropertiesSelector(state);
    expect(selectedProperties).toEqual(mockProperties);
  });

  it("should select a property by id", () => {
    const selectedProperty = getPropertyByIdSelector(
      mockProperties[0].property.id
    )(state);
    expect(selectedProperty).toEqual(mockProperties[0]);
  });

  it("should return undefined for a non-existent property id", () => {
    const selectedProperty = getPropertyByIdSelector("non-existent-id")(state);
    expect(selectedProperty).toBeUndefined();
  });

  it("should select loading state", () => {
    const loading = getPropertyLoadingSelector(state);
    expect(loading).toBe(false);
  });

  it("should select error state", () => {
    const error = getPropertyErrorSelector(state);
    expect(error).toBeNull();
  });
});
