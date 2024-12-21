import { RootState } from "../Types/types";
import { mockProperty } from "./mockProperty";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

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
