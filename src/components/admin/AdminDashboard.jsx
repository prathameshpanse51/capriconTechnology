import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";

export default function AdminDashboard() {
  // State hooks
  const [blogsList, setBlogsList] = useState([]);
  const [comment, setComment] = useState("");
  const [commentId, setCommentId] = useState(null);
  const [blogStatus, setBlogStatus] = useState(null);

  // Fetch blogs on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:3000/blogslist");
        const data = await res.json();
        // Filter blogs with status 'pending'
        const pendingBlogs = data.filter((e) => e.status === "pending");
        setBlogsList(pendingBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  // Open modal for a specific blog
  const openComment = (id) => {
    setCommentId(id);
  };

  // Close modal
  const closeComment = () => {
    setCommentId(null);
  };

  // Handle comment input change
  const handleChange = (e) => {
    setComment(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment === "") {
      document.getElementById("incorrect").style.display = "block";
    } else {
      document.getElementById("incorrect").style.display = "none";
      closeComment();
      window.location.reload(); // Refresh the page after form submission

      const url = "http://localhost:3000/updateblog";
      try {
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: commentId,
            status: blogStatus,
            comment: comment,
          }),
        });
        const result = await response.json();
        console.log("Update result:", result);
      } catch (error) {
        console.error("Error updating blog:", error);
      }
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="mt-10 mx-8">
        {/* Display blogs list */}
        {blogsList.map((e, idx) => (
          <div key={idx}>
            {/* Modal for comment */}
            {commentId === e._id && (
              <div
                style={{
                  backdropFilter: "saturate(100%) blur(5rem)",
                  zIndex: "999",
                }}
                tabIndex="-1"
                aria-hidden="true"
                className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-[calc(100%-1rem)] max-h-full flex"
              >
                <div className="relative p-4 w-full max-w-md max-h-full">
                  <div className="relative bg-[#f8f9fa] rounded-lg shadow-xl dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Comment
                      </h3>
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={closeComment}
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
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                      <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                          <input
                            type="text"
                            name="comment"
                            id="comment"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Enter comment"
                            onChange={handleChange}
                            value={comment}
                            required
                          />
                        </div>
                        <p id="incorrect" className="text-[#EE4B2B] hidden">
                          Please add a comment
                        </p>
                      </div>
                      <button
                        type="submit"
                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        <svg
                          className="me-1 -ms-1 w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Add Comment
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Table for displaying blogs */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-blue-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 md:text-[18px] text-blue-600">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Writer
                </th>
                <th scope="col" className="px-6 py-3">
                  Writer Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {blogsList.length > 0 ? (
                blogsList.map((e, idx) => (
                  <tr
                    key={idx}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {e.title}
                    </th>
                    <td className="adminBlogDesc mx-6 my-4 w-[400px]">
                      {e.description}
                    </td>
                    <td className="px-6 py-4">{e.writer}</td>
                    <td className="px-6 py-4">{e.writerEmail}</td>
                    <td className="flex items-center px-6 py-4">
                      <button
                        className="font-medium text-green-600 dark:text-blue-500 hover:underline"
                        onClick={() => {
                          openComment(e._id);
                          setBlogStatus("approved");
                        }}
                      >
                        Accept
                      </button>
                      <button
                        className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                        onClick={() => {
                          openComment(e._id);
                          setBlogStatus("rejected");
                        }}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-xl my-4">
                    No Pending Blog!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
