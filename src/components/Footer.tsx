import React from 'react';
import { Instagram, Mail, Youtube as YouTubeIcon } from 'lucide-react';
import { Link } from './Link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">ARETHI</h3>
            <p className="text-gray-300 mb-6">
              Celebrating the beauty and dignity of everyday life in South Asia through 
              expressive illustrations that tell powerful stories.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/art__ethi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-mustard transition-colors"
                aria-label="Follow on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCRahHvWMIUXeYIX0kVcUuAw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-mustard transition-colors"
                aria-label="Subscribe on YouTube"
              >
                <YouTubeIcon size={20} />
              </a>
              <a 
                href="mailto:contact@arethi.com" 
                className="text-white hover:text-mustard transition-colors"
                aria-label="Email us"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-300 hover:text-mustard transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="#portfolio" 
                  className="text-gray-300 hover:text-mustard transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  href="#about" 
                  className="text-gray-300 hover:text-mustard transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/journal/all" 
                  className="text-gray-300 hover:text-mustard transition-colors"
                >
                  Journal
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="text-gray-300 hover:text-mustard transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to receive updates on new artwork, exhibitions, and special offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-mustard hover:bg-mustard/90 text-green-900 px-4 py-2 rounded-r-md font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} ARETHI Art. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;