import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import BlogsList from "./BlogsList";

export default function Dashboard() {
  const { user, logout, isAuthenticated } = useAuth0();

  // State to store blog data, with initial values
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    writer: "",
    writerEmail: "",
    status: "pending",
  });

  // Update blog writer information once the user is authenticated
  useEffect(() => {
    if (isAuthenticated && user && !blogData.writer) {
      setBlogData((prevData) => ({
        ...prevData,
        writer: user.name,
        writerEmail: user.email,
      }));
    }
  }, [isAuthenticated, user]);

  // Open modal for blog creation
  const openModal = () => {
    document.getElementById("crud-modal").style.display = "flex";
  };

  // Close modal and reset form data
  const closeModal = () => {
    document.getElementById("crud-modal").style.display = "none";
    setBlogData({
      title: "",
      description: "",
      writer: "",
      writerEmail: "",
      status: "pending",
    });
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((currData) => ({
      ...currData,
      [name]: value,
    }));
  };

  // Handle form submission for creating a new blog post
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (blogData.title === "" || blogData.description === "") {
      document.getElementById("incorrect").style.display = "block";
    } else {
      document.getElementById("incorrect").style.display = "none";
      closeModal();
      window.location.reload();

      const url = "http://localhost:3000/addblog";
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });
    }
  };

  return (
    <>
      {isAuthenticated && (
        <>
          <section className="w-full px-2 text-gray-700 bg-white">
            <div className="container flex flex-wrap items-center justify-between py-5 mx-auto flex-row max-w-7xl">
              <div className="relative flex flex-col md:flex-row mt-4">
                <a
                  href="/dashboard"
                  className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
                >
                  <span className="mx-auto text-xl md:text-2xl font-semibold font-black leading-none text-gray-900 select-none">
                    Capricon Technology
                  </span>
                </a>
              </div>

              <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base px-4 md:px-14 py-3.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Logout
                </button>
              </div>
            </div>
          </section>

          {/* Welcome Section */}
          <div className="max-w-7xl md:py-10 mx-auto">
            <div className="mx-auto bg-blue-100 md:rounded-xl mb-10 md:my-10 px-4 py-6">
              <div className="flex flex-col md:flex-row-reverse">
                <img
                  src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg"
                  className="md:max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold mt-4">
                    Welcome {isAuthenticated && user.given_name}!
                  </h1>
                  <p className="py-6 mb-[70px] text-lg">
                    Your hub for diverse topics and expert perspectives,
                    designed to keep you informed and inspired. Explore
                    insightful content that sparks curiosity and empowers you to
                    stay ahead in an ever-changing world.
                  </p>
                  <button
                    data-modal-target="crud-modal"
                    data-modal-toggle="crud-modal"
                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    onClick={openModal}
                  >
                    Add Blog
                  </button>
                </div>
              </div>
            </div>

            {/* Modal for creating a new blog */}
            <div
              style={{
                backdropFilter: "saturate(100%) blur(5rem)",
                zIndex: "999",
              }}
              id="crud-modal"
              tabIndex="-1"
              aria-hidden="true"
              className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-[#f8f9fa] rounded-lg shadow-xl dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Create New Blog
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-toggle="crud-modal"
                      onClick={closeModal}
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
                          d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                          fill="red"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                    <div className="grid gap-4 mb-4 grid-cols-2">
                      <div className="col-span-2">
                        <label
                          htmlFor="title"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Enter title"
                          onChange={handleChange}
                          value={blogData.title}
                          required=""
                        />
                      </div>

                      <div className="col-span-2">
                        <label
                          htmlFor="description"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Description
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          onChange={handleChange}
                          value={blogData.description}
                          rows="4"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Write description here"
                        ></textarea>
                      </div>
                      <p id="incorrect" className="text-[#EE4B2B] hidden">
                        Enter all the details
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit Blog
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Component for displaying blogs */}
            <BlogsList userEmail={user.email} />
          </div>
        </>
      )}
    </>
  );
}
