import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div className="content w-screen h-screen overflow-hidden flex justify-stretch items-stretch">
      <Sidebar />
      <div className="resize w-1 h-full bg-zinc-950"></div>
      <div className="main w-full h-full bg-green-600"></div>
    </div>
  );
};

export default App;
