import React, { useState } from "react";

export default function Admin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((currData) => {
      return { ...currData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://capricontechnologybackend.onrender.com/adminlogin";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      //   body: JSON.stringify(formData),
    });
    const result = await response.json();
    if (formData.username == "" || formData.password == "") {
      document.getElementById("incorrect").innerHTML = "Fill the detials!";
      document.getElementById("incorrect").style.display = "block";
    } else if (
      result.user != formData.username ||
      result.pass != formData.password
    ) {
      document.getElementById("incorrect").innerHTML = "Incorrect Credentials!";
      document.getElementById("incorrect").style.display = "block";
    } else {
      document.getElementById("incorrect").style.display = "none";
      sessionStorage.setItem("admin", "success");
      window.location.pathname = "/admindashboard";
    }
  };
  return (
    <>
      <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div className="overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-lg">
          <h1 className="text-3xl font-semibold text-center mt-8">
            Capricon Technology
          </h1>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">
              Admin Login
            </h3>
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex flex-col space-y-5"
            >
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="username"
                  className="text-sm font-semibold text-gray-500"
                >
                  Username
                </label>
                <input
                  type="username"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  autoFocus
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <p id="incorrect" className="text-[#EE4B2B] hidden"></p>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
