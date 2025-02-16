import { useState } from "react";
import SidebarDropdown from "./SidebarDropdown";
import { SidebarItemProps } from "../../types/sidebarItem";
import { FolderGit2, Hash, SquareCheckBig } from "lucide-react";
import { taskItems } from "../../constants/sidebarItems";

const SidebarWorkspaces = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const userProject: SidebarItemProps[] = [
    {
      to: "/app/project/test-1",
      icon: <Hash size={20} strokeWidth={1} />,
      label: "test 1",
    },
    {
      to: "/app/project/test-2",
      icon: <Hash size={20} strokeWidth={1} />,
      label: "test 2",
    },
    {
      to: "/app/project/test-3",
      icon: <Hash size={20} strokeWidth={1} />,
      label: "test 3",
    },
    {
      to: "/app/project/test-4",
      icon: <Hash size={20} strokeWidth={1} />,
      label: "test 4",
    },
    {
      to: "/app/project/test-5",
      icon: <Hash size={20} strokeWidth={1} />,
      label: "test 5",
    },
  ];

  const handleToggle = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <div className="py-2 space-y-2">
      <SidebarDropdown
        icon={<SquareCheckBig strokeWidth={1} />}
        label="My Tasks"
        isOpen={openDropdown === "My Tasks"}
        onClick={() => handleToggle("My Tasks")}
        items={taskItems}
      />
      <SidebarDropdown
        icon={<FolderGit2 strokeWidth={1} />}
        label="Projects"
        isOpen={openDropdown === "Projects"}
        onClick={() => handleToggle("Projects")}
        items={userProject}
      />
    </div>
  );
};

export default SidebarWorkspaces;
