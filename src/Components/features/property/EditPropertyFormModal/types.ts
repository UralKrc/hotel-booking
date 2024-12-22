import { Property } from "../../../../Types/types";

export interface EditPropertyFormModalProps {
  property: Property;
  visible: boolean;
  onCancel: () => void;
}
