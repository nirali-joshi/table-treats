import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe, isFrom, categoryName }) => {
  console.log(recipe);
  const { recipeImage, recipeName, recipeId, category } = recipe;
  return (
    <div className="recipe-card">
      <img src={recipeImage} alt={recipeName} />
      <Link
        to={
          isFrom === "category"
            ? `/category/${categoryName}/recipe/${recipeName
                .trim()
                .replace(/\s+/g, "-")}`
            : `/recipes/${recipeId}`
        }
      >
        <div className="recipe-name">
          <span>{isFrom === "home" ? category : recipeName}</span>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
