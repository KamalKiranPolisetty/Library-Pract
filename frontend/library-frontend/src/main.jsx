import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";  // Assuming App.jsx is correct
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ViewBook from "./components/ViewBook.jsx";
import CreateBook from "./components/CreateBook.jsx";
import EditBook from "./components/EditBook.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/viewBook/:id",
    element: <ViewBook />,
  },
  {
    path: "/createBook",
    element: <CreateBook />,
  },
  {
    path: "/editBook/:id",
    element: <EditBook />
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
