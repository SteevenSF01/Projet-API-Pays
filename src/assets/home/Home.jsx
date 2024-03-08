import React from "react";
import CardsPays from "./CardsPays";
import InputSearch from "./InputSearch";
import Filtre from "./Filtre";

export default function Home() {
  return (
    <>
      <div className="mb-5">
        <InputSearch />
      </div>
      <div className="mb-5 ps-3">
        <Filtre />
      </div>
      <CardsPays />
    </>
  );
}
