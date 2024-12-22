import { FieldConfig } from "../../../../../Types/types";

export interface EditPropertyFormRowProps {
  fields: FieldConfig[];
  handleChange?: (value: string, field: string) => void;
  gutter?: number;
}
