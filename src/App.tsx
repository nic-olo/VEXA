import React from "react";
import "./App.css";
import Layout from "./component/Layout";
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
    navigator.serviceWorker.register("./pwa-examples/js13kpwa/sw.js");
  }
  
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
