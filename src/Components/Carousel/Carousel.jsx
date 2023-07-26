import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className='videoSlide'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/bo9Z_pgByQY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <div>Nulla vitae elit libero, a pharetra augue mollis interdum.</div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>

                <div className='videoSlide'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/bo9Z_pgByQY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>

                <div className='videoSlide'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/bo9Z_pgByQY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <div>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;