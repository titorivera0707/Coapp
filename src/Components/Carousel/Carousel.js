import React from 'react'
import { Carousel } from "react-bootstrap"
import Moussey from "../../Assets/MBeach.jpeg"
import MB from "../../Assets/MB.jpeg"
import B from "../../Assets/B.jpeg"

function CarouselPictures() {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Moussey}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Find your perfect companion!</h3>
                    <p>Big or small, your companion will love you more than it loves itself.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={MB}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Find a partner in crime for your current companion!</h3>
                    <p>Dogs will have a much happier life if shared with another dog they can spend most of their time with.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={B}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Make lots of time for your companion!</h3>
                    <p>Your new companion will always will be loyal to you and it should be rewarded as such.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselPictures
