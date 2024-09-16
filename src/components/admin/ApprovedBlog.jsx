import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";

export default function ApprovedBlog() {
  if (sessionStorage.getItem("admin") !== "success") {
    window.location.href = "/adminlogin";
  }

  const [blogsList, setBlogsList] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(
        "https://capricontechnologybackend.onrender.com/blogslist"
      );
      const data = await res.json();
      data.map((e) => {
        if (e.status === "approved") {
          setBlogsList((prev) => [...prev, e]);
        }
      });
    };
    fetchBlogs();
  }, []);
  return (
    <>
      <AdminNavbar />
      <div className="mt-10 mx-8">
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
                  Comment
                </th>
              </tr>
            </thead>
            <tbody>
              {blogsList.length > 0 &&
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
                    <td className="px-6 py-4">{e.comment}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          {blogsList.length === 0 && (
            <p className="text-center text-xl my-4">No Approved Blog!</p>
          )}
        </div>
      </div>
    </>
  );
}
