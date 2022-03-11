import { size } from "lodash";
import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";
import { FaPlus } from "react-icons/fa";
import AddRecipe from "./AddRecipe";
import { connect } from "react-redux";
import { deleteRecipe, getRecipes } from "../actions";

const Recipes = (props) => {
  const { isFrom } = props;
  const [filteredData, setFilteredData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [recipeData, setRecipeData] = useState([]);

  const getRecipesData = () => {
    props
      .getRecipes()
      .then((resp) => {
        if (resp) {
          setRecipeData(resp);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getRecipesData();
  }, []);

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

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const data = size(filteredData) > 0 ? filteredData : recipeData;

  const handleDelete = (recipeId) => {
    props
      .deleteRecipe(recipeId)
      .then((resp) => {
        if (resp) {
          getRecipesData();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="recipes-container">
      <div className="subheader">
        <div className="p-t-l-r-20-16 width-20">
          <button
            className="width-80 add-recipe-btn p-8"
            onClick={() => setIsOpen(true)}
          >
            <FaPlus />
            Post a Recipe
          </button>
        </div>
        <SearchBar
          handleChange={handleChange}
          placeHolderText="Search Recipes"
        />
      </div>

      <div className="recipes">
        {data.map((recipe) => (
          <RecipeCard
            recipe={recipe}
            isFrom={isFrom}
            key={recipe.recipeId}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      {isOpen && (
        <AddRecipe
          isOpen={isOpen}
          handleModalClose={handleModalClose}
          getRecipesData={getRecipesData}
        />
      )}
    </div>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  getRecipes,
  deleteRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
