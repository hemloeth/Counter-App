import React, { useState } from "react";
import './Image.css';
import Button from "./Button";
import Decbtn from "./Decbtn";

function Image() {
    const images = [
        {
            id: 1,
            url: "./Images/image-1.jpg",
            alt: "Image 1 description"
        },
        {
            id: 2,
            url: "./Images/image-2.jpg",
            alt: "Image 2 description"
        },
        {
            id: 3,
            url: "./Images/image-3.jpg",
            alt: "Image 3 description"
        },
        {
            id: 4,
            url: "./Images/image-4.jpg",
            alt: "Image 4 description"
        },
        {
            id: 5,
            url: "./Images/image-5.jpg",
            alt: "Image 5 description"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    function clickHandler() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    function changeHandler() {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    return (
        <div className="image-container">
            <div className="gallery">
                <img src={images[currentIndex].url} className="centered-image" alt={images[currentIndex].alt} />
                <div className="button-container">
                    <Decbtn onClick={changeHandler} className="next">Prev Image</Decbtn>
                    <Button onClick={clickHandler} className="prev">Next Image</Button>
                </div>
            </div>
        </div>
    );
}

export default Image;
