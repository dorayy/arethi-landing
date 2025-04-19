import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from './Link';

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/6469342/pexels-photo-6469342.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Bicycle Vendor Series",
    description: "Capturing the essence of street life"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/13090647/pexels-photo-13090647.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Village Chronicles",
    description: "Stories from rural South Asia"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/10421787/pexels-photo-10421787.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Market Memories",
    description: "Vibrant scenes of daily commerce"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden" id="home">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center max-w-3xl mx-auto px-4">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                {slide.description}
              </p>
              <Link
                href="/portfolio"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-900 bg-mustard hover:bg-mustard/90 transition-colors"
              >
                Explore Gallery <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;