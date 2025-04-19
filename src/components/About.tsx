import React from 'react';
import { Instagram, Youtube as YouTubeIcon, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <div className="relative">
              <div className="absolute inset-0 -left-5 -top-5"></div>
              <img
                src="/arethu.jpeg"
                alt="Portrait of the Artist"
                className="w-full h-auto relative z-10 grayscale"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-6">About the Artist</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              I was born in France and grew up between Europe and South Asia, which gave me a unique perspective on the world around me. 
              I’ve always been drawn to the everyday people who keep our communities going – the chai vendors, rickshaw drivers, balloon sellers – the ones whose stories often go untold.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              I studied fine arts and, over time, started developing my own style. 
              It blends traditional South Asian elements with a more modern, digital approach. 
              That mix really lets me explore both cultural roots and current stories in a way that feels true to me.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              Through my art, I try to highlight the beauty and strength in ordinary moments. 
              It’s about showing the dignity in everyday work, and the little connections that remind us how human we all are.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/art__ethi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-terracotta hover:bg-terracotta/90 text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCRahHvWMIUXeYIX0kVcUuAw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-terracotta hover:bg-terracotta/90 text-white flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <YouTubeIcon size={18} />
              </a>
              <a 
                href="mailto:arethibala@gmail.com" 
                className="w-10 h-10 rounded-full bg-terracotta hover:bg-terracotta/90 text-white flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;