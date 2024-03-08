import React, { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Navbar() {
  const [theme, setTheme] = useState(false);
  return (
    <div>
      <div className="bg-[#2B3743ff] container flex justify-between items-center h-[50px] ">
        <h1 className="text-white">Where in the world?</h1>
        {theme ? (
          <button onClick={() => setTheme((prev) => !prev)}>
            🌑 Dark Mode{" "}
          </button>
        ) : (
          <button onClick={() => setTheme((prev) => !prev)}>
            ☀️ Light Mode
          </button>
        )}
      </div>
      <Outlet />
    </div>
  );
}
