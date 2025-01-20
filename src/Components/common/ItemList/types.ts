import { ReactNode } from "react";

interface ItemProps {
  title: string;
  label: string | ReactNode;
  icon?: ReactNode;
  color?: string;
}

export interface ItemListProps {
  items: ItemProps[];
  vertical?: boolean;
  align?: "start" | "center" | "end";
}
