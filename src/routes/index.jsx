import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import UserDetails from "../pages/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/users/:id", element: <UserDetails /> },
    ],
  },
]);

export default router;
