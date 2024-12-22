import {
  getPropertiesSelector,
  getPropertyByIdSelector,
  getPropertyErrorSelector,
  getPropertyLoadingSelector,
} from "../selectors";
import { mockProperties } from "../utils/mockData";

describe("property selectors", () => {
  const state = {
    property: {
      properties: [mockProperties[0]],
      property: mockProperties[0],
      loading: false,
      error: null,
    },
  };

  it("should select properties", () => {
    expect(getPropertiesSelector(state)).toEqual([mockProperties[0]]);
  });

  it("should select current property", () => {
    expect(getPropertyByIdSelector(state)).toEqual(mockProperties[0]);
  });

  it("should select loading state", () => {
    expect(getPropertyLoadingSelector(state)).toBe(false);
  });

  it("should select error state", () => {
    expect(getPropertyErrorSelector(state)).toBeNull();
  });
});
