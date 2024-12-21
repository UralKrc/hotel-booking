import {
  getPropertiesSelector,
  getPropertyByIdSelector,
  getPropertyErrorSelector,
  getPropertyLoadingSelector,
} from "../selectors";
import { mockProperty1 as mockProperty } from "../utils/mockData";

describe("property selectors", () => {
  const state = {
    property: {
      properties: [mockProperty],
      property: mockProperty,
      loading: false,
      error: null,
    },
  };

  it("should select properties", () => {
    expect(getPropertiesSelector(state)).toEqual([mockProperty]);
  });

  it("should select current property", () => {
    expect(getPropertyByIdSelector(state)).toEqual(mockProperty);
  });

  it("should select loading state", () => {
    expect(getPropertyLoadingSelector(state)).toBe(false);
  });

  it("should select error state", () => {
    expect(getPropertyErrorSelector(state)).toBeNull();
  });
});
