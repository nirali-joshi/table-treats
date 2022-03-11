import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
  recipeName: String,
  recipeImage: String,
  recipeIngredients: String,
  recipePrepTime: String,
  recipeMethod: [{ step: Number, stepDetail: String }],
  recipeSuggestion: String,
  category: String,
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
