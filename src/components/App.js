import '../App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import About from './About';
import Recipe from './Recipe';
import { data } from '../recipeData';
import RecipeDetail from './RecipeDetail';

function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route exact path="/recipes" element={<Recipe recipeData={data} />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetail recipeData={data} />}/>
      </Routes>
    </Router>
  );

}

export default App;