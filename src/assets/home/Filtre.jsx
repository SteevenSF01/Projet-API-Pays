import React, { useContext } from "react";
import { info } from "../../App";

export default function Filtre() {
  const { data } = useContext(info);

  const uniqueRegions = new Set();

  data.forEach((element) => {
    if (element.region) {
      uniqueRegions.add(element.region);
    }
  });

  const regionsArray = [...uniqueRegions];

  return (
    <select className="select select-bordered w-[55%] max-w-xs">
      <option disabled selected>
        Filter by Region
      </option>
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
