import propertySlice, { initialState } from "../slice";
import {
  editPropertyThunk,
  fetchProperties,
  fetchPropertyByIdThunk,
  removePropertyThunk,
} from "../thunks";
import { mockProperties } from "../utils/mockData";

describe("propertyReducer", () => {
  it("should handle fetchProperties.pending", () => {
    const action = { type: fetchProperties.pending.type };
    const state = propertySlice(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loading: true,
      error: null,
    });
  });

  it("should handle fetchProperties.fulfilled", () => {
    const action = {
      type: fetchProperties.fulfilled.type,
      payload: [mockProperties[0]],
    };
    const state = propertySlice(initialState, action);
    expect(state).toEqual({
      ...initialState,
      properties: [mockProperties[0]],
      loading: false,
    });
  });

  it("should handle fetchProperties.rejected", () => {
    const action = {
      type: fetchProperties.rejected.type,
      payload: "An error occurred",
    };
    const state = propertySlice(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loading: false,
      error: "An error occurred",
    });
  });

  it("should handle fetchPropertyByIdThunk.pending", () => {
    const action = { type: fetchPropertyByIdThunk.pending.type };
    const state = propertySlice(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loading: true,
      error: null,
    });
  });

  it("should handle fetchPropertyByIdThunk.fulfilled", () => {
    const action = {
      type: fetchPropertyByIdThunk.fulfilled.type,
      payload: mockProperties[0],
    };
    const state = propertySlice(initialState, action);
    expect(state).toEqual({
      ...initialState,
      property: mockProperties[0],
      loading: false,
    });
  });

  it("should handle fetchPropertyByIdThunk.rejected", () => {
    const action = {
      type: fetchPropertyByIdThunk.rejected.type,
      payload: "An error occurred",
    };
    const state = propertySlice(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loading: false,
      error: "An error occurred",
    });
  });

  it("should handle removePropertyThunk.pending", () => {
    const action = { type: removePropertyThunk.pending.type };
    const state = propertySlice(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loading: true,
      error: null,
    });
  });

  it("should handle removePropertyThunk.fulfilled", () => {
    const initialStateWithProperties = {
      ...initialState,
      properties: [mockProperties[0]],
    };
    const action = {
      type: removePropertyThunk.fulfilled.type,
      payload: mockProperties[0].id,
    };
    const state = propertySlice(initialStateWithProperties, action);
    expect(state).toEqual({
      ...initialState,
      properties: [],
      loading: false,
    });
  });

  it("should handle removePropertyThunk.rejected", () => {
    const action = {
      type: removePropertyThunk.rejected.type,
      payload: "An error occurred",
    };
    const state = propertySlice(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loading: false,
      error: "An error occurred",
    });
  });

  it("should handle editPropertyThunk.pending", () => {
    const action = { type: editPropertyThunk.pending.type };
    const state = propertySlice(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loading: true,
      error: null,
    });
  });

  it("should handle editPropertyThunk.fulfilled", () => {
    const initialStateWithProperties = {
      ...initialState,
      properties: [mockProperties[0]],
      property: mockProperties[0],
    };
    const updatedProperty = { ...mockProperties[0], name: "Updated Property" };
    const action = {
      type: editPropertyThunk.fulfilled.type,
      payload: updatedProperty,
    };
    const state = propertySlice(initialStateWithProperties, action);
    expect(state).toEqual({
      ...initialState,
      properties: [updatedProperty],
      property: updatedProperty,
      loading: false,
    });
  });

  it("should handle editPropertyThunk.rejected", () => {
    const action = {
      type: editPropertyThunk.rejected.type,
      payload: "An error occurred",
    };
    const state = propertySlice(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loading: false,
      error: "An error occurred",
    });
  });
});
