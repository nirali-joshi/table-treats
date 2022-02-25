import React,{useState} from "react";

const SearchBar = () => {
    console.log(useState());
    const handleChange = (event)=>{
        console.log(event);
        const {name,value} = event.target;
        console.log({[name]:value});
    }
    return (
        <div className="searchbar">
            <h3>Search Recipes</h3>
            <input type="text" placeholder="Search here" name="name" onChange={handleChange}/>
        </div>
    )
}
export default SearchBar;