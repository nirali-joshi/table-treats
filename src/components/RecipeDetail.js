import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { map } from "lodash";
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../actions";
import "../App.css";
import { categoryData } from "../categoryData";
import { FaEdit } from "react-icons/fa";
import AddRecipe from "./AddRecipe";

const RecipeDetail = (props) => {
  const [recipe, setRecipe] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const { recipeId } = useParams();

  const getRecipe = (recipeId) => {
    props
      .getRecipeById(recipeId)
      .then((resp) => setRecipe(resp))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRecipe(recipeId);
  }, []);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      <Paper className="recipe-detail-container">
        <Grid container spacing={4}>
          <Grid item md={5}>
            <Grid item md={12}>
              <img src={recipe.recipeImage} alt={recipe.recipeName} />
            </Grid>
            <Grid item md={12}>
              <Button
                variant="contained"
                color="default"
                startIcon={<FaEdit />}
                className="update-recipe-btn"
                onClick={() => setIsOpen(true)}
              >
                Update Recipe
              </Button>
            </Grid>
          </Grid>
          <Grid item md={7} className="recipe-details">
            <Grid item md={12} className="detail">
              <Typography variant="h2" align="center" className="recipe-name">
                {recipe.recipeName}
              </Typography>
            </Grid>
            <Grid item md={12} className="detail">
              <Grid item md={12}>
                <Typography variant="h6" className="recipe-property">
                  Recipe Ingredients
                </Typography>
              </Grid>
              <Grid item md={12}>
                <Typography variant="h6" className="recipe-property-info">
                  {recipe.recipeIngredients}
                </Typography>
              </Grid>
            </Grid>
            <Grid item md={12} className="detail">
              <Grid item md={12}>
                <Typography variant="h6" className="recipe-property">
                  Recipe Preparation Time
                </Typography>
              </Grid>
              <Grid item md={12}>
                <Typography variant="h6" className="recipe-property-info">
                  {recipe.recipePrepTime}
                </Typography>
              </Grid>
            </Grid>
            <Grid item md={12} className="detail">
              <Grid item md={12}>
                <Typography variant="h6" className="recipe-property">
                  Recipe Process
                </Typography>
              </Grid>
              <Grid item md={12}>
                <Grid container>
                  {map(recipe.recipeMethod, (item, index) => (
                    <Grid container style={{ marginBottom: "15px" }}>
                      <Grid
                        item
                        md={2}
                        className="recipe-step-property"
                        variant="h6"
                      >{`Step ${index + 1}:`}</Grid>
                      <Grid item md={10}>
                        <Typography
                          variant="h6"
                          className="recipe-property-info"
                        >
                          {item.stepDetail}
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12}>
              <Grid item md={12}>
                <Typography variant="h6" className="recipe-property">
                  Recipe Suggestion
                </Typography>
              </Grid>
              <Grid item md={12}>
                <Typography variant="h6" className="recipe-property-info">
                  {recipe.recipeSuggestion || "No Suggestion Given"}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      {isOpen && (
        <AddRecipe
          isOpen={isOpen}
          handleModalClose={handleModalClose}
          isFrom="updateRecipe"
          getRecipe={getRecipe}
          recipe={recipe}
        />
      )}
    </Fragment>
  );
};
const mapStateToProps = () => ({});
const mapDispatchToProps = {
  getRecipeById,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);
