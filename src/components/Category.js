import { Paper, Typography } from "@material-ui/core";
import { map, size } from "lodash";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import { FaHeartBroken } from "react-icons/fa";
import { connect } from "react-redux";
import { deleteRecipe, getRecipes } from "../actions";

const Category = (props) => {
  const [recipeData, setRecipeData] = useState([]);

  const catName = useParams().categoryName.replace(/-/g, " ");
  console.log(catName);

  const getRecipesData = () => {
    props
      .getRecipes()
      .then((resp) => {
        if (resp) {
          setRecipeData(resp.filter((item) => item.category === catName));
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRecipesData();
  }, []);

  return (
    <Fragment>
      {size(recipeData) > 0 ? (
        <div className="category-container categories">
          {map(recipeData, (recipe) => (
            <RecipeCard
              recipe={recipe}
              key={recipe._id}
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
const mapStateToProps = () => ({});
const mapDispatchToProps = {
  getRecipes,
  deleteRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
