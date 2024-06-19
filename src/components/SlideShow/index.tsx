// src/components/Slideshow.tsx
import React, { useEffect, useState } from "react";
import { Carousel } from "antd";

const images = [
  "image1.jpg",
  "image2.jpg",
  "image1.jpg",
  // Thêm nhiều hình ảnh khác nếu cần
];

const Slideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Carousel autoplay>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </Carousel>
    </div>
  );
};

export default Slideshow;
