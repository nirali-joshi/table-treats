import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.png';


const Header = () => {
    return (
        <header>
            <div>
                <img src={logo} height="170px" />
            </div>
            <ul>
                <Link className="link" to="/"><li>Home</li></Link>
                <Link className="link" to="/recipes"><li>Recipes</li></Link>
                <Link className="link" to="/about"><li>About</li></Link>
            </ul>
        </header>
    )
}
export default Header;