import express from "express";
import {
  addRecipe,
  getCategories,
  getRecipes,
  getRecipeById,
  deleteRecipe,
} from "../controllers/categories.js";

const router = express.Router();

router.get("/", getCategories);
router.post("/", addRecipe);
router.get("/recipes", getRecipes);
router.get("/recipe/:recipeId", getRecipeById);
router.delete("/recipe/:recipeId", deleteRecipe);

export default router;
