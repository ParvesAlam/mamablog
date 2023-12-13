// import axios from "axios";
import React from "react";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { useUser } from '../../context/UserContext';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();
  const {userData, setUserData} = useUser()



  
  const handleLogout = async () => {
    try {
      // Clear the token from localStorage
      localStorage.removeItem('token');
      setUserData({})
      navigate(`/`);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        {/* <img src="mamabloglogo.png" className="h-14" alt="Mama Blog" /> */}
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              to={"/"}
            >
              <Link to="/home" className="flex items-center space-x-3 rtl:space-x-revers">
              <img src="mamabloglogo.png" className="h-14" alt="Mama Blog" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mama Blog</span>
              </Link>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {
                userData?.role === "admin" && <li className="nav-item">
                <Link
                 className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                 to={"/dashboard"}
               >
                 <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Dashboard</span>
               </Link>
             </li>
              }
              
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to={"/home"}
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
                </Link>
              </li>
              {
                userData?.email ? <button onClick={handleLogout} className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">Logout</button> : <Link to={"/login"} className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">Login</Link> 
              }
              {
                userData?.email && <li className="nav-item flex items-center ">
                <span className="px-3 py-2  text-xs uppercase font-bold leading-snug text-red-500 hover:opacity-75">{userData?.firstName}</span>
                <img src={userData.img} alt="avatar" srcset="" className="w-9 h-9 curcle rounded-full"/>
              </li>
              }
              
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  );
}