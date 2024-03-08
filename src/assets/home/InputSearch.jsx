import React from "react";
import { info } from "../../App";
import { useContext } from "react";

export default function InputSearch() {
  const { data, setFiltrer } = useContext(info);
  const inputValue = (e) => {
    const filteredItems = data.filter((item) =>
      item.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFiltrer(filteredItems);
  };

  return (
    <div className="flex">
      <label className="input input-bordered flex items-center gap-2 w-[92%]">

        <input
          type="text"
          className="grow"
          placeholder="Search"
          onChange={(e) => inputValue(e)}
        />
      </label>
    </div>
  );
}
