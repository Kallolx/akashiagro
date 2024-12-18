import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
} from '@heroicons/react/24/outline';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Featured', href: '#featured' },
  { name: 'Testimonials', href: '#testimonials' },
];

const contactInfo = [
  {
    icon: PhoneIcon,
    label: 'Call Us',
    value: '+8801757320452',
    href: 'tel:+8801757320452'
  },
  {
    icon: EnvelopeIcon,
    label: 'Email',
    value: 'aakashi1963@gmail.com',
    href: 'mailto:aakashi1963@gmail.com'
  },
  {
    icon: MapPinIcon,
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    href: 'https://maps.google.com'
  }
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/images/logo.png" 
              alt="Akashi Agro" 
              className="h-12 sm:h-16 w-auto"
            />
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Akashi Agro</h3>
              <p className="text-sm text-gray-600 mt-1">
                Your trusted partner in cattle trading. We provide premium quality cattle with complete documentation and support.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <item.icon className="h-4 w-4 text-gray-400 group-hover:text-primary-600" />
                    <span>{item.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Stay Updated</h3>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                placeholder="Enter your email"
              />
              <div className="mt-3 sm:ml-3 sm:mt-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="mt-3 text-xs text-gray-500">
              Get updates about new cattle and special offers.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Akashi Agro LTD. All rights reserved.
            </p>
            
            {/* Facebook Link */}
            <a
              href="https://www.facebook.com/@AkashiAgro"
              className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 