import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { journalEntries } from '../../data/journalEntries';
import { JournalEntry } from '../../types/journal';

const Journal: React.FC = () => {
  // Show only the first 3 articles
  const displayedEntries = journalEntries.slice(0, 3);

  return (
    <section id="journal" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-4">Journal</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stories behind the artwork, creative processes, and inspirations from everyday South Asian life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedEntries.map((entry: JournalEntry) => (
            <Link
              key={entry.id}
              to={`/journal/${entry.id}`}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={entry.image}
                  alt={entry.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-mustard text-green-900 text-sm font-medium px-3 py-1 rounded-full">
                  {entry.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <span>{entry.date}</span>
                  <span>•</span>
                  <span>{entry.readTime}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-green-900 mb-3 group-hover:text-terracotta transition-colors">
                  {entry.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{entry.excerpt}</p>
                <div className="flex items-center text-terracotta group-hover:text-terracotta/80 font-medium transition-colors">
                  <span>Read more</span>
                  <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/journal/all"
            className="inline-block px-6 py-3 border-2 border-terracotta text-terracotta font-medium rounded-md hover:bg-terracotta hover:text-white transition-colors"
          >
            View All Journal Entries
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Journal; 