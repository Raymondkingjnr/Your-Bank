import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  console.log(error);

  if (error.status === 404) {
    return (
      <main className="grid place-items-center px-8 min-h-[100vh]">
        <div className="text-center">
          <p className="text-9xl font-semibold text-[#fff]">404</p>
          <h1 className="mt-4 text-3xl text-gray-grey_title font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg leading-7">
            Sorry we couldn't find the page you'ar looking for.
          </p>
          <div className="mt-10">
            <Link
              to={"/"}
              className="btn bg-green-bg text-[#000] capitalize font-bold border-gray-text_color"
            >
              go back home
            </Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h4 className="text-center font-bold text-4xl">
        {" "}
        There was an error...{" "}
      </h4>
    </main>
  );
};

export default Error;
