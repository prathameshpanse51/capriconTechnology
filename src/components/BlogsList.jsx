import { useAuth0 } from "@auth0/auth0-react";
import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

export default function BlogsList({ userEmail }) {
  const { isAuthenticated } = useAuth0();
  const [blogsList, setBlogsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(
        "https://capricontechnologybackend.onrender.com/blogslist"
      );
      const data = await res.json();
      if (isAuthenticated) {
        data.map((e) => {
          if (e.writerEmail === userEmail) {
            setBlogsList((prev) => [...prev, e]);
          }
        });
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Open modal function
  const openModal = (idx) => {
    document.getElementById(`user-blog${idx}`).style.display = "flex";
  };

  // Close modal function
  const closeModal = (idx) => {
    document.getElementById(`user-blog${idx}`).style.display = "none";
  };

  return (
    <>
      <h1 className="text-4xl font-bold mb-10">Your Blogs</h1>

      {loading && (
        <div className="flex flex-row gap-4 flex-wrap w-full mx-auto justify-center">
          <div
            role="status"
            class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700 w-full"
          >
            <div class="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mb-4"></div>
            <div class="h-4 w-36 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-5 w-20 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-6 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-6 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div class="flex items-center mt-4">
              <div>
                <div class="h-10 bg-gray-200 rounded-xl dark:bg-gray-700 w-32 mb-2"></div>
                <div class="w-48 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
            <span class="sr-only">Loading...</span>
          </div>{" "}
          <div
            role="status"
            class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700 w-full"
          >
            <div class="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mb-4"></div>
            <div class="h-4 w-36 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-5 w-20 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-6 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-6 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div class="flex items-center mt-4">
              <div>
                <div class="h-10 bg-gray-200 rounded-xl dark:bg-gray-700 w-32 mb-2"></div>
                <div class="w-48 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
            <span class="sr-only">Loading...</span>
          </div>{" "}
          <div
            role="status"
            class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700 w-full"
          >
            <div class="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mb-4"></div>
            <div class="h-4 w-36 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-5 w-20 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-6 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-6 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div class="flex items-center mt-4">
              <div>
                <div class="h-10 bg-gray-200 rounded-xl dark:bg-gray-700 w-32 mb-2"></div>
                <div class="w-48 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
            <span class="sr-only">Loading...</span>
          </div>{" "}
          <div
            role="status"
            class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700 w-full"
          >
            <div class="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mb-4"></div>
            <div class="h-4 w-36 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-5 w-20 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-6 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-6 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div class="flex items-center mt-4">
              <div>
                <div class="h-10 bg-gray-200 rounded-xl dark:bg-gray-700 w-32 mb-2"></div>
                <div class="w-48 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
            <span class="sr-only">Loading...</span>
          </div>{" "}
          <div
            role="status"
            class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700 w-full"
          >
            <div class="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mb-4"></div>
            <div class="h-4 w-36 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-5 w-20 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-6 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-6 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div class="flex items-center mt-4">
              <div>
                <div class="h-10 bg-gray-200 rounded-xl dark:bg-gray-700 w-32 mb-2"></div>
                <div class="w-48 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
            <span class="sr-only">Loading...</span>
          </div>{" "}
          <div
            role="status"
            class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700 w-full"
          >
            <div class="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mb-4"></div>
            <div class="h-4 w-36 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-5 w-20 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-6 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-6 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div class="flex items-center mt-4">
              <div>
                <div class="h-10 bg-gray-200 rounded-xl dark:bg-gray-700 w-32 mb-2"></div>
                <div class="w-48 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {!loading && (
        <div className="mx-auto max-w-7xl px-4">
          <main className="flex flex-row flex-wrap justify-center gap-4 mb-10">
            {blogsList.length === 0 && (
              <h2 className="text-2xl font-semibold">No Blog Added!</h2>
            )}
            {blogsList.length > 0 &&
              blogsList.map((e, idx) => {
                return (
                  <>
                    <div
                      key={idx}
                      className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                    >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {e.title}
                      </h5>
                      <p className="mt-4 mb-2 font-semibold">{e.createdAt}</p>
                      {e.status === "pending" && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl">
                          {e.status}
                        </span>
                      )}
                      {e.status === "rejected" && (
                        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl">
                          {e.status}
                        </span>
                      )}
                      {e.status === "approved" && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl">
                          {e.status}
                        </span>
                      )}
                      <p className="blogDesc my-3 font-normal text-gray-700 dark:text-gray-400">
                        {e.description}
                      </p>

                      <button
                        onClick={() => openModal(idx)}
                        href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Read more
                        <svg
                          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </button>
                      {e.status !== "pending" && (
                        <p>
                          <span className="font-bold">Comment - </span>
                          {e.comment}
                        </p>
                      )}
                    </div>
                    <div
                      style={{
                        backdropFilter: "saturate(100%) blur(5rem)",
                        zIndex: "999",
                      }}
                      id={`user-blog${idx}`}
                      tabIndex="-1"
                      aria-hidden="true"
                      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                    >
                      <div className="relative p-4 w-full max-w-2xl max-h-full">
                        <div className="relative bg-[#f8f9fa] rounded-lg shadow-xl dark:bg-gray-700">
                          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              Description
                            </h3>
                            <button
                              type="button"
                              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                              data-modal-toggle="crud-modal"
                              onClick={() => closeModal(idx)}
                            >
                              <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                  fill="red"
                                />
                              </svg>
                              <span className="sr-only">Close modal</span>
                            </button>
                          </div>
                          <div>
                            <p className="px-10 py-4 text-justify">
                              {e.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </main>
        </div>
      )}
    </>
  );
}
