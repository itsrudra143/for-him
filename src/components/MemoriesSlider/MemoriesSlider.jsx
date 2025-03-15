import React, { useState, useEffect, useRef } from "react";
import "./MemoriesSlider.css";

const MemoriesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  // Sample images - replace with your actual image paths
  const memories = [
    {
      id: 1,
      image: "../../assets/image-1.jpg", // Replace with actual image path
      caption: "The day we first met",
    },
    {
      id: 2,
      image: "../../assets/image-2.jpg", // Replace with actual image path
      caption: "That amazing trip to the mountains",
    },
    {
      id: 3,
      image: "../../assets/image-3.jpg", // Replace with actual image path
      caption: "When we laughed so hard we cried",
    },
    {
      id: 4,
      image: "../../assets/image-4.jpg", // Replace with actual image path
      caption: "That surprise birthday party",
    },
    {
      id: 5,
      image: "../../assets/image-5.jpg", // Replace with actual image path
      caption: "Just one of our many coffee dates",
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentSlide((prev) => (prev + 1) % memories.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, memories.length]);

  // Control background music
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.log("Audio playback prevented by browser", error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }

    return () => {
      //   if (audioRef.current) {
      //     audioRef.current.pause();
      //   }
    };
  }, [isPlaying]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + memories.length) % memories.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % memories.length);
  };

  const toggleAudio = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="memories-slider">
      <h2 className="slider-title">Our Beautiful Memories</h2>

      {/* Background Music */}
      <audio
        ref={audioRef}
        loop
        src="https://assets.codepen.io/217233/Komiku_-_12_-_Bicycle.mp3" // Replace with your music file
      ></audio>

      {/* Audio Controls */}
      <button className="audio-control" onClick={toggleAudio}>
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>

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
              <img src={memory.image} alt={`Memory ${index + 1}`} />
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
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MemoriesSlider;
