import React from "react";
import CategoryItem from "./CategoryItem";
import { useEffect, useState } from "react";

const CategoryItems = ({ data, path }) => {
  const [dataItem, setData] = useState([]);
  const getData = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/v1/users/getCategory?type=${path}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await response.json();
    setData(res);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {dataItem?.map((item, idx) => (
        <CategoryItem
          srcImg={`${import.meta.env.VITE_BASE_URL}${item?.thumbnailUrl}`}
          title={item.modelName}
          key={idx}
        />
      ))}
    </>
  );
};

export default CategoryItems;
