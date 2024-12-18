import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, CalendarIcon, EyeIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

// Types for blog content
type BlogPost = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  date: string;
  type: 'video' | 'image';
  videoUrl?: string;
  images?: string[];
  views: number;
  category: 'farm-tour' | 'cattle-showcase' | 'team' | 'services';
};

// Helper function to format numbers to K notation
const formatViews = (views: number): string => {
  if (views >= 1000) {
    return (views / 1000).toFixed(views >= 10000 ? 0 : 1) + 'K';
  }
  return views.toString();
};

// Sample blog data
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "আকাশী এগ্রো লিমিটেডে আপনাদের স্বাগতম। এক নজরে দেখে নিন আমাদের এই প্রোজেক্ট",
    description: "Take a virtual tour of our state-of-the-art facilities where we maintain the highest standards of cattle care and management.",
    thumbnail: "/images/post_1.png",
    date: "March 15, 2024",
    type: "video",
    videoUrl: "https://www.facebook.com/share/v/18LLPnpxLi/",
    views: 10000,
    category: "farm-tour"
  },
  {
    id: '2',
    title: "আপনাদের কুরবানির সর্বোচ্চ মান নিশ্চিত করার মাধ্যমে সামনে এগিয়ে যাওয়াই আমাদের একমাত্র লক্ষ্য",
    description: "Explore our latest collection of premium cattle breeds, featuring detailed health information and specifications.",
    thumbnail: "/images/post_2.png",
    date: "March 10, 2024",
    type: "video",
    videoUrl: "https://www.facebook.com/share/v/18LLPnpxLi/",
    views: 6000,
    category: "cattle-showcase"
  },
  {
    id: '3',
    title: "ঢাকা এবং টাংগাইলে ফ্রী ডেলিভারি আমাদের ফার্মে আসার আমন্ত্রণ রইল",
    description: "Discover our exclusive range of top-quality cattle breeds, complete with comprehensive health details and specifications",
    thumbnail: "/images/post_3.png",
    date: "March 10, 2024",
    type: "video",
    videoUrl: "https://www.facebook.com/share/v/15bD9Gu9hf/",
    views: 2000,
    category: "cattle-showcase"
  },
];

const categories = [
  { id: 'farm-tour', label: 'Farm Tours' },
  { id: 'cattle-showcase', label: 'Cattle Showcase' },
  { id: 'team', label: 'Our Team' },
  { id: 'services', label: 'Services' },
];

// Add a styled title component for Bengali text
const BengaliTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors font-bengali"
      style={{ 
        fontFamily: 'BengaliFont, sans-serif',
        direction: 'ltr',
        unicodeBidi: 'embed'
      }}
  >
    {children}
  </h3>
);

const Blog = () => {
  return (
    <section id="blog" className="py-16 sm:py-24 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Latest Updates
          </h2>
          <p className="text-lg text-gray-600">
            Stay updated with our latest farm activities, cattle collections, and team insights
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 bg-white hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {post.type === 'video' && (
                  <div className="absolute top-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm">
                    <PlayIcon className="w-4 h-4" />
                    <span className="text-xs font-medium">Watch Video</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <CalendarIcon className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <EyeIcon className="w-4 h-4" />
                    {formatViews(post.views)}
                  </span>
                </div>

                <BengaliTitle>{post.title}</BengaliTitle>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.description}
                </p>

                <a
                  href={post.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors duration-200 font-medium text-sm gap-2 mt-2"
                >
                  {post.type === 'video' ? (
                    <>
                      <PlayIcon className="w-4 h-4" />
                      Watch on Facebook
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      View Gallery
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </>
                  )}
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-primary-500 transition-colors duration-200">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog; 