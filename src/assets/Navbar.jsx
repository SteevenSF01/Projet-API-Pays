import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { info } from "../App";

export default function Navbar() {
  const { theme, setTheme } = useContext(info);
  return (
    <div>
      <div
        className={` ${
          theme ? "bg-[#f4f5f7]" : "bg-[#2B3743ff]"
        } border-b-2 border-gray-500 duration-500 px-10 flex justify-between items-center h-[50px] md:w-screen `}
      >
        <Link to="/">
          <h1
            className={`${
              theme ? "text-gray-600" : "text-white"
            } md:text-2xl font-semibold`}
          >
            Where in the world?
          </h1>
        </Link>
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke={theme ? "gray" : "white"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
            onClick={() => setTheme((prev) => !prev)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke={theme ? "gray" : "white"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
      <Outlet />
    </div>
  );
}
