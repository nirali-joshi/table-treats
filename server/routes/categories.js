import express from "express";
import {
  addRecipe,
  getCategories,
  getRecipes,
  getRecipeById,
  deleteRecipe,
  updateRecipe,
} from "../controllers/categories.js";

const router = express.Router();

router.get("/", getCategories);
router.post("/", addRecipe);
router.get("/recipes", getRecipes);
router.get("/recipe/:recipeId", getRecipeById);
router.delete("/recipe/:recipeId", deleteRecipe);
router.put("/recipe/:recipeId", updateRecipe);

export default router;
