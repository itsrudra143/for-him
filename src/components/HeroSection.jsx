import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create sparkles dynamically
    const container = containerRef.current;
    const sparkleCount = 50;

    // Remove any existing sparkles
    const existingSparkles = container.querySelectorAll(".sparkle-element");
    existingSparkles.forEach((sparkle) => sparkle.remove());

    // Create new sparkles
    for (let i = 0; i < sparkleCount; i++) {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle-element absolute w-2 h-2 rounded-full";
      sparkle.style.backgroundColor = `rgba(255, 255, 255, ${
        Math.random() * 0.5 + 0.5
      })`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.left = `${Math.random() * 100}%`;

      container.appendChild(sparkle);

      // Animate each sparkle
      gsap.to(sparkle, {
        opacity: Math.random(),
        scale: Math.random() * 1.5 + 0.5,
        duration: Math.random() * 2 + 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2,
      });
    }

    // Create floating hearts
    const heartCount = 15;
    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement("div");
      heart.className = "heart-element absolute text-3xl opacity-60";
      heart.textContent = "❤️";
      heart.style.top = `${Math.random() * 100}%`;
      heart.style.left = `${Math.random() * 100}%`;

      container.appendChild(heart);

      // Animate each heart
      gsap.to(heart, {
        y: -50,
        x: Math.random() * 20 - 10,
        opacity: Math.random() * 0.5 + 0.1,
        duration: Math.random() * 4 + 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: Math.random() * 3,
      });
    }

    // Cleanup function
    return () => {
      const elements = container.querySelectorAll(
        ".sparkle-element, .heart-element"
      );
      elements.forEach((element) => element.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-birthday-purple to-birthday-pink"
    >
      {/* This container will hold the dynamically created sparkles */}

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl font-bold mb-6 text-white drop-shadow-lg animate-float">
          Thank You!
        </h1>

        <p className="text-xl text-white mb-8 max-w-md">
          For being an amazing friend and making every day special. Here's a
          countdown to your special day!
        </p>

        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            Birthday Countdown
          </h2>
          <div className="text-5xl font-bold text-white">50 Days</div>
        </div>

        <button className="px-8 py-3 bg-white text-birthday-purple rounded-full font-bold hover:bg-opacity-90 transform hover:scale-105 transition duration-300 shadow-lg">
          Start Journey
        </button>
      </div>
    </div>
  );
};

export default Hero;
