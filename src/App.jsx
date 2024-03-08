import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import Navbar from "./assets/Navbar";
import Home from "./assets/home/Home";
import axios from "axios";
import "./App.css";

export const info = createContext();

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");

        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: (
            <div className="container py-10">
              <info.Provider value={{ data }}>
                <Home />,
              </info.Provider>
            </div>
          ),
          index: true,
        },
      ],
    },
  ]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!data) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="bg-[#202D36ff] h-fit flex flex-col">
        <RouterProvider router={router} />
      </div>
    );
  }
}

export default App;
