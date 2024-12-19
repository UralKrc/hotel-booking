import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  fetchPropertyById as fetchPropertyByIdAction,
  fetchPropertyByIdResponse,
  getProperties as getPropertiesAction,
  getPropertiesResponse,
} from "./actions";
import { fetchPropertyById, getProperties } from "./service";

function* getPropertiesEffect() {
  const properties = yield call(getProperties);
  yield put(getPropertiesResponse(properties));
}

function* fetchPropertyByIdEffect(action) {
  const property = yield call(fetchPropertyById, action.payload);
  yield put(fetchPropertyByIdResponse(property));
}

function* watchGetProperties() {
  yield takeLatest(getPropertiesAction.type, getPropertiesEffect);
}

function* watchFetchPropertyById() {
  yield takeLatest(fetchPropertyByIdAction.type, fetchPropertyByIdEffect);
}

export default function* propertySaga() {
  yield all([fork(watchGetProperties), fork(watchFetchPropertyById)]);
}
