import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { journalEntries } from '../../data/journalEntries';

const JournalDetail: React.FC = () => {
  const { id } = useParams();
  
  // Find the specific entry based on the ID from URL params
  const entry = journalEntries.find(entry => entry.id === Number(id));

  if (!entry) {
    return <div className="pt-32 text-center">Entry not found</div>;
  }

  return (
    <article className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/journal/all"
          className="inline-flex items-center text-terracotta hover:text-terracotta/80 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Journal
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-mustard/20 text-green-900 rounded-full text-sm font-medium">
              {entry.category}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar size={16} className="mr-1" />
              {entry.date}
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock size={16} className="mr-1" />
              {entry.readTime}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-green-900 mb-6">
            {entry.title}
          </h1>
        </header>

        <img
          src={entry.image}
          alt={entry.title}
          className="w-full h-[400px] object-cover rounded-xl mb-12"
        />

        <div 
          className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-green-900"
          dangerouslySetInnerHTML={{ __html: entry.content }}
        />
      </div>
    </article>
  );
};

export default JournalDetail; 