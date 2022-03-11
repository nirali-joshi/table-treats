import Categories from "../models/categories.js";
import Recipe from "../models/recipe.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Categories.find();
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).json(categories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addRecipe = async (req, res) => {
  const recipe = req.body;
  const newRecipe = new Recipe(recipe);
  try {
    res.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Methods", "*");
    console.log(recipe);
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).json(recipes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.recipeId);
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).json(recipe);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.recipeId);
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).json({ message: "Recipe Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.recipeId, {
      $set: {
        recipeName: req.body.recipeName,
        recipeImage: req.body.recipeImage,
        recipeIngredients: req.body.recipeIngredients,
        recipePrepTime: req.body.recipePrepTime,
        recipeMethod: req.body.recipeMethod,
        recipeSuggestion: req.body.recipeSuggestion,
        category: req.body.category,
      },
    });
    res.header("Access-Control-Allow-Origin", "*");
    res
      .status(200)
      .json({ message: "Recipe Deleted successfully", data: updatedRecipe });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
