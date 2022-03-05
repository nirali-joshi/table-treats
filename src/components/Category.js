import { map } from "lodash";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { categoryData } from "../categoryData";
import RecipeCard from "./RecipeCard";

const Category = () => {
  const catName = useLocation().pathname.slice(10).replace(/-/g, " ");
  console.log(useParams());
  const data = categoryData.find((item) => item.categoryName.includes(catName));
  const { recipes } = data;
  console.log(recipes);
  const recipeData = map(recipes, (item, index) => ({
    ...item,
    recipeId: index + 1,
  }));
  console.log(recipeData);

  return (
    <div className="category-container categories">
      {map(recipeData, (recipe) => (
        <RecipeCard
          recipe={recipe}
          key={recipe.recipeId}
          isFrom="category"
          categoryName={useParams().categoryName}
        />
      ))}
    </div>
  );
};

export default Category;
