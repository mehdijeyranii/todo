import React, { useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Sidebar from "../components/sidebar/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  return (
    <div className="w-screen h-screen">
      <PanelGroup
        autoSaveId="sidebar-width"
        direction="horizontal"
        className="w-full h-full flex"
      >
        <Panel
          defaultSize={20}
          minSize={18}
          maxSize={25}
          className="bg-zinc-200 dark:bg-zinc-900 h-full w-full"
        >
          <Sidebar />
        </Panel>

        <PanelResizeHandle
          className={`w-1 transition-all duration-300 ${
            isDragging ? "bg-zinc-600 dark:bg-zinc-700" : "bg-transparent"
          } cursor-ew-resize`}
          onDragging={(dragging) => setIsDragging(dragging)}
        />

        <Panel className="bg-zinc-200 dark:bg-zinc-900 p-4">
          {children}
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default MainLayout;
