import { map } from "lodash";
import React, { useState } from "react";
import { data } from "../categoryWiseData";
import CategoryCard from "./CategoryCard";

const Home = () => {
  return (
    <div className="categories">
      {map(data, (item, index) => (
        <CategoryCard categoryData={item} key={item.categoryId} />
      ))}
    </div>
  );
};

export default Home;
