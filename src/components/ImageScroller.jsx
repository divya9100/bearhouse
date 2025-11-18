import React, { useEffect, useState } from "react";
import "./ImageScroller.css";

import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";

export default function ImageScroller() {

  const images = [img1, img2];
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

 useEffect(() => {
  const timer = setInterval(() => {
    setProgress((p) => {
      if (p >= 100) {
        setIndex((i) => (i + 1) % images.length);
        return 0;
      }
      return p + 1;
    });
  }, 50);
console.log("Current index:", index);
  return () => clearInterval(timer);
}, [images.length]);


  return (
    <div className="image-slider">
      <img src={images[index]} alt="slide" className="slider-image" />

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
