import { NavLink } from "react-router-dom";
import { SidebarItemProps } from "../../types/sidebarItem";

const SidebarItem: React.FC<SidebarItemProps> = ({
  to,
  icon,
  label,
  count,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 px-2 h-9 rounded-lg transition hover:bg-zinc-800 ${
          isActive ? "bg-rose-500/10 text-rose-500" : "text-zinc-300"
        }`
      }
    >
      {icon} {label}
      {count && (
        <span className="ml-auto size-5 grid place-content-center">
          {count}
        </span>
      )}
    </NavLink>
  );
};

export default SidebarItem;
