import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const HomeRoutes = [
  {
    path: "",
    element: <Home />
  },
  {
    path: "user_management",
    element: <UserManagement />
  },
  {
    path: "setting",
    element: <Setting />
  }
];
