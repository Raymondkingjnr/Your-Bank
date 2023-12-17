import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Career_page,
  Home,
  Landing_page,
  Login,
  Security_page,
  Sign_up,
  Error,
} from "./pages";
// import { store } from "./store";
import ErrorElement from "./components/ErrorElement";

import { action as RegisterAction } from "./pages/Sign_up";
// import { action as loginAction } from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        errorElement: <ErrorElement />,
        element: <Landing_page />,
      },
      {
        path: "career",
        // errorElement: <ErrorElement />,
        element: <Career_page />,
      },
      {
        path: "about",
        // errorElement: <ErrorElement />,
        element: <About />,
      },
      {
        path: "security",
        // errorElement: <ErrorElement />,
        element: <Security_page />,
      },
    ],
  },
  {
    path: "/login",
    errorElement: <Error />,
    element: <Login />,
  },
  {
    path: "/sign_up",
    errorElement: <Error />,
    element: <Sign_up />,
    action: RegisterAction,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
