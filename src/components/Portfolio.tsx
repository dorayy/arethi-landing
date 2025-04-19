import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ArtworkProps {
  id: number;
  image: string;
  title: string;
  category: string;
  year: string;
  medium: string;
  description: string;
  dimensions?: string;
}

const artworks: ArtworkProps[] = [
  {
    id: 1,
    image: "/temple-roof.jpeg",
    title: "Temple Gopuram Study",
    category: "Sacred Architecture",
    year: "2023",
    medium: "Digital Illustration",
    description: "A vibrant exploration of South Indian temple architecture, focusing on the intricate details of a gopuram (temple gateway). The piece captures the ornate sculptural elements, depicting deities, celestial beings, and sacred cows in traditional poses. The color palette emphasizes the rich cultural heritage, with soft pinks, teals, and gold leaf accents characteristic of Tamil Nadu temples.",
    dimensions: "24 x 36 inches"
  },
  {
    id: 2,
    image: "/ballon-dude.jpeg",
    title: "Balloon Seller's Journey",
    category: "Urban Vendors",
    year: "2023",
    medium: "Digital Watercolor",
    description: "Part of the 'Urban Heroes' series, this piece captures a balloon seller in his daily routine. The contrast between his simple attire and the vibrant balloons symbolizes joy and hope he brings to city streets. The loose, gestural brushstrokes and transparent colors create a sense of movement and spontaneity.",
    dimensions: "18 x 24 inches"
  },
  {
    id: 3,
    image: "/milkman.jpeg",
    title: "The Doodhwala",
    category: "Traditional Trades",
    year: "2023",
    medium: "Digital Illustration",
    description: "A portrait of a traditional milk delivery man with his bicycle, capturing a profession that's slowly fading from urban India. The composition emphasizes the dignity of labor through careful attention to posture and expression. The neutral palette with pops of green reflects early morning light.",
    dimensions: "16 x 20 inches"
  },
  {
    id: 4,
    image: "/bicycle-dude.jpeg",
    title: "The Cycle Wallah",
    category: "Traditional Trades",
    year: "2023",
    medium: "Digital Illustration",
    description: "A vibrant depiction of a bicycle repairman, showcasing the skill and dedication of traditional craftsmen. The composition highlights the intricate details of his tools and workspace, while the warm color palette evokes the golden hours of the day.",
    dimensions: "20 x 24 inches"
  },
  {
    id: 5,
    image: "/fruit-salewooman.jpeg",
    title: "The Fruit Vendor",
    category: "Urban Vendors",
    year: "2023",
    medium: "Digital Watercolor",
    description: "A celebration of the vibrant fruit markets of South India, featuring a fruit vendor surrounded by colorful produce. The piece captures the energy and warmth of local markets, with careful attention to the textures and colors of various fruits.",
    dimensions: "18 x 24 inches"
  },
  {
    id: 6,
    image: "/cobra-singer.jpeg",
    title: "The Snake Charmer",
    category: "Cultural Heritage",
    year: "2023",
    medium: "Digital Illustration",
    description: "A modern interpretation of the traditional snake charmer, blending cultural heritage with contemporary artistic style. The piece explores the mystique and cultural significance of this ancient profession while maintaining a respectful portrayal.",
    dimensions: "16 x 20 inches"
  }
];

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkProps | null>(null);

  const categories = Array.from(new Set(artworks.map(art => art.category)));
  
  const filteredArtworks = selectedCategory 
    ? artworks.filter(artwork => artwork.category === selectedCategory)
    : artworks;

  return (
    <section id="portfolio" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-4">Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of digital illustrations celebrating South Asian culture, architecture, and daily life.
            Each piece tells a story of tradition, dignity, and the beauty of everyday moments.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === null
                ? 'bg-terracotta text-white shadow-lg scale-105'
                : 'bg-white/80 text-terracotta hover:bg-terracotta/10 hover:scale-105'
            }`}
          >
            All Works
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-terracotta text-white shadow-lg scale-105'
                  : 'bg-white/80 text-terracotta hover:bg-terracotta/10 hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <div 
              key={artwork.id} 
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedArtwork(artwork)}
            >
              <div className="aspect-w-4 aspect-h-5">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <ZoomIn className="absolute top-4 right-4 text-white/80" size={24} />
                  <h3 className="text-white text-xl font-serif font-semibold mb-2">{artwork.title}</h3>
                  <p className="text-white/90 text-sm">{artwork.medium} · {artwork.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Artwork Modal */}
      {selectedArtwork && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedArtwork(null)}
        >
          <div 
            className="max-w-3xl w-full bg-white rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 scale-95 hover:scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors z-10"
                onClick={() => setSelectedArtwork(null)}
              >
                <X size={16} />
              </button>
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-4 md:p-6 bg-white">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-green-900 mb-1">
                    {selectedArtwork.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <span>{selectedArtwork.medium}</span>
                    <span>•</span>
                    <span>{selectedArtwork.year}</span>
                    {selectedArtwork.dimensions && (
                      <>
                        <span>•</span>
                        <span>{selectedArtwork.dimensions}</span>
                      </>
                    )}
                  </div>
                </div>
                <span className="inline-block px-2 py-0.5 bg-mustard/20 text-green-900 rounded-full text-xs font-medium">
                  {selectedArtwork.category}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                {selectedArtwork.description.split('. ').slice(0, 2).join('. ') + '.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;