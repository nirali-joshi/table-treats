import React, { Component, useState } from "react";
import {
  Modal,
  Paper,
  Slide,
  Grid,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { map } from "lodash";
import { saveNewRecipe, updateRecipe } from "../actions";
import { connect } from "react-redux";
import { FaPlus, FaSave } from "react-icons/fa";

const AddRecipe = (props) => {
  const [recipeSteps, setRecipeSteps] = useState(
    props && props.recipe
      ? props.recipe.recipeMethod
      : [{ step: 1, stepDetail: "" }]
  );
  const [newRecipe, setNewRecipe] = useState(
    props && props.recipe ? props.recipe : {}
  );
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: "50%",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: "35%",
      left: "25%",
      transform: "translate(-25%, -25%)",
      borderRadius: "8px",
    },
  }));

  const handleSteps = (value, index) => {
    const steps = [...recipeSteps];
    steps[index].stepDetail = value;
    setRecipeSteps(steps);
  };

  const handleChange = ({ target: { value, name } }) => {
    setNewRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = () => {
    setNewRecipe({});
    setRecipeSteps([{ step: 1, stepDetail: "" }]);
    handleModalClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.isFrom !== "updateRecipe") {
      props
        .saveNewRecipe({ ...newRecipe, recipeMethod: [...recipeSteps] })
        .then((resp) => {
          if (resp) {
            props.getRecipesData();
            handleClose();
          }
        })
        .catch((err) => console.log(err));
    } else {
      handleUpdate();
    }
  };

  const handleUpdate = () => {
    const {
      recipeName,
      recipeImage,
      recipeIngredients,
      recipeMethod,
      recipePrepTime,
      recipeSuggestion,
      category,
      _id,
    } = newRecipe;
    const recipe = {
      recipeName,
      recipeImage,
      recipeIngredients,
      recipePrepTime,
      recipeMethod,
      recipeSuggestion,
      category,
    };
    props
      .updateRecipe(recipe, _id)
      .then((resp) => {
        if (resp) {
          props.getRecipe(_id);
          handleClose();
        }
      })
      .catch((err) => console.log(err));
  };

  const classes = useStyles();
  const { isOpen, handleModalClose } = props;
  const { paper } = classes;
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      style={{ top: "-35%" }}
    >
      <Slide direction="down" in={isOpen}>
        <Paper
          elevation={4}
          className={paper}
          style={{
            height: "100%",
            overflow: "hidden auto",
            maxHeight: "600px",
          }}
        >
          <Paper style={{ backgroundColor: "#355070", marginBottom: "10px" }}>
            <Typography
              align="center"
              variant="h4"
              style={{ color: "#f0efeb", fontFamily: "Courgette, cursive" }}
            >
              Add New Recipe
            </Typography>
          </Paper>
          <form onSubmit={handleSubmit} autoComplete="off">
            <Grid container spacing={3}>
              <Grid item md={6}>
                <TextField
                  label="Recipe Name"
                  name="recipeName"
                  onChange={handleChange}
                  value={newRecipe.recipeName || ""}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Recipe Image"
                  name="recipeImage"
                  onChange={handleChange}
                  value={newRecipe.recipeImage || ""}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Recipe Ingredients"
                  name="recipeIngredients"
                  onChange={handleChange}
                  value={newRecipe.recipeIngredients || ""}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Recipe Preparation Time"
                  name="recipePrepTime"
                  onChange={handleChange}
                  value={newRecipe.recipePrepTime || ""}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item md={12}>
                {map(recipeSteps, (item, index) => (
                  <Grid
                    container
                    alignContent="center"
                    alignItems="center"
                    md={12}
                    key={index}
                    spacing={4}
                  >
                    <Grid item md={10}>
                      <TextField
                        label="Recipe Method"
                        name="recipeMethod"
                        onChange={({ target: { value } }) =>
                          handleSteps(value, index)
                        }
                        value={item.stepDetail}
                        style={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item md={2}>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<FaPlus />}
                        onClick={(e) => {
                          e.stopPropagation();
                          setRecipeSteps((prev) => [
                            ...prev,
                            { step: prev.length + 1, stepDetail: "" },
                          ]);
                        }}
                        style={{ width: "100%" }}
                      >
                        Add
                      </Button>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Recipe Suggestion"
                  name="recipeSuggestion"
                  onChange={handleChange}
                  value={newRecipe.recipeSuggestion || ""}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Recipe Category"
                  name="category"
                  onChange={handleChange}
                  value={newRecipe.category || ""}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item md={12}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<FaSave />}
                  type="submit"
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Slide>
    </Modal>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  saveNewRecipe,
  updateRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);
