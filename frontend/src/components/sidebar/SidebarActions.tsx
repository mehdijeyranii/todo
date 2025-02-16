import { CirclePlus, Search } from "lucide-react";

const actions = [
  {
    icon: <CirclePlus strokeWidth={1} />,
    label: "Add Tasks",
    textColor: "text-rose-500",
  },
  {
    icon: <Search strokeWidth={1} />,
    label: "Search",
    textColor: "text-zinc-300",
  },
];

const SidebarActions = () => {
  return (
    <div className="space-y-2 pb-2">
      {actions.map(({ icon, label, textColor }, index) => (
        <button
          key={index}
          className={`w-full h-9 flex items-center gap-2 px-2 rounded-lg transition hover:bg-zinc-800 ${textColor}`}
        >
          {icon}
          <span className="">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default SidebarActions;
