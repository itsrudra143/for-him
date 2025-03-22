import React from "react";
import "./Timeline.css";

const Timeline = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <h1>🌟 Our Journey Together 🌟</h1>
        <p className="timeline-subtitle">Capturing our special moments</p>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">12 November 2022</div>
          <div className="timeline-content">
            <h2>📍 First Time We Met</h2>
            <p>
              ✨ The first time we saw each other face-to-face and had a
              conversation... where I totally cheated on my exam from you! 😆🎓
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">21 November 2022</div>
          <div className="timeline-content">
            <h2>💬 Our First Chat</h2>
            <p>
              💌 The very first time we texted... who knew that one message
              would lead to so many memories?
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">28 March 2023</div>
          <div className="timeline-content">
            <h2>🎉 Your Birthday Wish to Me</h2>
            <p>🎂 A special moment when you wished me on my birthday!</p>
            <div className="timeline-image-placeholder">
              <div className="image-text">Screenshot of the message</div>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">12 June 2023</div>
          <div className="timeline-content">
            <h2>🎬 The Series You Suggested</h2>
            <p>📺 You first time told me to watch 'Asur,' and I finally did!</p>
            <div className="timeline-image-placeholder">
              <div className="image-text">Screenshot of proof!</div>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">14 August 2023</div>
          <div className="timeline-content">
            <h2>🎂 My Birthday Wish to You</h2>
            <p>🎁 A heartfelt wish from me to you on your special day!</p>
            <div className="timeline-image-placeholder">
              <div className="image-text">Screenshot of the message</div>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">28 August 2023</div>
          <div className="timeline-content">
            <h2>🌙 Our Moon Conversation</h2>
            <p>
              🌕 That deep conversation about the moon—one of my favorite topics
              ever!
            </p>
            <div className="timeline-image-placeholder">
              <div className="image-text">Screenshot of our chat</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
