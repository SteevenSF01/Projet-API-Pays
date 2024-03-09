import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import Navbar from "./assets/Navbar";
import Home from "./assets/home/Home";
import axios from "axios";
import "./App.css";
import Details from "./assets/Details/Details";

export const info = createContext();

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [recherche, setRecherche] = useState("");
  const [filtrer, setFiltrer] = useState(data || []);
  const [theme, setTheme] = useState(false);

  // console.log(data);

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

  useEffect(() => {
    if (recherche === "") {
      setFiltrer(data || []);
    } else {
      const filteredItems = data.filter((item) =>
        item.name.common.toLowerCase().includes(recherche.toLowerCase())
      );
      setFiltrer(filteredItems);
    }
  }, [data, recherche]);
  


  const router = createBrowserRouter([
    {
      path: "/Projet-API-Pays/",
      element: (
        <info.Provider value={{ theme, setTheme }}>
          <Navbar />
        </info.Provider>
      ),
      children: [
        {
          path: "/Projet-API-Pays/",
          element: (
            <div className="container py-10">
              <info.Provider
                value={{
                  data,
                  setData,
                  setFiltrer,
                  setRecherche,
                  filtrer,
                  recherche,
                  theme,
                  setTheme,
                }}
              >
                <Home />,
              </info.Provider>
            </div>
          ),
          index: true,
        },
        {
          path: "/Projet-API-Pays/Details",
          element: (
            <info.Provider value={{ data, theme, setTheme, setRecherche }}>
              <Details />
            </info.Provider>
          ),
        },
        {
          path: "/Projet-API-Pays/Details/:idPays",
          element: (
            <info.Provider value={{ data, theme, setRecherche }}>
              <Details />
            </info.Provider>
          ),
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
      <div
        className={`${
          theme ? "bg-[#f4f5f7]" : "bg-[#202D36ff]"
        }  h-fit flex flex-col`}
      >
        <RouterProvider router={router} />
      </div>
    );
  }
}

export default App;
