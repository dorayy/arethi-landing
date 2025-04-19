import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { journalEntries } from '../../data/journalEntries';
import { JournalEntry } from '../../types/journal';

const JournalList: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center text-terracotta hover:text-terracotta/80 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-green-900 mb-4">All Journal Entries</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our complete collection of articles about South Asian art and culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journalEntries.map((entry: JournalEntry) => (
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
      </div>
    </section>
  );
};

export default JournalList; 