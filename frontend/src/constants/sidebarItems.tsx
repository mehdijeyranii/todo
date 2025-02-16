import {
  Inbox,
  Calendar1,
  CalendarDays,
  LayoutGrid,
  Pin,
  Flag,
  CalendarArrowUp,
  CheckCheck,
} from "lucide-react";

import { SidebarItemProps } from "../types/sidebarItem";

const menuItems: SidebarItemProps[] = [
  {
    to: "/app/inbox",
    icon: <Inbox strokeWidth={1} />,
    label: "Inbox",
    count: 4,
  },
  {
    to: "/app/today",
    icon: <Calendar1 strokeWidth={1} />,
    label: "Today",
    count: 4,
  },
  {
    to: "/app/upcoming",
    icon: <CalendarDays strokeWidth={1} />,
    label: "Upcoming",
    count: 4,
  },
  {
    to: "/app/filter",
    icon: <LayoutGrid strokeWidth={1} />,
    label: "Filters & Labels",
  },
];

const taskItems: SidebarItemProps[] = [
  {
    to: "/app/tasks/pinned",
    icon: <Pin size={20} strokeWidth={1} />,
    label: "Pinned Tasks",
  },
  {
    to: "/app/tasks/priority",
    icon: <Flag size={20} strokeWidth={1} />,
    label: "Priority Tasks",
  },
  {
    to: "/app/tasks/recants",
    icon: <CalendarArrowUp size={20} strokeWidth={1} />,
    label: "Recants",
  },
  {
    to: "/app/tasks/completed",
    icon: <CheckCheck size={20} strokeWidth={1} />,
    label: "Completed Tasks",
  },
];

export { menuItems, taskItems };
