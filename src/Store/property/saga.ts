import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { Property } from "../types";
import {
  fetchPropertyById as fetchPropertyByIdAction,
  fetchPropertyByIdResponse,
  getProperties as getPropertiesAction,
  getPropertiesResponse,
  removeProperty,
  removePropertyResponse,
  editProperty,
  editPropertyResponse,
} from "./actions";
import {
  fetchPropertyById,
  getProperties,
  removeProperty as removePropertyService,
  editProperty as editPropertyService,
} from "./service";

function* getPropertiesEffect() {
  const properties: Property[] = yield call(getProperties);
  yield put(getPropertiesResponse(properties));
}

function* fetchPropertyByIdEffect(action: PayloadAction<string>) {
  const property: Property | null = yield call(
    fetchPropertyById,
    action.payload
  );
  yield put(fetchPropertyByIdResponse(property));
}

function* removePropertyEffect(action: PayloadAction<string>) {
  const id: string = yield call(removePropertyService, action.payload);
  yield put(removePropertyResponse(id));
}

function* editPropertyEffect(action: PayloadAction<Property>) {
  const property: Property = yield call(editPropertyService, action.payload);
  yield put(editPropertyResponse(property));
}

function* watchGetProperties() {
  yield takeLatest(getPropertiesAction.type, getPropertiesEffect);
}

function* watchFetchPropertyById() {
  yield takeLatest(fetchPropertyByIdAction.type, fetchPropertyByIdEffect);
}

function* watchRemoveProperty() {
  yield takeLatest(removeProperty.type, removePropertyEffect);
}

function* watchEditProperty() {
  yield takeLatest(editProperty.type, editPropertyEffect);
}

export default function* propertySaga() {
  yield all([
    fork(watchGetProperties),
    fork(watchFetchPropertyById),
    fork(watchRemoveProperty),
    fork(watchEditProperty),
  ]);
}
