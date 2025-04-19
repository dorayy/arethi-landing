import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link } from './Link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="font-serif text-xl md:text-2xl font-bold text-green-900">
              ARETHI
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="/"
                className="font-medium text-gray-700 hover:text-terracotta transition-colors"
              >
                Home
              </Link>
              <Link
                href="/portfolio"
                className="font-medium text-gray-700 hover:text-terracotta transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="font-medium text-gray-700 hover:text-terracotta transition-colors"
              >
                About
              </Link>
              <Link
                href="/journal"
                className="font-medium text-gray-700 hover:text-terracotta transition-colors"
              >
                Journal
              </Link>
              <Link
                href="/contact"
                className="font-medium text-gray-700 hover:text-terracotta transition-colors"
              >
                Contact
              </Link>
              {/* <Link
                href="/store"
                className="font-medium text-gray-700 hover:text-terracotta flex items-center transition-colors"
              >
                <span className="mr-1">Store</span>
                <ShoppingBag size={16} />
              </Link> */}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-terracotta focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <Link
            href="/"
            className="block px-3 py-2 text-gray-700 hover:text-terracotta transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className="block px-3 py-2 text-gray-700 hover:text-terracotta transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 text-gray-700 hover:text-terracotta transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/journal"
            className="block px-3 py-2 text-gray-700 hover:text-terracotta transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Journal
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 text-gray-700 hover:text-terracotta transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/store"
            className="block px-3 py-2 text-gray-700 hover:text-terracotta flex items-center transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <span className="mr-1">Store</span>
            <ShoppingBag size={16} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;