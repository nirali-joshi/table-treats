import React from "react";
import { Link } from "react-router-dom";

const Recipe = (props) => {
  console.log(props);
   return (
        <div className="a5">
            <table width="80%">
            <div className="row">
            <tr>
            <td><Link className="link" to={`/recipes/${Recipe.recipeId=1}`}>
                <div className="space">
                    <img src="https://12t.greatlifepublishing.net/wp-content/uploads/sites/2/2014/10/shake.jpg" width="350px" height="400px"/><br />
                    <p className="a6">Oreo Thick Shake</p><br />  
                </div>          
            </Link></td>
            <td><Link className="link" to={`/recipes/${Recipe.recipeId=2}`}>
                <div className="space">
                    <img src="http://www.blog.sagmart.com/wp-content/uploads/2015/07/Hakka-Noodles.jpg"  width="450px" height="400px"/><br /> 
                    <p className="a6">Veg. Hakka Noodles</p><br />
                </div>
            </Link></td>
            <td><Link className="link" to={`/recipes/${Recipe.recipeId=3}`}>
                <div className="space">
                    <img src="https://4.imimg.com/data4/IJ/JR/MY-11458628/spongy-rasgulla-500x500.jpg" width="375px" height="400px" /><br /> 
                    <p className="a6">Rasgulla</p><br /> 
                </div>           
            </Link></td> 
            </tr>
            <tr>
            <td><Link className="link" to={`/recipes/${Recipe.recipeId=4}`}>
                <div className="space">
                    <img src="http://yesofcorsa.com/wp-content/uploads/2017/11/4K-Pancakes-Photo.jpg"  width="390px" height="400px"/><br /> 
                    <p className="a6">Pancake</p><br />
                </div>
            </Link></td>
            <td><Link className="link" to={`/recipes/${Recipe.recipeId=5}`}>
                <div className="space">
                    <img src="https://i.ytimg.com/vi/0X1onzAOUc4/maxresdefault.jpg"  width="390px" height="400px"/><br /> 
                    <p className="a6">Aloo Paratha</p><br />
                </div>
            </Link></td> 
            <td><Link className="link" to={`/recipes/${Recipe.recipeId=6}`}>
                <div className="space">
                    <img src="https://bakerish.com/wp-content/uploads/2021/04/FRUIT-SALSA-2.webp"  width="400px" height="400px"/><br /> 
                    <p className="a6">Fruit Salsa</p><br />
                </div>
            </Link></td>  
             </tr>           
            </div>  
        </table>      
        </div>
    )
}

export default Recipe;