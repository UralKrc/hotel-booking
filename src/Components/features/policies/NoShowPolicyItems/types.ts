import { Policy } from "../../../../Types/types";

export interface NoShowPolicyItemsProps {
  policies: Policy[];
  onSave: (updatedPolicy: Policy) => void;
}
