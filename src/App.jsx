import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Admin from "./components/admin/Admin";
import AdminDashboard from "./components/admin/AdminDashboard";
import RejectedBlog from "./components/admin/RejectedBlog";
import ApprovedBlog from "./components/admin/ApprovedBlog";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adminlogin" element={<Admin />} />
          <Route path="/Admindashboard" element={<AdminDashboard />} />
          <Route path="/rejectedblog" element={<RejectedBlog />} />
          <Route path="/approvedblog" element={<ApprovedBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
