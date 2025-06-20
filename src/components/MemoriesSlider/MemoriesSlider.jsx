import React, { useState } from "react";
import { Heart } from "lucide-react";
import "./MemoriesSlider.css";

const CoupleGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const coupleImages = [
    { id: 1, src: "/image1.jpg" },
    { id: 2, src: "/image2.jpg" },
    { id: 3, src: "/image3.jpg" },
    { id: 4, src: "/image4.jpg" },
    { id: 5, src: "/image5.jpg" },
    { id: 6, src: "/image6.jpg" },
    { id: 7, src: "/image7.jpg" },
    { id: 8, src: "/image8.jpg" },
    { id: 9, src: "/image9.jpg" },
    { id: 10, src: "/image10.jpg" },
    { id: 11, src: "/image11.jpg" },
    { id: 12, src: "/image12.jpg" },
    { id: 13, src: "/image13.jpg" },
    { id: 14, src: "/image14.jpg" },
    { id: 15, src: "/image15.jpg" },
    { id: 16, src: "/image16.jpg" },
    { id: 17, src: "/image17.jpg" },
    { id: 18, src: "/image18.jpg" },
    { id: 19, src: "/image19.jpg" },
    { id: 20, src: "/image20.jpg" },
    { id: 21, src: "/image21.jpg" },
    { id: 22, src: "/image22.jpg" },
    { id: 23, src: "/image23.jpg" },
    { id: 24, src: "/image24.jpg" },
    { id: 25, src: "/image25.jpg" },
  ];

  const loveQuotes = [
    "Every love story is beautiful, but ours is my favorite 💕",
    "In all the world, there is no heart for me like yours 💖",
    "You are my today and all of my tomorrows ✨",
    "Together is a wonderful place to be 🌟",
    "Our love story is just beginning 💫",
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {/* Continuous Floating Hearts Background */}
      <div className="floating-hearts-bg">
        {[...Array(50)].map((_, i) => (
          <Heart
            key={i}
            className="floating-heart-static"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
              fontSize: `${12 + Math.random() * 18}px`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Side Floating Hearts */}
      <div className="floating-hearts-sides">
        {[...Array(30)].map((_, i) => (
          <Heart
            key={`side-${i}`}
            className="floating-heart-side"
            style={{
              left:
                i % 2 === 0
                  ? `${Math.random() * 15}%`
                  : `${85 + Math.random() * 15}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 8}s`,
              fontSize: `${14 + Math.random() * 22}px`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Cute Header */}
      <div className="gallery-header">
        <div className="header-title">
          <Heart className="title-heart-left" size={40} fill="currentColor" />
          <h1 className="main-title">💕 Our Magical Love Journey 💕</h1>
          <Heart className="title-heart-right" size={40} fill="currentColor" />
        </div>
        <p className="subtitle">
          ✨ Creating beautiful memories together, one moment at a time ✨
        </p>
        <div className="subtitle-hearts">
          <Heart size={16} fill="#ec4899" className="subtitle-heart" />
          <Heart size={16} fill="#f472b6" className="subtitle-heart" />
          <Heart size={16} fill="#ec4899" className="subtitle-heart" />
        </div>
      </div>

      {/* CSS Gallery Grid */}
      <div className="gallery-grid">
        {coupleImages.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => handleImageClick(image)}
          >
            <div className="image-container">
              <img
                src={image.src}
                alt={`Memory ${image.id}`}
                className="gallery-image"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.innerHTML = `
                    <div class="image-placeholder">
                      <div class="placeholder-content">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                          <circle cx="8.5" cy="8.5" r="1.5"/>
                          <polyline points="21,15 16,10 5,21"/>
                        </svg>
                        <p>Image ${image.id}</p>
                      </div>
                    </div>
                  `;
                }}
              />
              <div className="image-overlay">
                <Heart size={24} fill="white" className="overlay-heart" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Love Quotes Section */}
      <div className="quotes-section">
        <div className="quotes-container">
          <Heart className="quote-heart-left" size={24} fill="currentColor" />
          <div className="quotes-content">
            {loveQuotes.map((quote, index) => (
              <p key={index} className="love-quote">
                {quote}
              </p>
            ))}
          </div>
          <Heart className="quote-heart-right" size={24} fill="currentColor" />
        </div>
      </div>

      {/* Bottom cute message */}
      <div className="bottom-message">
        <div className="message-card">
          <Heart className="message-heart-left" size={16} fill="currentColor" />
          <span className="message-text">
            25 Beautiful Memories & Counting...
          </span>
          <Heart
            className="message-heart-right"
            size={16}
            fill="currentColor"
          />
        </div>
        <div className="final-message">
          <p>💖 Forever and Always 💖</p>
        </div>
      </div>

      {/* Modal for Zoomed Image */}
      {selectedImage && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={`Memory ${selectedImage.id}`}
              className="modal-image"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentNode.innerHTML = `
                  <div class="modal-placeholder">
                    <div class="placeholder-content">
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21,15 16,10 5,21"/>
                      </svg>
                      <p>Image ${selectedImage.id}</p>
                    </div>
                  </div>
                `;
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CoupleGallery;
