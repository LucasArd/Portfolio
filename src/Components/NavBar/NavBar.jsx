import React, { Fragment } from "react";
import "./NavBar.css";

const menuOptions = ["Home","Proyects","Skills","About"]

const NavBar = () => {

    return (
        <Fragment>
            <nav className="NavBarContainer">
                <h3 className="NavBarh3" >Portfolio.</h3>
                <ul className="NavBarUl">
                    <li><a href="#home" className="NavBarOption">{menuOptions[0]}</a></li>
                    <li><a href="#proyects">{menuOptions[1]}</a></li>
                    <li><a href="#skills">{menuOptions[2]}</a></li>
                    <li><a href="#contact-me">{menuOptions[3]}</a></li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default NavBar;