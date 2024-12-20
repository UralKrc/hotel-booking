import { all, call, fork, put, takeLatest } from "redux-saga/effects";
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
import {
  editProperty,
  fetchPropertyById,
  getProperties,
  removeProperty,
} from "./service";

function* getPropertiesEffect(): Generator {
  try {
    yield put(getPropertiesRequest());
    const properties = (yield call(getProperties)) as Property[];
    yield put(getPropertiesResponse(properties));
  } catch (error: any) {
    yield put(getPropertiesFailure(error.message));
  }
}

function* fetchPropertyByIdEffect(action: {
  payload: { id: string };
}): Generator {
  try {
    const property = (yield call(
      fetchPropertyById,
      action.payload.id
    )) as Property | null;
    yield put(fetchPropertyByIdResponse(property));
  } catch (error) {
    yield put(
      fetchPropertyByIdFailure(
        error instanceof Error ? error.message : "An error occurred"
      )
    );
  }
}

function* removePropertyEffect(action: { payload: string }): Generator {
  try {
    const id = (yield call(removeProperty, action.payload)) as string;
    yield put(removePropertyResponse(id));
  } catch (error) {
    yield put(
      removePropertyFailure(
        error instanceof Error ? error.message : "An error occurred"
      )
    );
  }
}

function* editPropertyEffect(action: { payload: Property }): Generator {
  try {
    const property = (yield call(editProperty, action.payload)) as Property;
    yield put(editPropertyResponse(property));
  } catch (error) {
    yield put(
      editPropertyFailure(
        error instanceof Error ? error.message : "An error occurred"
      )
    );
  }
}

function* watchGetProperties() {
  yield takeLatest(getPropertiesRequest.type, getPropertiesEffect);
}

function* watchFetchPropertyById() {
  yield takeLatest(fetchPropertyByIdRequest, fetchPropertyByIdEffect);
}

function* watchRemoveProperty() {
  yield takeLatest(removePropertyRequest, removePropertyEffect);
}

function* watchEditProperty() {
  yield takeLatest(editPropertyRequest, editPropertyEffect);
}

export default function* propertySaga() {
  yield all([
    fork(watchGetProperties),
    fork(watchFetchPropertyById),
    fork(watchRemoveProperty),
    fork(watchEditProperty),
  ]);
}
