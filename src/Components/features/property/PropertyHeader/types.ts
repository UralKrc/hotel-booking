import { Property } from "../../../../Types/types";

export interface PropertyHeaderProps {
  property: Property;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
}
