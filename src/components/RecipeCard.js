import { Button, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const RecipeCard = ({ recipe, isFrom, categoryName, key, handleDelete }) => {
  console.log(recipe);
  const { recipeImage, recipeName, _id, category } = recipe;

  return (
    <div className="recipe-card" key={key}>
      <img src={recipeImage} alt={recipeName} />
      <div className="recipe-name">
        <Link
          to={
            isFrom === "category"
              ? `/category/${categoryName}/recipe/${_id}`
              : `/recipes/${_id}`
          }
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography className="recipe-name-field">
            {isFrom === "home" ? category : recipeName}
          </Typography>
        </Link>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<FaTrash />}
          size="small"
          onClick={() => handleDelete(_id)}
        >
          Delete Recipe
        </Button>
      </div>
    </div>
  );
};

export default RecipeCard;
