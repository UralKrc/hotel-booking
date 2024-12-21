import { configureStore } from "@reduxjs/toolkit";
import propertyReducer, { initialState } from "../reducer";
import * as service from "../service";
import {
  editPropertyThunk,
  fetchProperties,
  fetchPropertyByIdThunk,
  removePropertyThunk,
} from "../thunks";
import {
  mockProperties,
  mockProperty1 as mockProperty,
} from "./utils/mockData";

const createTestStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      property: propertyReducer,
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
      .mockResolvedValueOnce(mockProperty);
    await store.dispatch(fetchPropertyByIdThunk(mockProperty.id));
    const state = store.getState().property;
    expect(state.property).toEqual(mockProperty);
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
  });

  it("should handle fetch property by id failure", async () => {
    const errorMessage = "An error occurred";
    jest
      .spyOn(service, "fetchPropertyById")
      .mockRejectedValueOnce(new Error(errorMessage));
    await store.dispatch(fetchPropertyByIdThunk(mockProperty.id));
    const state = store.getState().property;
    expect(state.property).toBeNull();
    expect(state.loading).toBe(false);
    expect(state.error).toBe(errorMessage);
  });

  it("should remove property successfully", async () => {
    jest
      .spyOn(service, "removeProperty")
      .mockResolvedValueOnce(mockProperty.id);
    await store.dispatch(removePropertyThunk(mockProperty.id));
    const state = store.getState().property;
    expect(state.properties).toEqual([]);
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
  });

  it("should handle remove property failure", async () => {
    const errorMessage = "An error occurred";
    store = createTestStore({
      property: {
        properties: [mockProperty],
        property: null,
        loading: false,
        error: null,
      },
    });
    jest
      .spyOn(service, "removeProperty")
      .mockRejectedValueOnce(new Error(errorMessage));
    await store.dispatch(removePropertyThunk(mockProperty.id));
    const state = store.getState().property;
    expect(state.properties).toEqual([mockProperty]);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(errorMessage);
  });

  it("should edit property successfully", async () => {
    const updatedProperty = { ...mockProperty, name: "Updated Property" };
    jest.spyOn(service, "editProperty").mockResolvedValueOnce(updatedProperty);
    store = configureStore({
      reducer: {
        property: propertyReducer,
      },
      preloadedState: {
        property: {
          ...initialState,
          property: mockProperty,
          properties: [mockProperty],
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
        property: propertyReducer,
      },
      preloadedState: {
        property: {
          ...initialState,
          properties: [mockProperty],
          property: mockProperty,
        },
      },
    });

    jest
      .spyOn(service, "editProperty")
      .mockRejectedValueOnce(new Error(errorMessage));

    await store.dispatch(editPropertyThunk(mockProperty));
    const state = store.getState().property;
    expect(state.properties).toEqual([mockProperty]);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(errorMessage);
  });
});
