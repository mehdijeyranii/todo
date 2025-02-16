import React from "react";
import SidebarActions from "./SidebarActions";
import SidebarNavigation from "./SidebarNavigation";
import SidebarWorkspaces from "./SidebarWorkspaces";

const SidebarContent = () => {
  return (
    <div className="divide-y divide-zinc-600 px-2">
      <SidebarActions />
      <SidebarNavigation />
      <SidebarWorkspaces />
    </div>
  );
};

export default React.memo(SidebarContent);
