import React, { useEffect, useReducer } from "react";
import { useAuth0, User } from "@auth0/auth0-react";

export default function Login() {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1000);
  }

  return (
    <div>
      <section className="w-full px-2 text-gray-700 bg-white">
        <div className="container flex flex-wrap items-center justify-between py-5 mx-auto flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row mt-4">
            <a
              href="/"
              className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <span className="mx-auto text-2xl font-semibold font-black leading-none text-gray-900 select-none">
                Capricon Technology
              </span>
            </a>
          </div>

          <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <button
              //   href="#"
              onClick={() => loginWithRedirect()}
              className="inline-flex items-center justify-center px-4 py-2 text-white font-medium leading-6 bg-blue-700 whitespace-no-wrap btn btn-primary border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Sign up
            </button>
          </div>
        </div>
      </section>

      <section className="px-2 py-6 md:py-12 md:pb-0 bg-white md:px-0 h-[100vh]">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block text-blue-700 xl:inline">Explore</span>
                  <span className="block  xl:inline">
                    {" "}
                    a world of captivating content and insightful articles.
                  </span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  Your hub for diverse topics and expert perspectives, all
                  designed to keep you informed and inspired.
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <button
                    // href="#_"
                    onClick={() => loginWithRedirect()}
                    className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-700 rounded-md sm:mb-0 hover:bg-blue-800 sm:w-auto"
                  >
                    Try It Free
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl mb-20 md:mb-0">
                <img
                  className=""
                  src="https://thumbs.dreamstime.com/b/blogging-blog-concepts-ideas-worktable-blogging-blog-concepts-ideas-white-worktable-110423482.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
