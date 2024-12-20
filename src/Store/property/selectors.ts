import { RootState } from "../types";

export const getPropertiesSelector = (state: RootState) =>
  state.property.properties;
export const getPropertyByIdSelector = (state: RootState) =>
  state.property.property;
