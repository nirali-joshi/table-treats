import { size } from "lodash";
import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";

const Recipes = (props) => {
  const { recipeData, isFrom } = props;
  const [filteredData, setFilteredData] = useState([]);
  const handleChange = ({ target: { value } }) => {
    const filteredData = recipeData.filter((item) =>
      item.recipeName
        .trim()
        .replace(/\s+/g, "")
        .toLowerCase()
        .includes(value.trim().replace(/\s+/g, "").toLowerCase())
    );
    setFilteredData(filteredData);
  };
  const data = size(filteredData) > 0 ? filteredData : recipeData;
  return (
    <div>
      <SearchBar handleChange={handleChange} placeHolderText="Search Recipes" />
      <div className="recipes">
        {data.map((recipe) => (
          <RecipeCard recipe={recipe} isFrom={isFrom} key={recipe.recipeId} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
