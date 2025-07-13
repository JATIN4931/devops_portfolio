'use client';

import { useState } from 'react';

interface NavigationProps {
  onBackToLandingAction: () => void;
}

export default function Navigation({ onBackToLandingAction }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'home', href: '#home' },
    { name: 'about', href: '#about' },
    // { name: 'stats', href: '#stats' },
    { name: 'skills', href: '#skills' },
    { name: 'projects', href: '#projects' },
    { name: 'blog', href: '#blog' },
    // { name: 'certificates', href: '#certificates' },
    { name: 'contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-lg ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand - Left */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-red-500">Jatin Kumar</span>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 capitalize"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Back to Landing Button - Right */}
          <div className="hidden md:flex">
            <button
              onClick={onBackToLandingAction}
              className="text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Back to Landing
            </button>
          </div>

          {/* Mobile menu button - Right */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-orange-400 p-2 rounded-md"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-orange-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 capitalize w-full text-left"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={onBackToLandingAction}
                className="text-gray-300 hover:text-orange-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full text-left"
              >
                Back to Landing
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 