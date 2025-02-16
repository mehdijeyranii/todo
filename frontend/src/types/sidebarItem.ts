import { JSX } from "react";

export interface SidebarItemProps {
  to: string;
  icon: JSX.Element;
  label: string;
  count?: number;
}
