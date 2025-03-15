import React, { useState } from "react";
import "./VirtualGifts.css";

const VirtualGifts = () => {
  const [showHug, setShowHug] = useState(false);
  const [showVouchers, setShowVouchers] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const toggleHug = () => {
    setShowHug(!showHug);
    setShowVouchers(false);
    setShowPlaylist(false);
  };

  const toggleVouchers = () => {
    setShowVouchers(!showVouchers);
    setShowHug(false);
    setShowPlaylist(false);
  };

  const togglePlaylist = () => {
    setShowPlaylist(!showPlaylist);
    setShowHug(false);
    setShowVouchers(false);
  };

  const openSpotifyPlaylist = () => {
    // Replace with your Spotify playlist URL
    window.open("https://open.spotify.com/playlist/YOUR_PLAYLIST_ID", "_blank");
  };

  // Array of promise vouchers
  const vouchers = [
    {
      id: 1,
      title: "Coffee Date",
      description:
        "This voucher entitles you to one coffee date where I'll listen to all your stories.",
      background: "#f8c291",
    },
    {
      id: 2,
      title: "Movie Night",
      description: "Redeem for a movie night with snacks of your choice!",
      background: "#c2f0c2",
    },
    {
      id: 3,
      title: "Lunch on Me",
      description:
        "I promise to take you out for your favorite lunch when you redeem this.",
      background: "#b5d8eb",
    },
    {
      id: 4,
      title: "Late Night Talk",
      description:
        "Call in this voucher for a midnight chat when you need someone to talk to.",
      background: "#d8b5eb",
    },
  ];

  return (
    <div className="virtual-gifts">
      <h2 className="gifts-title">Special Gifts For You</h2>

      <div className="gifts-buttons">
        <button
          className={`gift-button ${showHug ? "active" : ""}`}
          onClick={toggleHug}
        >
          Virtual Hug
        </button>

        <button
          className={`gift-button ${showVouchers ? "active" : ""}`}
          onClick={toggleVouchers}
        >
          Promise Vouchers
        </button>

        <button
          className={`gift-button ${showPlaylist ? "active" : ""}`}
          onClick={togglePlaylist}
        >
          Your Playlist
        </button>
      </div>

      <div className="gifts-content">
        {showHug && (
          <div className="virtual-hug">
            <div className="hug-animation">
              <div className="heart"></div>
              <div className="hug-text">
                Sending you the biggest virtual hug!
              </div>
              <div className="hug-emoji">🤗</div>
            </div>
            <p className="hug-message">
              I might not be there to give you a real hug, but know that I'm
              sending you all the warmth and comfort of a genuine embrace.
              Whenever you're feeling down or just need a boost, remember that
              this virtual hug is always here for you.
            </p>
          </div>
        )}

        {showVouchers && (
          <div className="vouchers-container">
            <p className="vouchers-intro">
              Redeem these special vouchers whenever you want! My promises to
              you:
            </p>

            <div className="vouchers-grid">
              {vouchers.map((voucher) => (
                <div
                  key={voucher.id}
                  className="voucher"
                  style={{ backgroundColor: voucher.background }}
                >
                  <div className="voucher-content">
                    <h3 className="voucher-title">{voucher.title}</h3>
                    <p className="voucher-description">{voucher.description}</p>
                    <div className="voucher-footer">
                      <div className="voucher-stamp">✓ VALID</div>
                      <div className="voucher-expiry">Never Expires</div>
                    </div>
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
                I've put together all those songs you love - the ones that make
                you smile, the ones you always sing along to, and the ones that
                remind me of our best moments together.
              </p>

              <button className="spotify-button" onClick={openSpotifyPlaylist}>
                <span className="spotify-icon">🎧</span>
                Play on Spotify
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VirtualGifts;
