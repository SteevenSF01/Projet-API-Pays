import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { info } from "../App";

export default function Navbar() {
  const { theme, setTheme } = useContext(info);
  return (
    <div>
      <div className={` ${theme ? 'bg-white' : 'bg-[#2B3743ff]'} border-b-2 border-gray-500 duration-500 container flex justify-between items-center h-[50px] `}>
        <h1 className={`${theme? 'text-gray-600' : 'text-white'}`}>Where in the world?</h1>
        {theme ? (
          <button 
          onClick={() => setTheme((prev) => !prev)}>
            ☀️ Light Mode
          </button>
        ) : (
          <button 
          className="text-white"
          onClick={() => setTheme((prev) => !prev)}>
            🌑 Dark Mode
          </button>
        )}
      </div>
      <Outlet />
    </div>
  );
}
