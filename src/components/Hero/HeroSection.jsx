import React, { useState } from "react";
import "./Hero.css";
import MemoriesSlider from "../MemoriesSlider/MemoriesSlider";
import VirtualGifts from "../Virtual-Gifts/VirtualGift";

const ThankYouCard = () => {
  const [showMemories, setShowMemories] = useState(true);
  const [emojis, setEmojis] = useState([]);

  // Function to create floating emojis
  React.useEffect(() => {
    const container = document.querySelector(".hero-container");
    if (!container) return;

    const emojiList = ["💖", "✨", "🌸", "💕", "🎀", "🌷", "💝", "🌟"];
    const newEmojis = [];

    // Create new floating emojis
    for (let i = 0; i < 30; i++) {
      newEmojis.push({
        id: i,
        emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${1 + Math.random() * 1.5}rem`,
        duration: `${5 + Math.random() * 8}s`,
        delay: `${Math.random() * 5}s`,
      });
    }

    setEmojis(newEmojis);
  }, []);

  // Handle button click to show memories
  const handleShowMemories = () => {
    setShowMemories(true);
    // Add confetti effect when showing memories
    createConfetti();
  };

  // Return to thank you card
  const handleReturnToCard = () => {
    setShowMemories(false);
  };

  const createConfetti = () => {
    const confettiContainer = document.querySelector(".confetti-container");
    if (!confettiContainer) return;

    const colors = ["#ffb6c1", "#f8a5c2", "#ffc0cb", "#ffccd5", "#ffafbd"];

    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}%`;

        // Random size
        const size = Math.random() * 10 + 5;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;

        // Random rotation
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

        // Random animation duration
        const duration = Math.random() * 3 + 2;
        confetti.style.animation = `confetti-fall ${duration}s linear forwards`;

        confettiContainer.appendChild(confetti);

        // Remove after animation completes
        setTimeout(() => {
          confetti.remove();
        }, duration * 1000);
      }, i * 50);
    }
  };

  return (
    <div className="hero-container">
      <div className="confetti-container"></div>

      {emojis.map((emojiItem) => (
        <div
          key={emojiItem.id}
          className="emoji-element"
          style={{
            left: emojiItem.left,
            top: emojiItem.top,
            fontSize: emojiItem.size,
            animationDuration: emojiItem.duration,
            animationDelay: emojiItem.delay,
          }}
        >
          {emojiItem.emoji}
        </div>
      ))}

      {!showMemories ? (
        <div className="hero-content">
          <h1 className="hero-title">Thank You!</h1>

          <div className="thank-you-card">
            <p className="hero-text">
              I just wanna take a moment to say a{" "}
              <strong>huge thank you</strong> for your daily emails! 🥹✨
              Honestly, they make my day every single time. It's such a small
              thing, but it means so much to me. Knowing that someone takes the
              time to check in, send kind words, and make me feel like I
              actually matter—it's just really special. 💌💛
              <br />
              <br />
              Some days feel a little overwhelming, and then boom—your email
              pops up, and it's like a little ray of sunshine cutting through.
              🌞✨ It's those little things that truly make a difference, and I
              appreciate you more than I can put into words. 💖
              <br />
              <br />
              So yeah, just wanted to let you know that you're amazing, and I'm
              super grateful for you! Keep being your awesome self! 😘🙌
            </p>
            <p className="signature">
              With love,
              <br />
              <span className="name">Rudrry ❤️</span>
            </p>
          </div>

          <button className="journey-button" onClick={handleShowMemories}>
            See Our Memories
          </button>
        </div>
      ) : (
        <div className="memories-container">
          <MemoriesSlider />
          <VirtualGifts />
          <button className="return-button" onClick={handleReturnToCard}>
            Return to Card
          </button>
        </div>
      )}
    </div>
  );
};

export default ThankYouCard;
