import React, { useState, useEffect } from "react";
import "./VirtualGift.css";

const VirtualGifts = () => {
  const [showHug, setShowHug] = useState(false);
  const [showVouchers, setShowVouchers] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
    const timer = setTimeout(() => setAnimation(false), 1000);
    return () => clearTimeout(timer);
  }, [showHug, showVouchers, showPlaylist, showLetter]);

  const toggleHug = () => {
    setShowHug(!showHug);
    setShowVouchers(false);
    setShowPlaylist(false);
    setShowLetter(false);
  };

  const toggleVouchers = () => {
    setShowVouchers(!showVouchers);
    setShowHug(false);
    setShowPlaylist(false);
    setShowLetter(false);
  };

  const togglePlaylist = () => {
    setShowPlaylist(!showPlaylist);
    setShowHug(false);
    setShowVouchers(false);
    setShowLetter(false);
  };

  const toggleLetter = () => {
    setShowLetter(!showLetter);
    setShowHug(false);
    setShowVouchers(false);
    setShowPlaylist(false);
  };

  const openSpotifyPlaylist = () => {
    // Replace with your Spotify playlist URL
    window.open(
      "https://open.spotify.com/playlist/3Vo6jzbNJ4bM16M5RJz3gQ?si=0e4741351eda4544&pt=e75099713fe7f737c3d0fafa0dee503d",
      "_blank"
    );
  };

  // Array of promise vouchers
  const vouchers = [
    {
      id: 1,
      title: "Coffee Date ☕",
      description:
        "This voucher entitles you to one coffee date where I'll listen to all your stories.",
      background: "linear-gradient(145deg, #f8c291, #e9a372)",
      emoji: "☕",
    },
    {
      id: 2,
      title: "Movie Night 🍿",
      description: "Redeem for a movie night with snacks of your choice!",
      background: "linear-gradient(145deg, #c2f0c2, #a3e4a3)",
      emoji: "🎬",
    },
    {
      id: 3,
      title: "Lunch on Me 🍱",
      description:
        "I promise to take you out for your favorite lunch when you redeem this.",
      background: "linear-gradient(145deg, #b5d8eb, #8ec6e4)",
      emoji: "🍽️",
    },
    {
      id: 4,
      title: "Late Night Talk 🌙",
      description:
        "Call in this voucher for a midnight chat when you need someone to talk to.",
      background: "linear-gradient(145deg, #d8b5eb, #c08de4)",
      emoji: "📱",
    },
    {
      id: 5,
      title: "Shopping Spree 🛍️",
      description: "A day of shopping where I'll be your personal assistant.",
      background: "linear-gradient(145deg, #ffb8c6, #ff93aa)",
      emoji: "👜",
    },
    {
      id: 6,
      title: "Comfort Food 🍲",
      description: "Redeem when you need your favorite comfort food delivered.",
      background: "linear-gradient(145deg, #ffd884, #ffca54)",
      emoji: "🍛",
    },
    {
      id: 7,
      title: "Weekend Getaway 🏖️",
      description:
        "A surprise weekend trip to a place you've always wanted to visit.",
      background: "linear-gradient(145deg, #90e0ef, #48cae4)",
      emoji: "✈️",
    },
    {
      id: 8,
      title: "Game Night 🎮",
      description: "An evening of your favorite games with snacks and drinks.",
      background: "linear-gradient(145deg, #b8c0ff, #949be9)",
      emoji: "🎲",
    },
  ];

  return (
    <div className="virtual-gifts">
      <div className="gifts-header">
        <h2 className="gifts-title">Special Gifts For You</h2>
        <div className="gifts-subtitle">
          <span className="gifts-emoji">✨</span> Just for Kapoor{" "}
          <span className="gifts-emoji">✨</span>
        </div>
      </div>

      <div className="gifts-buttons">
        <button
          className={`gift-button ${showHug ? "active" : ""}`}
          onClick={toggleHug}
        >
          <span className="button-icon">🤗</span>
          Virtual Hug
        </button>

        <button
          className={`gift-button ${showVouchers ? "active" : ""}`}
          onClick={toggleVouchers}
        >
          <span className="button-icon">🎁</span>
          Promise Vouchers
        </button>

        <button
          className={`gift-button ${showPlaylist ? "active" : ""}`}
          onClick={togglePlaylist}
        >
          <span className="button-icon">🎵</span>
          Your Playlist
        </button>

        <button
          className={`gift-button ${showLetter ? "active" : ""}`}
          onClick={toggleLetter}
        >
          <span className="button-icon">💌</span>
          Personal Letter
        </button>
      </div>

      <div className={`gifts-content ${animation ? "animate" : ""}`}>
        {showHug && (
          <div className="virtual-hug">
            <div className="hug-animation">
              <div className="heart"></div>
              <div className="hug-text">
                Sending you the biggest virtual hug!
              </div>
              <div className="hug-emoji">🤗</div>
              <div className="floating-emoji">❤️</div>
              <div className="floating-emoji delay1">💖</div>
              <div className="floating-emoji delay2">💕</div>
            </div>
            <p className="hug-message">
              I might not be there to give you a real hug, but know that I'm
              sending you all the warmth and comfort of a genuine embrace.
              Whenever you're feeling down or just need a boost, remember that
              this virtual hug is always here for you, Kapoor. You're amazing!
              💫
            </p>
          </div>
        )}

        {showVouchers && (
          <div className="vouchers-container">
            <p className="vouchers-intro">
              <span className="intro-emoji">🎀</span>
              Redeem these special vouchers whenever you want! My promises to
              you, Kapoor:
              <span className="intro-emoji">🎀</span>
            </p>

            <div className="vouchers-grid">
              {vouchers.map((voucher) => (
                <div
                  key={voucher.id}
                  className="voucher"
                  style={{ background: voucher.background }}
                >
                  <div className="voucher-content">
                    <div className="voucher-emoji">{voucher.emoji}</div>
                    <h3 className="voucher-title">{voucher.title}</h3>
                    <p className="voucher-description">{voucher.description}</p>
                    <div className="voucher-footer">
                      <div className="voucher-stamp">✓ VALID</div>
                      <div className="voucher-expiry">Never Expires</div>
                    </div>
                    <div className="voucher-corner"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {showPlaylist && (
          <div className="playlist-container">
            <div className="playlist-card">
              <div className="playlist-header">
                <div className="playlist-icon">🎵</div>
                <h3 className="playlist-title">Your Favorite Songs</h3>
              </div>

              <p className="playlist-description">
                <span className="playlist-emoji">🎧</span>
                I've put together all those songs you love, Kapoor - the ones
                that make you smile, the ones you always sing along to, and the
                ones that remind me of our best moments together.
                <span className="playlist-emoji">💃</span>
              </p>

              <button className="spotify-button" onClick={openSpotifyPlaylist}>
                <span className="spotify-icon">🎧</span>
                Listen on Spotify
              </button>
            </div>
          </div>
        )}

        {showLetter && (
          <div className="letter-container">
            <div className="letter-paper">
              <div className="letter-header">
                <div className="letter-date">March 15, 2025</div>
                <div className="letter-to">Dear Kapoor,</div>
              </div>

              <div className="letter-content">
                <p>
                  I wanted to take a moment to put my thoughts into words and
                  tell you how much you mean to me. Some things are better
                  expressed through writing, and this is my way of sharing
                  what's in my heart. 💖
                </p>

                <p>
                  You've been an incredible presence in my life. Your smile
                  brightens even the darkest days, and your kindness touches
                  everyone around you. I admire your strength, your passion, and
                  your ability to see the good in every situation. 🌟
                </p>

                <p>
                  I cherish all the memories we've created together - from our
                  long talks that last into the night to those spontaneous
                  adventures that leave us laughing until our sides hurt. Every
                  moment with you feels special and genuine. 🌈
                </p>

                <p>
                  I promise to always be there for you, just as you've been
                  there for me. Whether we're celebrating life's biggest
                  victories or navigating through its challenges, I'm grateful
                  to have you by my side. 🤝
                </p>

                <p>
                  I hope these small gifts bring a smile to your face and remind
                  you of how wonderful you are. You deserve all the happiness in
                  the world, Kapoor. 🎁
                </p>
              </div>

              <div className="letter-footer">
                <div className="letter-sign">With all my love,</div>
                <div className="letter-name">Me</div>
              </div>

              <div className="letter-decorations">
                <div className="letter-deco letter-deco-1">💌</div>
                <div className="letter-deco letter-deco-2">✨</div>
                <div className="letter-deco letter-deco-3">💕</div>
                <div className="letter-deco letter-deco-4">🌸</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VirtualGifts;
