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
import ErrorElement from "./components/ErrorElement";

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
        errorElement: <ErrorElement />,
        element: <Career_page />,
      },
      {
        path: "about",
        errorElement: <ErrorElement />,
        element: <About />,
      },
      {
        path: "security",
        errorElement: <ErrorElement />,
        element: <Security_page />,
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
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
