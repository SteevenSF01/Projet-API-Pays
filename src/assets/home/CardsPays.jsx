import React from "react";
import { useContext } from "react";
import { info } from "../../App";
import { Link } from "react-router-dom";

export default function CardsPays() {
  const { filtrer, data } = useContext(info);
  const chercherIndex = (element) => {
    const i = data.findIndex((x) => x.name.common === element.name.common);
    return i;
  };
  return (
    <section className="text-white flex flex-wrap gap-10 justify-center">
      {filtrer == 0 ? (
        <p className="h-screen">Pays introuvable</p>
      ) : (
        filtrer.map((element, index) => {
          return (
            <Link to={`/Details/${chercherIndex(element)}`}>
              <div
                key={index}
                className=" w-[300px] md:w-[280px] h-[380px] bg-[#2B3743ff] rounded-lg overflow-hidden "
              >
                <div className="w-full h-[45%] ">
                  <img
                    src={element.flags.png}
                    alt=""
                    className="w-full h-full object-fill"
                  />
                </div>
                <div className="container flex flex-col justify-start py-3 items-start w-full h-[55%]">
                  <h1 className="text-2xl my-2">{element.name.common}</h1>
                  <p className="text-[16px]">
                    Population:{" "}
                    <span className="text-gray-400">
                      {element.population} people{" "}
                    </span>
                  </p>
                  <p className="text-[16px]">
                    Region:{" "}
                    <span className="text-gray-400">{element.region}</span>
                  </p>
                  <p className="text-[16px]">
                    Capital:{" "}
                    <span className="text-gray-400">{element.capital ? element.capital :'Undefined'} </span>
                  </p>
                </div>
              </div>
            </Link>
          );
        })
      )}
    </section>
  );
}
