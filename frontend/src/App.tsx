import React from "react";
import logo from "./logo.svg";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/layouts/defaultLayout/DefaultLayout";
import CryptoTable from "./components/tables/crypto/CryptoTable";
import { store } from "./redux/store";
import { Provider } from "react-redux";

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
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
