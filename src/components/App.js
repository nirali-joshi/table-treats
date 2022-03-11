import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../App.css";
import "../utility.css";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
// import Recipe from './Recipe';
import { data } from "../recipeData";
import RecipeDetail from "./RecipeDetail";
import Recipes from "./Recipes";
import Category from "./Category";
import { size } from "lodash";
import AddRecipe from "./AddRecipe";

// nanesi2948@vapaka.com
// N@nesi_V@paka2948

// tt-admin o6iYJUjuRVNwSHs8 (mongodb-atlas username & password)

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/recipes" element={<Recipes recipeData={data} />} />
        <Route
          path="/recipes/:recipeId"
          element={<RecipeDetail recipeData={data} />}
        />
        <Route
          path="/category/:categoryName/recipe/:recipeId"
          element={<RecipeDetail recipeData={data} isFrom="category" />}
        />
        <Route path="/category/:categoryName" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
