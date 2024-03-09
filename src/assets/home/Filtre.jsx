import React, { useContext, useState } from "react";
import { info } from "../../App";

export default function Filtre() {
  const { data, setFiltrer } = useContext(info);
  const [selectedRegion, setSelectedRegion] = useState("All");

  const uniqueRegions = new Set();

  data.forEach((element) => {
    if (element.region) {
      uniqueRegions.add(element.region);
    }
  });

  const regionsArray = ["All", ...uniqueRegions];

  const filtreRegion = (event) => {
    const regionChoisie = event.target.value;
    setSelectedRegion(regionChoisie);

    if (regionChoisie === "All") {
      setFiltrer(data);
    } else {
      const filteredData = data.filter((element) => element.region === regionChoisie);
      setFiltrer(filteredData);
    }
  };

  return (
    <select className="select select-bordered w-[60%] max-w-xs" value={selectedRegion} onChange={filtreRegion}>
      {regionsArray.map((region, index) => {
        return (
          <option key={index} value={region}>
            {region}
          </option>
        );
      })}
    </select>
  );
}
