import propertySlice, { initialState } from "../slice";
import {
  fetchProperties,
  fetchPropertyByIdThunk,
  initializeDataThunk,
} from "../thunks";
import { mockProperties } from "../utils/mockData";

describe("propertyReducer", () => {
  it("should handle initializeDataThunk.pending", () => {
    const action = { type: initializeDataThunk.pending.type };
    const state = propertySlice(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loading: true,
      error: null,
    });
  });

  it("should handle initializeDataThunk.fulfilled", () => {
    const action = {
      type: initializeDataThunk.fulfilled.type,
      payload: mockProperties,
    };
    const state = propertySlice(initialState, action);
    expect(state).toEqual({
      ...initialState,
      properties: mockProperties,
      loading: false,
    });
  });

  it("should handle initializeDataThunk.rejected", () => {
    const action = {
      type: initializeDataThunk.rejected.type,
      payload: "An error occurred",
    };
    const state = propertySlice(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loading: false,
      error: "An error occurred",
    });
  });

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
      payload: mockProperties,
    };
    const state = propertySlice(initialState, action);
    expect(state).toEqual({
      ...initialState,
      properties: mockProperties,
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
      properties: [mockProperties[0]],
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
});
