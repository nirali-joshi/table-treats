import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import { categoryData } from "../categoryData";

const RecipeDetail = (props) => {
  console.log(props);
  const { recipeId, categoryName, recipeName } = useParams();
  console.log(recipeId);
  const found = props.recipeData.find(
    (recipe) => recipe.recipeId === parseInt(recipeId)
  );
  console.log(useParams());
  const foundData =
    categoryName &&
    categoryData.find((recipe) =>
      recipe.categoryName.includes(categoryName.replace(/-/g, " "))
    );
  const categoryWiseRecipe =
    foundData &&
    foundData.recipes.find(
      (item) => item.recipeName === recipeName.replace(/-/g, " ")
    );

  const recipeDetailData = categoryName ? categoryWiseRecipe : found;
  return (
    <div className="container">
      {recipeDetailData && (
        <div className="a2">
          <img
            src={recipeDetailData.recipeImage}
            alt={recipeDetailData.recipeName}
          />
          <br />

          <div className="a4">
            <div className="data">{recipeDetailData.recipeName}</div>
            <br />

            <div>
              <p className="a1">Ingredients</p>
              {recipeDetailData.recipeIngredients}
            </div>
            <br />

            <div>
              <p className="a1">Preparation Time</p>
              {recipeDetailData.recipePrepTime}
            </div>
            <br />

            <div>
              <p className="a1">Process</p>
              {recipeDetailData.recipeMethod}
            </div>
            <br />

            <div>
              <p className="a1">Suggestions</p>
              {recipeDetailData.recipeSuggestion}
            </div>
            <br />
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
