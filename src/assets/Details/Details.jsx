import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { info } from "../../App";

export default function Details() {
  const { idPays } = useParams();
  const { data, theme } = useContext(info);
  const details = data[idPays];

  const chercherIndex = (element) => {
    const i = data.findIndex((x) => x.cca3 === element);
    return i;
  };

  const chercherPays = (element) => {
    const pays = data.filter((x) => x.cca3 === element);
    return pays[0].name.common;
  };

  return (
    <>
      <section className={`${theme ? "text-gray-600" : "text-white"} h-fit`}>
        <Link to="/">
          <button className={` ${theme ? 'text-gray-600 bg-white' : 'text-white'} border-2 border-gray-400 py-2 px-5 bg-[#2B3743ff] rounded-lg mt-5 ms-5`}>
            {"<"} Back
          </button>
        </Link>
        <div
          className={`h-[80%] flex flex-col items-center justify-between py-5 `}
        >
          <div
            className={`w-[80%] h-[210px] border-[1px] bg-no-repeat border-gray-800 shadow-[0px_0px_8px_1px_#2d3748]`}
            style={{
              backgroundImage: `url(${details.flags.png})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
            }}
          >
          </div>
          <div className="mt-5 w-[80%] h-fit shadow-[0px_0px_10px_5px_#2d3748] rounded-xl p-4">
            <article className="w-full h-full flex flex-col gap-5">
              <h1 className="text-xl font-semibold">{details.name.common} </h1>
              <div className="flex justify-between">
                <div className="px-2">
                  <p className="flex flex-wrap">
                    Native Name :
                    <span className="ps-1 text-gray-400">
                      {details.name.nativeName?.[
                        Object.keys(details.name.nativeName || {})[0]
                      ]?.official || ""}
                    </span>
                  </p>
                  <p className="flex flex-wrap">
                    Population :
                    <span className="ps-1 text-gray-400">
                      {" "}
                      {details.population}{" "}
                    </span>
                  </p>
                  <p className="flex flex-wrap">
                    Region :
                    <span className="ps-1 text-gray-400">
                      {" "}
                      {details.region}{" "}
                    </span>
                  </p>
                  <p className="flex flex-wrap">
                    Sub Region :
                    <span className="ps-1 text-gray-400">
                      {" "}
                      {details.subregion ? details.subregion : "Undefined"}
                    </span>
                  </p>
                  <p className="flex flex-wrap">
                    Capital :
                    <span className="ps-1 text-gray-400">
                      {" "}
                      {details.capital ? details.capital : "Undefined"}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="flex flex-wrap">
                    Top Level Domain:
                    <span className="ps-1 text-gray-400"> {details.tld}</span>
                  </p>
                  <p className="flex flex-wrap">
                    Currencies :
                    <span className="ps-1 text-gray-400">
                      {details.currencies
                        ? Object.values(details.currencies)[0].name
                        : "Undefined"}
                    </span>
                  </p>
                  <p className="flex flex-wrap">
                    Languages :
                    <span className="ps-1 text-gray-400">
                      {details.languages
                        ? Object.values(details.languages).join(", ")
                        : "Undefined"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <h1 className="my-2">Border Countries:</h1>
                <div className="flex flex-wrap gap-3 text-gray-400">
                  {details.borders && details.borders.length > 0 ? (
                    details.borders.map((element, i) => (
                      <Link key={i} to={`/Details/${chercherIndex(element)}`}>
                        <button className="border-2 py-1 px-3 rounded-xl">
                          {chercherPays(element)}
                        </button>
                      </Link>
                    ))
                  ) : (
                    <span>Undefined</span>
                  )}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
