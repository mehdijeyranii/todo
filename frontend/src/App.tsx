import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Inbox from "./pages/Inbox";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Inbox />
          </MainLayout>
        }
      />
      <Route
        path="/app/inbox"
        element={
          <MainLayout>
            <Inbox />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default App;
