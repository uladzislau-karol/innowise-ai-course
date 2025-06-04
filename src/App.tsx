import { createBrowserRouter, RouterProvider } from "react-router";
import { LINKS } from "./components/navigation/constants";
import "./main.css";

const router = createBrowserRouter(LINKS);

export const App: React.FC = () => {
  return <RouterProvider router={router} />;
};
