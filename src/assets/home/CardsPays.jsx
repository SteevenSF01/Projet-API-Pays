import React from "react";
import { useContext } from "react";
import { info } from "../../App";

export default function CardsPays() {
  const { filtrer } = useContext(info);
  return (
    <section className="text-white flex flex-wrap gap-10 justify-center">
      {filtrer == 0 ? (
        <p className="h-screen">Pays introuvable</p>
      ) : (
        filtrer.map((element, index) => {
          return (
            <div
              key={index}
              className=" w-[300px] md:w-[280px] h-[400px] bg-[#2B3743ff] rounded-lg overflow-hidden "
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
                  <span className="text-gray-400">{element.population} </span>
                </p>
                <p className="text-[16px]">
                  Region:{" "}
                  <span className="text-gray-400">{element.region}</span>
                </p>
                <p className="text-[16px]">
                  Capital:{" "}
                  <span className="text-gray-400">{element.capital} </span>
                </p>
              </div>
            </div>
          );
        })
      )}
    </section>
  );
}
