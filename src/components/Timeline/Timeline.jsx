import React, { useEffect, useRef } from "react";
import "./Timeline.css";

const Timeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-timeline-item");
          }
        });
      },
      { threshold: 0.2 }
    );

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="timeline-container" ref={timelineRef}>
      <div className="timeline-header">
        <h1>Our Journey Together</h1>
        <p className="timeline-subtitle">
          ✨ Capturing our most precious moments ✨
        </p>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">12 November 2022</div>
          <div className="timeline-content">
            <h2>First Time We Met</h2>
            <p>
              ✨ The first time we saw each other face-to-face and had a
              conversation... where I totally cheated on my exam from you! 😆🎓
            </p>
            <div className="timeline-icon">💫</div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">21 November 2022</div>
          <div className="timeline-content">
            <h2>Our First Chat</h2>
            <p>
              💌 The very first time we texted... who knew that one message
              would lead to so many memories?
            </p>
            <div className="timeline-icon">💬</div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">28 March 2023</div>
          <div className="timeline-content">
            <h2>Your Birthday Wish to Me</h2>
            <p>🎂 A special moment when you wished me on my birthday!</p>
            <div className="timeline-image-placeholder">
              <img src="public/28march,2023.jpg" alt="Birthday wish" />
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">12 June 2023</div>
          <div className="timeline-content">
            <h2>The Series You Suggested</h2>
            <p>📺 You first time told me to watch 'Asur,' and I finally did!</p>
            <div className="timeline-image-placeholder">
              <img src="public/12june,2023.jpg" alt="Asur series" />
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">14 August 2023</div>
          <div className="timeline-content">
            <h2>My Birthday Wish to You</h2>
            <p>🎁 A heartfelt wish from me to you on your special day!</p>
            <div className="timeline-image-placeholder">
              <img src="public/14august,2023.jpg" alt="Birthday wish" />
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">28 August 2023</div>
          <div className="timeline-content">
            <h2>Our Moon Conversation</h2>
            <p>
              🌕 That deep conversation about the moon—one of my favorite topics
              ever!
            </p>
            <div className="timeline-image-placeholder">
              <img src="public/28august.2023.jpg" alt="Moon conversation" />
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">22 March 2025</div>
          <div className="timeline-content special-item">
            <h2>Our Story Continues...</h2>
            <p>
              ✨ Every day with you is a new adventure. Here's to creating many
              more beautiful memories together!
            </p>
            <div className="timeline-icon">💖</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
