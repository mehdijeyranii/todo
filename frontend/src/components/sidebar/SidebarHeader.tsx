import { Bell, Bolt } from "lucide-react";
import ImageUser from "../../assets/01.png";
const SidebarHeader = () => {
  return (
    <div className="w-full h-18 bg-zinc-900 border-b border-zinc-600 p-2">
      <div className="w-full h-12 bg-zinc-50/5 shadow-xl rounded-lg flex justify-between items-center px-2">
        <div className="flex items-center gap-3">
          <img src={ImageUser} alt="User" className="size-8 rounded-full" />
          <span className="font-semibold truncate">Mehdi Jeyrani</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative">
            <Bell strokeWidth={1} />
            <span className="size-2 rounded-full bg-rose-500 absolute top-0 right-0"></span>
          </button>
          <button>
            <Bolt strokeWidth={1} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;
