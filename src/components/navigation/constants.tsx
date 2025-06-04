import { Task1 } from "../task1";
import { Navigation } from "./navigation";

export const LINKS = [
  {
    path: "/",
    label: "",
    Component: Navigation,
  },
  {
    path: "/1",
    label: "Task 1",
    Component: Task1,
  },
  {
    path: "/2",
    label: "Task 2",
    Component: () => <></>,
  },
  {
    path: "/3",
    label: "Task 3",
    Component: () => <></>,
  },
];
