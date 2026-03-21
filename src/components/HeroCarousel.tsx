import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX, Pause, Play, ArrowRight } from 'lucide-react';
import pharmacistImage from 'figma:asset/3cd1ef3764761daafd731eb97df09a022f16574f.png';
import surgicalTeamImage from 'figma:asset/9ec4bd36ec6bfe56d1fba52edb07a30df90fed32.png';
import vaccineImage from 'figma:asset/09eb4d61f652287cad3af6490a7fdfced087a8a2.png';

interface Slide {
  image: string;
  headline: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    image: pharmacistImage,
    headline: 'Healthcare That Reaches.',
    subtitle: 'Delivering quality medicines and sustainable health systems across Africa.',
  },
  {
    image: surgicalTeamImage,
    headline: 'Building Healthier Communities.',
    subtitle: 'Equipping healthcare professionals with the tools to transform outcomes.',
  },
  {
    image: vaccineImage,
    headline: 'Bridging the Access Gap.',
    subtitle: 'From last-mile delivery to digital health, we connect people to care.',
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
            <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/55 to-navy/20" />
          </motion.div>
        ))}
      </div>

      {/* Content - Animated per slide */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center z-10">
        <div className="max-w-2xl">
          {/* Green accent bar */}
          <motion.div
            key={`bar-${currentSlide}`}
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 bg-green mb-6"
          />

          <motion.h1
            key={`h1-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-4 leading-tight"
          >
            {slides[currentSlide].headline}
          </motion.h1>

          <motion.p
            key={`p-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl"
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex gap-4"
          >
            <motion.a
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3 bg-orange hover:bg-orange-dark text-white rounded-md font-heading font-semibold transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover Pacem Health
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="/solutions/pharmaceutical-supplies"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white/80 text-white rounded-md font-heading font-semibold hover:bg-white hover:text-navy transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Solutions
            </motion.a>
          </motion.div>
        </div>
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
              index === currentSlide ? 'w-8 bg-green' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
