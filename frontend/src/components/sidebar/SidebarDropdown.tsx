import { ChevronRight } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { SidebarItemProps } from "../../types/sidebarItem";
import { JSX } from "react";

type SidebarDropdownProps = {
  icon: JSX.Element;
  label: string;
  isOpen: boolean;
  onClick: () => void;
  items: SidebarItemProps[];
};

const SidebarDropdown = ({
  icon,
  label,
  isOpen,
  onClick,
  items,
}: SidebarDropdownProps) => {
  return (
    <>
      <button
        className="w-full h-9 flex items-center gap-2 px-2 rounded-lg transition hover:bg-zinc-50/5"
        onClick={onClick}
      >
        {icon}
        <span>{label}</span>
        <ChevronRight
          size={20}
          strokeWidth={1}
          className={`ml-auto transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="w-11/12 ml-auto max-h-44 space-y-2 overflow-y-auto">
          {items.map(({ icon, label, to }) => (
            <SidebarItem key={to} icon={icon} label={label} to={to} />
          ))}
        </div>
      )}
    </>
  );
};

export default SidebarDropdown;
