import "../App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
// import Recipe from './Recipe';
import { data } from "../recipeData";
import RecipeDetail from "./RecipeDetail";
import Recipes from "./Recipes";
import Category from "./Category";
import { size } from "lodash";

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
          path="/category/:categoryName/recipe/:recipeName"
          element={<RecipeDetail recipeData={data} />}
        />
        <Route path="/category/:categoryName" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
