import { NavLink } from "react-router-dom";
import { LogOut } from "lucide-react";

const SidebarFooter = () => {
  return (
    <div className="px-2 mb-2">
      <NavLink
        to="/logout"
        className="flex items-center gap-2 px-2 h-9 rounded-lg transition hover:bg-zinc-800 text-rose-500"
      >
        <LogOut strokeWidth={1} /> <span>Logout</span>
      </NavLink>
    </div>
  );
};

export default SidebarFooter;
