import { configureStore } from "@reduxjs/toolkit";
import * as service from "../service";
import propertySlice, { initialState } from "../slice";
import {
  editPropertyThunk,
  fetchProperties,
  fetchPropertyByIdThunk,
  removePropertyThunk,
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
    await store.dispatch(fetchPropertyByIdThunk(mockProperties[0].id));
    const state = store.getState().property;
    expect(state.property).toEqual(mockProperties[0]);
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
  });

  it("should handle fetch property by id failure", async () => {
    const errorMessage = "An error occurred";
    jest
      .spyOn(service, "fetchPropertyById")
      .mockRejectedValueOnce(new Error(errorMessage));
    await store.dispatch(fetchPropertyByIdThunk(mockProperties[0].id));
    const state = store.getState().property;
    expect(state.property).toBeNull();
    expect(state.loading).toBe(false);
    expect(state.error).toBe(errorMessage);
  });

  it("should remove property successfully", async () => {
    jest
      .spyOn(service, "removeProperty")
      .mockResolvedValueOnce(mockProperties[0].id);
    await store.dispatch(removePropertyThunk(mockProperties[0].id));
    const state = store.getState().property;
    expect(state.properties).toEqual([]);
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
  });

  it("should handle remove property failure", async () => {
    const errorMessage = "An error occurred";
    store = createTestStore({
      property: {
        properties: [mockProperties[0]],
        property: null,
        loading: false,
        error: null,
      },
    });
    jest
      .spyOn(service, "removeProperty")
      .mockRejectedValueOnce(new Error(errorMessage));
    await store.dispatch(removePropertyThunk(mockProperties[0].id));
    const state = store.getState().property;
    expect(state.properties).toEqual([mockProperties[0]]);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(errorMessage);
  });

  it("should edit property successfully", async () => {
    const updatedProperty = { ...mockProperties[0], name: "Updated Property" };
    jest.spyOn(service, "editProperty").mockResolvedValueOnce(updatedProperty);
    store = configureStore({
      reducer: {
        property: propertySlice,
      },
      preloadedState: {
        property: {
          ...initialState,
          property: mockProperties[0],
          properties: [mockProperties[0]],
        },
      },
    });

    await store.dispatch(editPropertyThunk(updatedProperty));

    const state = store.getState().property;
    expect(state.properties).toEqual([updatedProperty]);
    expect(state.property).toEqual(updatedProperty);
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
  });

  it("should handle edit property failure", async () => {
    const errorMessage = "An error occurred";
    store = configureStore({
      reducer: {
        property: propertySlice,
      },
      preloadedState: {
        property: {
          ...initialState,
          properties: [mockProperties[0]],
          property: mockProperties[0],
        },
      },
    });

    jest
      .spyOn(service, "editProperty")
      .mockRejectedValueOnce(new Error(errorMessage));

    await store.dispatch(editPropertyThunk(mockProperties[0]));
    const state = store.getState().property;
    expect(state.properties).toEqual([mockProperties[0]]);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(errorMessage);
  });
});
