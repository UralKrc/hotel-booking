import { Policy } from "../../../../Types/types";

export interface PolicyCardFormProps {
  policy: Policy;
  onSave: (updatedPolicy: Policy) => void;
  className?: string;
}
