import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import Recipe from './Recipe';


const Home = (props) => {
    console.log(props);
    return (
        <div className="a5">
            <div className="row">
           <SearchBar/>
           <Link className="link" to={`/recipes/${Recipe.recipeId=1}`}>
               <div className="space">
               <img src="https://12t.greatlifepublishing.net/wp-content/uploads/sites/2/2014/10/shake.jpg" width="250px" height="300px"/>
               <p className="a6">Oreo Thick Shake</p><br />
               </div>
            </Link>
           <Link className="link" to={`/recipes/${Recipe.recipeId=4}`}>
               <div className="space">
               <img src="http://yesofcorsa.com/wp-content/uploads/2017/11/4K-Pancakes-Photo.jpg" width="250px" height="300px" />
               <p className="a6">Pancake</p><br />
               </div>
           </Link>
           </div>
        </div>
    )
}

export default Home;