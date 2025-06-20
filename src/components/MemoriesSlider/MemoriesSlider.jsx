import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";

const MemoriesGallery = () => {
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [confetti, setConfetti] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Generate 25 memories with beautiful love quotes
  const memories = [
    {
      id: 1,
      image: `https://picsum.photos/600/400?random=1`,
      title: "First Glance",
      quote:
        "In your eyes, I found my home, my adventure, and my peace all at once.",
      date: "The Beginning",
      author: "Our Love Story",
    },
    {
      id: 2,
      image: `https://picsum.photos/600/400?random=2`,
      title: "Morning Coffee",
      quote:
        "Every morning with you feels like the first page of a beautiful story.",
      date: "Daily Bliss",
      author: "Together Forever",
    },
    {
      id: 3,
      image: `https://picsum.photos/600/400?random=3`,
      title: "Sunset Dreams",
      quote: "With you, every sunset promises a more beautiful tomorrow.",
      date: "Golden Hour",
      author: "Endless Love",
    },
    {
      id: 4,
      image: `https://picsum.photos/600/400?random=4`,
      title: "Laughter Lines",
      quote: "Your laughter is the soundtrack to my happiest memories.",
      date: "Pure Joy",
      author: "Heart & Soul",
    },
    {
      id: 5,
      image: `https://picsum.photos/600/400?random=5`,
      title: "Adventure Awaits",
      quote:
        "Life is either a daring adventure or nothing at all, especially with you.",
      date: "Wanderlust",
      author: "Journey Together",
    },
    {
      id: 6,
      image: `https://picsum.photos/600/400?random=6`,
      title: "Quiet Moments",
      quote:
        "In the silence between us, I hear the most beautiful conversations.",
      date: "Peaceful Love",
      author: "Silent Understanding",
    },
    {
      id: 7,
      image: `https://picsum.photos/600/400?random=7`,
      title: "Dancing Hearts",
      quote:
        "We don't just dance together; our souls waltz in perfect harmony.",
      date: "Rhythm of Love",
      author: "Dancing Souls",
    },
    {
      id: 8,
      image: `https://picsum.photos/600/400?random=8`,
      title: "Starlit Wishes",
      quote: "Under the stars, I realized you were my greatest wish come true.",
      date: "Cosmic Love",
      author: "Written in Stars",
    },
    {
      id: 9,
      image: `https://picsum.photos/600/400?random=9`,
      title: "Rain Dance",
      quote:
        "Even storms become symphonies when I'm dancing with you in the rain.",
      date: "Weather Together",
      author: "Storm & Calm",
    },
    {
      id: 10,
      image: `https://picsum.photos/600/400?random=10`,
      title: "Kitchen Stories",
      quote:
        "The best recipes are made with love, laughter, and a pinch of chaos.",
      date: "Cooking Love",
      author: "Home Sweet Home",
    },
    {
      id: 11,
      image: `https://picsum.photos/600/400?random=11`,
      title: "Travel Tales",
      quote: "We don't go to places; we go to each other, wherever we may be.",
      date: "Journey Together",
      author: "Wandering Hearts",
    },
    {
      id: 12,
      image: `https://picsum.photos/600/400?random=12`,
      title: "Bookish Love",
      quote:
        "You're my favorite chapter in the story of life I never want to end.",
      date: "Literary Romance",
      author: "Love Stories",
    },
    {
      id: 13,
      image: `https://picsum.photos/600/400?random=13`,
      title: "Garden Bloom",
      quote:
        "Like flowers in spring, our love grows more beautiful with each season.",
      date: "Seasonal Love",
      author: "Blooming Hearts",
    },
    {
      id: 14,
      image: `https://picsum.photos/600/400?random=14`,
      title: "Movie Night",
      quote: "Every love story is beautiful, but ours is my favorite movie.",
      date: "Cinema Hearts",
      author: "Picture Perfect",
    },
    {
      id: 15,
      image: `https://picsum.photos/600/400?random=15`,
      title: "Morning Light",
      quote: "You are the sunrise that makes every dawn worth waking up for.",
      date: "New Beginnings",
      author: "Dawn of Love",
    },
    {
      id: 16,
      image: `https://picsum.photos/600/400?random=16`,
      title: "Ocean Waves",
      quote:
        "Like the ocean, my love for you is deep, endless, and ever-changing.",
      date: "Infinite Love",
      author: "Depths of Heart",
    },
    {
      id: 17,
      image: `https://picsum.photos/600/400?random=17`,
      title: "City Lights",
      quote:
        "In a city of millions, you're the only light that guides me home.",
      date: "Urban Romance",
      author: "City of Love",
    },
    {
      id: 18,
      image: `https://picsum.photos/600/400?random=18`,
      title: "Winter Warmth",
      quote:
        "You're my favorite season - the warmth that melts away winter's cold.",
      date: "Cozy Love",
      author: "Seasons of Us",
    },
    {
      id: 19,
      image: `https://picsum.photos/600/400?random=19`,
      title: "Music Souls",
      quote: "You're the melody my heart never knew it was searching for.",
      date: "Harmonious Love",
      author: "Love Songs",
    },
    {
      id: 20,
      image: `https://picsum.photos/600/400?random=20`,
      title: "Art of Us",
      quote: "We don't just create art; we are each other's masterpiece.",
      date: "Creative Hearts",
      author: "Masterpiece Love",
    },
    {
      id: 21,
      image: `https://picsum.photos/600/400?random=21`,
      title: "Sweet Dreams",
      quote:
        "Every night, I fall asleep grateful and wake up excited, all because of you.",
      date: "Dream Love",
      author: "Dreaming Together",
    },
    {
      id: 22,
      image: `https://picsum.photos/600/400?random=22`,
      title: "Forest Path",
      quote: "Hand in hand, every path becomes an adventure worth taking.",
      date: "Nature's Love",
      author: "Path of Hearts",
    },
    {
      id: 23,
      image: `https://picsum.photos/600/400?random=23`,
      title: "Celebration",
      quote:
        "Every day with you feels like a celebration of everything beautiful.",
      date: "Joyful Moments",
      author: "Celebrating Us",
    },
    {
      id: 24,
      image: `https://picsum.photos/600/400?random=24`,
      title: "Reflection",
      quote:
        "In you, I see the best version of myself and the future I've always dreamed of.",
      date: "Mirror of Love",
      author: "Reflected Hearts",
    },
    {
      id: 25,
      image: `https://picsum.photos/600/400?random=25`,
      title: "Forever Promise",
      quote:
        "This isn't just love; it's the promise of all the beautiful tomorrows to come.",
      date: "Eternal Love",
      author: "Promise of Forever",
    },
  ];

  // Confetti particle component
  const createConfetti = useCallback(() => {
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: -10,
      rotation: Math.random() * 360,
      color: ["#ff6b9d", "#c44569", "#f8b500", "#38ada9", "#786fa6", "#f19066"][
        Math.floor(Math.random() * 6)
      ],
      size: Math.random() * 8 + 4,
      velocityX: (Math.random() - 0.5) * 2,
      velocityY: Math.random() * 3 + 2,
      rotationSpeed: (Math.random() - 0.5) * 10,
    }));
    setConfetti(newConfetti);

    setTimeout(() => setConfetti([]), 3000);
  }, []);

  // Update confetti positions
  useEffect(() => {
    if (confetti.length === 0) return;

    const animationInterval = setInterval(() => {
      setConfetti((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.velocityX,
            y: particle.y + particle.velocityY,
            rotation: particle.rotation + particle.rotationSpeed,
            velocityY: particle.velocityY + 0.1,
          }))
          .filter((particle) => particle.y < 120)
      );
    }, 50);

    return () => clearInterval(animationInterval);
  }, [confetti.length]);

  const openModal = (memory, index) => {
    setSelectedMemory(memory);
    setCurrentIndex(index);
    setIsModalOpen(true);
    createConfetti();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMemory(null);
  };

  const navigateMemory = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % memories.length
        : (currentIndex - 1 + memories.length) % memories.length;

    setCurrentIndex(newIndex);
    setSelectedMemory(memories[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    } else if (e.key === "ArrowRight") {
      navigateMemory("next");
    } else if (e.key === "ArrowLeft") {
      navigateMemory("prev");
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen, currentIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 p-4">
      {/* Background blur effect */}
      <div className="fixed inset-0 bg-gradient-to-br from-rose-200/20 via-pink-200/20 to-purple-200/20 backdrop-blur-sm"></div>

      {/* Confetti Animation */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {confetti.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              transform: `rotate(${particle.rotation}deg)`,
              backgroundColor: particle.color,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
            💕 Our Love Story Gallery 💕
          </h1>
          <p className="text-xl text-rose-600/80 font-medium">
            {memories.length} Beautiful Moments Together
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className="group cursor-pointer"
              onClick={() => openModal(memory, index)}
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Expand className="w-4 h-4 text-rose-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-1">
                    {memory.title}
                  </h3>
                  <p className="text-sm text-rose-500 font-medium mb-2">
                    {memory.date}
                  </p>
                  <p className="text-sm text-gray-600 italic line-clamp-2">
                    "
                    {memory.quote.length > 60
                      ? memory.quote.substring(0, 60) + "..."
                      : memory.quote}
                    "
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedMemory && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateMemory("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <button
              onClick={() => navigateMemory("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="md:w-1/2 h-64 md:h-96">
                <img
                  src={selectedMemory.image}
                  alt={selectedMemory.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {selectedMemory.title}
                </h2>
                <p className="text-rose-500 font-medium mb-6">
                  {selectedMemory.date}
                </p>

                <div className="relative">
                  <div className="text-6xl text-rose-200 absolute -top-4 -left-2">
                    "
                  </div>
                  <p className="text-lg text-gray-700 italic leading-relaxed pl-6">
                    {selectedMemory.quote}
                  </p>
                  <div className="text-6xl text-rose-200 absolute -bottom-8 -right-2 rotate-180">
                    "
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 font-medium">
                    {selectedMemory.author}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoriesGallery;
