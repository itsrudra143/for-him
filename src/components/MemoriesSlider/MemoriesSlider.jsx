import React, { useState, useEffect } from "react";
import "./MemoriesSlider.css";

const MemoriesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Enhanced sample data with captions
  const memories = [
    {
      id: 1,
      image: "/image-1.jpg",
    },
    {
      id: 2,
      image: "/image-2.jpg",
    },
    {
      id: 3,
      image: "/image-3.jpg",
    },
    {
      id: 4,
      image: "/image-4.jpg",
    },
    {
      id: 5,
      image: "/image-5.jpg",
    },
  ];

  // Auto-slide effect with play/pause functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentSlide((prev) => (prev + 1) % memories.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, memories.length]);

  const handlePrevSlide = () => {
    setIsPlaying(false); // Pause when manually navigating
    setCurrentSlide((prev) => (prev - 1 + memories.length) % memories.length);
  };

  const handleNextSlide = () => {
    setIsPlaying(false); // Pause when manually navigating
    setCurrentSlide((prev) => (prev + 1) % memories.length);
  };

  const toggleAudio = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="memories-slider">
      <h2 className="slider-title">Our Beautiful Memories ✨</h2>

      {/* Audio Controls */}
      <button className="audio-control" onClick={toggleAudio}>
        {isPlaying ? "Pause Slideshow" : "Play Slideshow"}
      </button>

      {/* Current slide indicator */}
      <div className="slide-counter">
        {currentSlide + 1} / {memories.length}
      </div>

      {/* Slider */}
      <div className="slider-container">
        <button className="slider-arrow prev" onClick={handlePrevSlide}>
          ❮
        </button>

        <div className="slides-wrapper">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className={`slide ${index === currentSlide ? "active" : ""}`}
              style={{
                transform: `translateX(${(index - currentSlide) * 100}%)`,
              }}
            >
              <div className="image-container">
                <img src={memory.image} alt={`Memory ${index + 1}`} />
              </div>
              <div className="caption">{memory.caption}</div>
            </div>
          ))}
        </div>

        <button className="slider-arrow next" onClick={handleNextSlide}>
          ❯
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="slider-dots">
        {memories.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => {
              setIsPlaying(false);
              setCurrentSlide(index);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MemoriesSlider;
