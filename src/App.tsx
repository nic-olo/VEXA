import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);

function App() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
  }

  return <RouterProvider router={router} />;
}

export default App;
