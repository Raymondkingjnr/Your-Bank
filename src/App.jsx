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
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Landing_page />,
      },
      {
        path: "career",
        element: <Career_page />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "security",
        element: <Security_page />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign_up",
    element: <Sign_up />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
