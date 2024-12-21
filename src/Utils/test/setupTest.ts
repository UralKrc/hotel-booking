import { RootState } from "../../Store/types";
import { mockProperty } from "./mockProperty";

export const mockError = "Test error message";

export const mockInitialState: RootState = {
  property: {
    properties: [],
    property: null,
    loading: false,
    error: null,
  },
} as RootState;

export const mockStateWithProperties: RootState = {
  property: {
    ...mockInitialState.property,
    properties: [mockProperty],
  },
} as RootState;
