import React, { useEffect, useState } from 'react'

const images = [
    "https://cdn.pixabay.com/photo/2018/07/25/16/00/art-3561710_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/01/28/18/32/leaves-6975462_1280.png",
    "https://cdn.pixabay.com/photo/2021/10/15/11/06/lemon-background-6712130_1280.png",
    "https://cdn.pixabay.com/photo/2018/08/19/07/05/background-3616101_1280.jpg",
]
const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    useEffect (()=> {
        const interval  = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    })

    return (
        <div style={{
            position: "relative",
            width: "500px",
            height: "300px",
            margin: "auto",
            overflow: "hidden",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}>
            <img src={images[currentIndex]} alt=""   style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 0.5s ease-in-out",
        }} />

        <button onClick={prevSlide} style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          fontSize: "24px",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}>
            &#10094;
        </button>
        <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          fontSize: "24px",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        &#10095;
      </button>
        </div>
    )
}

export default ImageCarousel
