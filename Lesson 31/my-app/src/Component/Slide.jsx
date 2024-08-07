import React from 'react'
import { Carousel } from 'react-bootstrap';
import img1 from '../img/slide-one.jpg'
import img2 from '../img/slide-two.jpg'
import img3 from '../img/slide-three.jpg'
import img4 from '../img/slide-four.jpg'
import img5 from '../img/slide-five.jpg'

function Slide() {
    return (
        <div className='slide'>
            <div className='container mt-3'>
                <div className='row text-center'>
                    <div className='col-12'>
                        <h1>Hello Everybody</h1>
                    </div>
                    <div className='col-12'>
                        <p className='fst-italic'>Lorem, ipsum dolor.</p>
                    </div>
                </div>
            </div>

            <Carousel fade className='mt-3'>
                <Carousel.Item>
                    <img className="d-block w-100" src={img1} alt="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Some representative placeholder content for the first slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={img2} alt="Second slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Some representative placeholder content for the second slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={img3} alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Some representative placeholder content for the third slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={img4} alt="Fourth slide" />
                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>Some representative placeholder content for the fourth slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={img5} alt="Fifth slide" />
                    <Carousel.Caption>
                        <h3>Fifth slide label</h3>
                        <p>Some representative placeholder content for the fifth slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slide