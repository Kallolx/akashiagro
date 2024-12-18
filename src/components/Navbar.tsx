import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Cattle', href: '/cattle' },
  { name: 'Team', href: '#team' },
  { name: 'Blog', href: '#blog' },
  { name: 'Testimonials', href: '#testimonials' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
      <nav className="relative mx-auto px-3 sm:px-6 lg:px-8">
        {/* Main Navbar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo Section - Adjusted padding */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-2">
              <img
                className="h-8 w-auto"
                src="images/logo.png"
                alt="Akashi Agro"
              />
              <div className="block">
                <p className="text-sm sm:text-base font-bold text-gray-900 leading-tight">Akashi Agro</p>
                <p className="text-xs sm:text-sm text-gray-600 leading-tight">Premium Cattle Trading</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-6 flex-1 justify-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-semibold text-gray-900 hover:text-primary-600 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Contact Button - Desktop - Adjusted padding */}
          <div className="hidden lg:flex lg:items-center flex-shrink-0">
            <a
              href="tel:+8801757320452"
              className="inline-flex items-center justify-center rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 transition-colors duration-200"
            >
              Contact Now
            </a>
          </div>

          {/* Mobile Menu Button - Adjusted */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-primary-600 rounded-md"
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-4 px-3">
                <a
                  href="tel:+8801757320452"
                  className="block w-full text-center px-4 py-2 text-base font-medium text-white bg-primary-600 hover:bg-primary-500 rounded-full"
                >
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 