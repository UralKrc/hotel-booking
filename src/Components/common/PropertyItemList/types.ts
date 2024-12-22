import { ReactNode } from "react";

export interface PropertyItemListProps {
  items: { title: string; label?: ReactNode }[];
  vertical?: boolean;
  align?: "start" | "center" | "end";
}
