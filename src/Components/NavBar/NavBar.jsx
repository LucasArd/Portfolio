import React, { Fragment } from "react";
import "./NavBar.css";

const menuOptions = ["Home","Proyectos","Skills","About"]

const NavBar = () => {

    return (
        <Fragment>
            <nav className="NavBarContainer">
                <h3 className="NavBarh3" href="#contact-me">Portfolio.</h3>
                <ul className="NavBarUl">
                    {menuOptions.map((item , index) => {
                        return(
                            <span className="NavBarOption" key={index}>{item}</span>
                        )
                    })}
                </ul>
            </nav>
        </Fragment>
    )
}

export default NavBar;