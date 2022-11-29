import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel>
                <div>
                    <img src="../hongkong.jpg" />
                    <p>Hong Kong</p>
                </div>
                <div>
                    <img src="../macao.webp" />
                    <p>Macao</p>
                </div>
                <div>
                    <img src="../japan.webp" />
                    <p>Japan</p>
                </div>
                <div>
                    <img src="../lasvegas.webp" />
                    <p>Las Vegas</p>
                </div>
            </Carousel>
        </div>
    );
}