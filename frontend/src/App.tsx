import React from "react";
import logo from "./logo.svg";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/layouts/defaultLayout/DefaultLayout";
import CryptoTable from "./components/tables/crypto/CryptoTable";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "/",
          element: <CryptoTable />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
