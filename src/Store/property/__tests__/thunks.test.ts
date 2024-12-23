import { configureStore } from "@reduxjs/toolkit";
import * as service from "../service";
import propertySlice from "../slice";
import {
  fetchProperties,
  fetchPropertyByIdThunk,
  initializeDataThunk,
} from "../thunks";
import { mockProperties } from "../utils/mockData";

const createTestStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      property: propertySlice,
    },
    preloadedState,
  });
};

describe("property thunks", () => {
  let store: ReturnType<typeof createTestStore>;

  beforeEach(() => {
    store = createTestStore();
    jest.clearAllMocks();
  });

  it("should initialize data successfully", async () => {
    jest.spyOn(service, "loadInitialData").mockReturnValueOnce(mockProperties);
    await store.dispatch(initializeDataThunk());
    const state = store.getState().property;
    expect(state.properties).toEqual(mockProperties);
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
  });

  it("should fetch properties successfully", async () => {
    jest.spyOn(service, "getProperties").mockResolvedValueOnce(mockProperties);
    await store.dispatch(fetchProperties());
    const state = store.getState().property;
    expect(state.properties).toEqual(mockProperties);
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
  });

  it("should handle fetch properties failure", async () => {
    const errorMessage = "An error occurred";

    jest
      .spyOn(service, "getProperties")
      .mockRejectedValueOnce(new Error(errorMessage));

    await store.dispatch(fetchProperties());

    const state = store.getState().property;

    expect(state.properties).toEqual([]);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(errorMessage);
  });

  it("should fetch property by id successfully", async () => {
    jest
      .spyOn(service, "fetchPropertyById")
      .mockResolvedValueOnce(mockProperties[0]);
    await store.dispatch(fetchPropertyByIdThunk(mockProperties[0].property.id));
    const state = store.getState().property;
    expect(state.properties[0].property).toEqual(mockProperties[0].property);
    expect(state.properties[0].policies).toEqual(mockProperties[0].policies);
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
  });

  it("should handle fetch property by id failure", async () => {
    const errorMessage = "An error occurred";
    jest
      .spyOn(service, "fetchPropertyById")
      .mockRejectedValueOnce(new Error(errorMessage));
    await store.dispatch(fetchPropertyByIdThunk(mockProperties[0].property.id));
    const state = store.getState().property;
    expect(state.properties).toEqual([]);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(errorMessage);
  });
});
