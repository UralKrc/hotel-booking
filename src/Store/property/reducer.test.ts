import { Property } from "../types";
import {
  editPropertyFailure,
  editPropertyRequest,
  editPropertyResponse,
  fetchPropertyByIdFailure,
  fetchPropertyByIdRequest,
  fetchPropertyByIdResponse,
  getPropertiesFailure,
  getPropertiesRequest,
  getPropertiesResponse,
  removePropertyFailure,
  removePropertyRequest,
  removePropertyResponse,
} from "./actions";
import reducer from "./reducer";

describe("Property Reducer", () => {
  const initialState = {
    properties: [],
    property: null,
    loading: false,
    error: null,
  };

  const mockProperty: Property = {
    id: "1",
    name: "Property 1",
    description: "Test description",
    currency: "USD",
    rooms: 5,
    status: true,
    isAvailableForPartnerships: true,
    checkInTime: "14:00",
    checkOutTime: "11:00",
    timezone: "UTC",
    city: "Test City",
    country: "Test Country",
    addressLine1: "Test Address",
    postcode: "12345",
    domain: "test.com",
    email: "",
    phoneNumber: "",
    starRating: 4,
    images: [],
  };

  test("returns initial state", () => {
    expect(reducer(undefined, { type: "@@INIT" })).toEqual(initialState);
  });

  describe("getProperties", () => {
    test("handles request", () => {
      expect(reducer(initialState, getPropertiesRequest())).toEqual({
        ...initialState,
        loading: true,
        error: null,
      });
    });

    test("handles response", () => {
      const properties = [mockProperty];
      expect(reducer(initialState, getPropertiesResponse(properties))).toEqual({
        ...initialState,
        properties,
        loading: false,
      });
    });

    test("handles failure", () => {
      const error = "Error message";
      expect(reducer(initialState, getPropertiesFailure(error))).toEqual({
        ...initialState,
        loading: false,
        error,
      });
    });
  });

  describe("fetchPropertyById", () => {
    test("handles request", () => {
      expect(
        reducer(initialState, fetchPropertyByIdRequest({ id: "1" }))
      ).toEqual({
        ...initialState,
        loading: true,
        error: null,
      });
    });

    test("handles response", () => {
      expect(
        reducer(initialState, fetchPropertyByIdResponse(mockProperty))
      ).toEqual({
        ...initialState,
        property: mockProperty,
        loading: false,
      });
    });

    test("handles failure", () => {
      const error = "Error message";
      expect(reducer(initialState, fetchPropertyByIdFailure(error))).toEqual({
        ...initialState,
        loading: false,
        error,
      });
    });
  });

  describe("removeProperty", () => {
    const stateWithProperties = {
      ...initialState,
      properties: [mockProperty, { ...mockProperty, id: "2" }],
    };

    test("handles request", () => {
      expect(reducer(stateWithProperties, removePropertyRequest("1"))).toEqual({
        ...stateWithProperties,
        loading: true,
        error: null,
      });
    });

    test("handles response", () => {
      expect(reducer(stateWithProperties, removePropertyResponse("1"))).toEqual(
        {
          ...initialState,
          properties: [{ ...mockProperty, id: "2" }],
          loading: false,
        }
      );
    });

    test("handles failure", () => {
      const error = "Error message";
      expect(
        reducer(stateWithProperties, removePropertyFailure(error))
      ).toEqual({
        ...stateWithProperties,
        loading: false,
        error,
      });
    });
  });

  describe("editProperty", () => {
    const stateWithProperties = {
      ...initialState,
      properties: [mockProperty, { ...mockProperty, id: "2" }],
    };

    test("handles request", () => {
      expect(
        reducer(stateWithProperties, editPropertyRequest(mockProperty))
      ).toEqual({
        ...stateWithProperties,
        loading: true,
        error: null,
      });
    });

    test("handles response", () => {
      const updatedProperty = { ...mockProperty, name: "Updated Property" };
      expect(
        reducer(stateWithProperties, editPropertyResponse(updatedProperty))
      ).toEqual({
        ...initialState,
        properties: [updatedProperty, { ...mockProperty, id: "2" }],
        loading: false,
      });
    });

    test("handles failure", () => {
      const error = "Error message";
      expect(reducer(stateWithProperties, editPropertyFailure(error))).toEqual({
        ...stateWithProperties,
        loading: false,
        error,
      });
    });
  });
});
