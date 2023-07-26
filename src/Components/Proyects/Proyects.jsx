import React from "react";
import ControlledCarousel from "../Carousel/Carousel";
import { Fragment } from "react";
import './Proyects.css';

const Proyects = () => {

    return (
        <Fragment>
            <h2 className="titleProyects">Proyects</h2>
            <ControlledCarousel />
            <div className="textProyectsContainer">
                <p className="textProyects">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam delectus consequatur facilis nihil expedita sint possimus totam iusto provident, adipisci cumque nemo laboriosam fugit corporis, aliquid ipsa omnis vitae dolorem?
                    Magnam, deserunt consectetur est cum porro nam labore voluptatem culpa. Omnis odio sapiente nesciunt sunt aliquid ducimus? Dignissimos nihil quod culpa voluptate rerum magnam quas iste eaque explicabo, ratione reiciendis!
                    Asperiores itaque nam quo, fugiat perspiciatis odio, aliquid veritatis ipsum fugit quam eius nulla earum accusantium voluptates unde rerum quibusdam consectetur voluptatum sint quisquam exercitationem? Totam, voluptatibus fuga? Praesentium, omnis.
                </p>
            </div>
            <div className="line"></div>
        </Fragment>
    )
}

export default Proyects;