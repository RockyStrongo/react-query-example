import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Users from "../pages/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/users",
    element: <Users />,
  },
]);