import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX, Pause, Play } from 'lucide-react';
import pharmacistImage from 'figma:asset/3cd1ef3764761daafd731eb97df09a022f16574f.png';
import surgicalTeamImage from 'figma:asset/9ec4bd36ec6bfe56d1fba52edb07a30df90fed32.png';
import vaccineImage from 'figma:asset/09eb4d61f652287cad3af6490a7fdfced087a8a2.png';

interface Slide {
  image: string;
}

const slides: Slide[] = [
  {
    image: pharmacistImage,
  },
  {
    image: surgicalTeamImage,
  },
  {
    image: vaccineImage,
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt="Healthcare in Africa"
              className={`w-full h-full object-cover ${index === 0 ? 'object-[center_20%]' : ''}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-transparent" />
          </motion.div>
        ))}
      </div>

      {/* Static Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-8 leading-tight">
            Advancing Healthcare Access Across Africa
          </h1>
          <motion.a
            href="/about"
            className="inline-block px-8 py-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-navy transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover Pacem Health
          </motion.a>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-6 flex gap-3 z-10">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="w-10 h-10 bg-navy/50 hover:bg-navy/70 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-colors"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="w-10 h-10 bg-navy/50 hover:bg-navy/70 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-colors"
        >
          {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}