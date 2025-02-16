import { menuItems } from "../../constants/sidebarItems";
import SidebarItem from "./SidebarItem";

const SidebarNavigation = () => {
  return (
    <div className="SidebarNavigation py-2 space-y-2">
      {menuItems.map(({ to, icon, label, count }) => (
        <SidebarItem key={to} to={to} icon={icon} label={label} count={count} />
      ))}
    </div>
  );
};

export default SidebarNavigation;
