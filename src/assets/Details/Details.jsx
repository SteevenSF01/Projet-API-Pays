import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { info } from "../../App";

export default function Details() {
  const {data} = useContext(info)
  // const {idPays = 0} = useParams()

  // const details = data[idPays]
  console.log(data[0]);

  return (
    <>
      <section className="h-[100vh]">
        <button className="text-white border-2 border-black py-2 px-5 bg-[#2B3743ff] rounded-lg mt-5 ms-5">
          {"<"} Back
        </button>
        <div className="h-[80%] bg-red-200 flex flex-col items-center justify-between py-5 ">
          <div className="w-[80%] h-[45%] bg-lime-200 ">
            <img src="" alt="" />
          </div>
          <div className=" w-[80%] h-[45%] bg-lime-800 ">
            <article className="w-full h-full flex flex-col gap-5 ">
              <h1 className="text-xl text-white font-semibold">Pays</h1>
                <div className="flex justify-between">
                  <div>
                    <p>Native Name:</p>
                    <p>Population: </p>
                    <p>Region: </p>
                    <p>Sub Region:</p>
                    <p>Capital:</p>
                  </div>
                  <div>
                    <p>Top Level Domain:</p>
                    <p>Currencies:</p>
                    <p>Languages:</p>
                  </div>
                </div>
                <h1>Border Countries:</h1>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
