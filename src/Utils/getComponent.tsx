import { Input, InputNumber, Select, Switch } from "antd";
import TimePicker from "../Components/common/TimePicker";
import { ComponentMap, FieldConfig } from "../Types/types";

const componentMap: ComponentMap = {
  TextArea: () => <Input.TextArea />,

  InputNumber: (field) => <InputNumber min={1} max={field.max} />,

  Select: (field, handleChange) => (
    <Select
      onChange={(value) => handleChange?.(value, field.name)}
      options={field.options}
    />
  ),

  Switch: () => <Switch />,

  TimePicker: () => <TimePicker fullWidth />,

  // Default input
  Input: (field, handleChange) => <Input />,
};

export const getComponent = (
  field: FieldConfig,
  handleChange?: (value: string, field: string) => void
): JSX.Element => {
  const componentCreator = componentMap[field.component || "Input"];
  return componentCreator
    ? componentCreator(field, handleChange)
    : componentMap.Input(field, handleChange);
};
