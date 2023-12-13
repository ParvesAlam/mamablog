import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import EditModal from "../Components/ModalEdit";
import SinglePost from "../Components/SinglePost";
import Dashboard from "../Pages/Home/Dashboard";
import Home from "../Pages/Home/Home";

import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/singlePost/:id" element={<SinglePost/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/dashboard/update/:id" element={<EditModal/>} />
      
    </Routes>
  );
};

export default Routers;