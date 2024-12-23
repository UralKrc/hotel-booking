import { Policy } from "../../../../Types/types";

export interface CancellationPolicyItemsProps {
  policies: Policy[];
  onSave: (updatedPolicy: Policy) => void;
}
