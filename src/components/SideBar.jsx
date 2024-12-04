import React, { useEffect, useState } from "react";
import { TbCategoryPlus } from "react-icons/tb";
import { API } from "../utils/constraints";

function SideBar({ resData, resFn }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCat();
  }, []); 

  const getCat = async () => {
    try {
      const data = await fetch(API);
      const response = await data.json();
      setCategories(response);
    } catch (err) {
      console.log(err);
    }
  };


  const uniqueCategories = [...new Set(categories.map(c => c.category?.name || "Unknown"))];

  return (
    <div className="w-[35vh] text-white h-[50vh] bg-zinc-900 border border-zinc-800 p-2 m-4 rounded-lg">
      <h1 className="text-xl flex gap-2 items-center">
        <p className="my-4 text-purple-500">
          <TbCategoryPlus />
        </p>
        Categories
      </h1>
      {uniqueCategories.map(category => (
        <div
          onClick={() => {
            const filteredData = resData.filter(
              data => data.category.name === category
            );
            resFn(filteredData); // Update filtered products.
          }}
          className="p-2 text-xl rounded-md cursor-pointer bg-zinc-800 mb-3"
          key={category}
        >
          {category}
        </div>
      ))}
    </div>
  );
}

export default SideBar;
