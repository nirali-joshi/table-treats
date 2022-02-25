import React from "react";
import { useParams } from "react-router-dom";
import '../App.css';

const RecipeDetail = (props) => {
    console.log(props);
    const {recipeId} = useParams()
    const found = props.recipeData.find((recipe) => recipe.recipeId === parseInt(recipeId));

    console.log(found);
    return (
        <div className="container">
                {found && (
                    <div className="a2">
                        <div className="a3">{found.recipeImage}</div><br/>

                        <div className="a4">
                            <div className="data">{found.recipeName}</div><br/>

                            <div><p className="a1">Ingredients</p>{found.recipeIngredients}</div><br/>
                                
                            <div><p className="a1">Preparation Time</p>{found.recipePrepTime}</div><br/>
                                
                            <div><p className="a1">Process</p>{found.recipeMethod}</div><br/>
                                
                            <div><p className="a1">Suggestions</p>{found.recipeSuggestion}</div><br/>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default RecipeDetail;