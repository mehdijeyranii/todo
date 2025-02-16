import SidebarHeader from "./SidebarHeader";
import SidebarContent from "./SidebarContent";
import SidebarFooter from "./SidebarFooter";
const Sidebar = () => {
  return (
    <div className="h-full bg-zinc-900 flex flex-col justify-between">
      <div className="w-full flex flex-col gap-2">
        <SidebarHeader />
        <SidebarContent />
      </div>
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
