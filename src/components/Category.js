import { Paper, Typography } from "@material-ui/core";
import { map, size } from "lodash";
import React, { Fragment } from "react";
import { useLocation, useParams } from "react-router-dom";
import { categoryData } from "../categoryData";
import RecipeCard from "./RecipeCard";
import { FaHeartBroken } from "react-icons/fa";

const Category = () => {
  const catName = useParams().categoryName.replace(/-/g, " ");
  console.log(catName);
  const data = categoryData.find((item) => item.categoryName.includes(catName));
  console.log(data);
  const { recipes } = data || {};
  console.log(recipes);
  const recipeData = map(recipes, (item, index) => ({
    ...item,
    recipeId: index + 1,
  }));
  console.log(recipeData);

  return (
    <Fragment>
      {size(recipeData) > 0 ? (
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
      ) : (
        <Paper
          style={{
            width: "80%",
            height: "50vh",
            backgroundColor: "#fae0e4",
            margin: "auto",
            marginTop: "5rem",
          }}
        >
          <Typography align="center" variant="h2" style={{ color: "#0d3b66" }}>
            No Data Available
          </Typography>
          <div
            style={{
              margin: "auto",
              width: "80%",
            }}
          >
            <FaHeartBroken
              style={{
                fontSize: "16rem",
                verticalAlign: "center",
                marginLeft: "22rem",
                marginTop: "20px",
                fill: "#e01e37",
              }}
            />
          </div>
        </Paper>
      )}
    </Fragment>
  );
};

export default Category;
