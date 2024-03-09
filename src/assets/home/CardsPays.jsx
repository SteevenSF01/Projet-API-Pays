import React, { useContext } from "react";
import { info } from "../../App";
import { Link } from "react-router-dom";

export default function CardsPays() {
  const { filtrer, data, theme,recherche } = useContext(info);
  const chercherIndex = (element) => {
    const i = data.findIndex((x) => x.name.common === element.name.common);
    return i;
  };

  const couleur = (theme) => {
    if (theme) {
      return 'text-gray-500';
    } else {
      return 'text-gray-300';
    }
  };
return (
  <section className={`text-white flex flex-wrap gap-10 justify-center `}>
    {filtrer.length === 0 ? (
      <p className={`${theme ? "text-gray-600" : "text-white"} h-screen`}>
        Pays introuvable
      </p>
    ) : (
      filtrer.map((element, index) => (
        <Link key={index} to={`/Projet-API-Pays/Details/${chercherIndex(element)}`}>
          <div
            className={`${
              theme
                ? "bg-gradient-to-t from-gray-300 to-white shadow-[0px_0px_10px_2px_#4a5568] text-black "
                : "bg-[#2B3743ff] shadow-[0px_0px_10px_2px_#4a5568]"
            } w-[300px] md:w-[280px] h-[380px]  rounded-2xl overflow-hidden `}
          >
            <div
              className="w-full h-[45%] rounded-xl"
              style={{
                backgroundImage: `url(${element.flags.png})`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
              }}
            >
            </div>
            <div className="container flex flex-col justify-start py-3 items-start w-full h-[60%]">
              <h1 className="text-2xl my-2">{element.name.common}</h1>
              <p className="text-[16px]">
                Population:{" "}
                <span className={`${couleur(theme)}`}>
                  {element.population} people
                </span>
              </p>
              <p className="text-[16px]">
                Region:{" "}
                <span className={`${couleur(theme)}`}>{element.region}</span>
              </p>
              <p className="text-[16px]">
                Capital:{" "}
                <span className={`${couleur(theme)}`}>
                  {element.capital ? element.capital : "Undefined"}
                </span>
              </p>
            </div>
          </div>
        </Link>
      ))
    )}
  </section>
);

}
