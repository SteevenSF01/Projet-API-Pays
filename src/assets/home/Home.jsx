import React from "react";
import CardsPays from "./CardsPays";
import InputSearch from "./InputSearch";
import Filtre from "./Filtre";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-start justify-between gap-5 mb-10 px-5 md:flex-row">
        <InputSearch />
        <Filtre />
      </div>
      <CardsPays />
    </>
  );
}
