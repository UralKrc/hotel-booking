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

describe("Property Actions", () => {
  test("getProperties actions", () => {
    const properties: Property[] = [
      { id: "123", name: "Test Property" },
    ] as Property[];
    const error = "Error message";

    expect(getPropertiesRequest()).toEqual({ type: "GET_PROPERTIES_REQUEST" });
    expect(getPropertiesResponse(properties)).toEqual({
      type: "GET_PROPERTIES_RESPONSE",
      payload: properties,
    });
    expect(getPropertiesFailure(error)).toEqual({
      type: "GET_PROPERTIES_FAILURE",
      payload: error,
    });
  });

  test("fetchPropertyById actions", () => {
    const id = "123";
    const property = { id, name: "Test Property" } as Property;
    const error = "Error message";

    expect(fetchPropertyByIdRequest({ id })).toEqual({
      type: "FETCH_PROPERTY_BY_ID_REQUEST",
      payload: { id },
    });
    expect(fetchPropertyByIdResponse(property)).toEqual({
      type: "FETCH_PROPERTY_BY_ID_RESPONSE",
      payload: property,
    });
    expect(fetchPropertyByIdFailure(error)).toEqual({
      type: "FETCH_PROPERTY_BY_ID_FAILURE",
      payload: error,
    });
  });

  test("removeProperty actions", () => {
    const id = "123";
    const error = "Error message";

    expect(removePropertyRequest(id)).toEqual({
      type: "REMOVE_PROPERTY_REQUEST",
      payload: id,
    });
    expect(removePropertyResponse(id)).toEqual({
      type: "REMOVE_PROPERTY_RESPONSE",
      payload: id,
    });
    expect(removePropertyFailure(error)).toEqual({
      type: "REMOVE_PROPERTY_FAILURE",
      payload: error,
    });
  });

  test("editProperty actions", () => {
    const property = {
      id: "123",
      name: "Updated Property",
    } as Property;
    const error = "Error message";

    expect(editPropertyRequest(property)).toEqual({
      type: "EDIT_PROPERTY_REQUEST",
      payload: property,
    });
    expect(editPropertyResponse(property)).toEqual({
      type: "EDIT_PROPERTY_RESPONSE",
      payload: property,
    });
    expect(editPropertyFailure(error)).toEqual({
      type: "EDIT_PROPERTY_FAILURE",
      payload: error,
    });
  });
});
