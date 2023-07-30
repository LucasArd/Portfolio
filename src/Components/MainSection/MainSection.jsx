import React, { Fragment, useEffect, useRef } from "react";
import './MainSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'
import Typed from "typed.js";

const MainSection = () => {

    const txt = useRef(null);

    useEffect(() => {
        const typed = new Typed(txt.current, {
            strings: ["Front-End Developer", "Web Developer"],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 400,
            loop: true,
        })

        return () => {
            typed.destroy();
        };

    },[]);

    return (
        <Fragment>
            <section className="MainSection">
                <div className="MainSectionDiv1">
                    <h4> Welcome! I am</h4>
                    <h3>Lucas Aranda,</h3>
                    <h5>and I'm a <span ref={txt} className="typed"></span> </h5>
                    <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, distinctio! consectetur adipisicing elit.</div> 
                    <ul className="MainSectionDiv1Ul">
                        <span className="Icons"> <FontAwesomeIcon icon={faEnvelope} size="2x" /> </span>
                        <span className="Icons"> <FontAwesomeIcon icon={faGithub} size="2x" /> </span>
                        <span className="Icons"> <FontAwesomeIcon icon={faLinkedinIn} size="2x" /></span>
                    </ul>
                    <button className="btn-box"> <a href="../CV LucasAranda.pdf" download={''}>Download CV <FontAwesomeIcon icon={faDownload} /> </a> </button>
                </div>
                <div className="MainSectionDiv2">
                    <div>
                        <img src={require('../../Assets/FotoCV.jpeg')} alt="fotocv"></img>
                    </div>
                </div>
            </section>
            <div className="line" id='skills'></div>

        </Fragment>
    )
}

export default MainSection;