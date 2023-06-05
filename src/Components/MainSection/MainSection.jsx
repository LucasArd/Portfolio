import React, { Fragment } from "react";
import './MainSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const MainSection = () => {

    return (
        <Fragment>
            <section className="MainSection">
                <div className="MainSectionDiv1">
                    {/* <h3>Hi!, I'm Lucas Aranda,</h3>
                    <h4> Front-End Developer</h4>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, distinctio! consectetur adipisicing elit.</p> */}
                    <ul className="MainSectionDiv1Ul">
                        <span> <FontAwesomeIcon icon={faEnvelope} size="2x" /> </span>
                        <span> <FontAwesomeIcon icon={faGithub} size="2x" /> </span>
                        <span> <FontAwesomeIcon icon={faLinkedinIn} size="2x" /></span>
                    </ul>
                    <button className="btn-box"> More About Me </button>
                </div>
                <div className="MainSectionDiv2">
                    <div>
                        <img src={require('../../Assets/fotocv.jpg')} alt="fotocv"></img>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default MainSection;