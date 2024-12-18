import { motion } from 'framer-motion';
import CattleCard from './cards/CattleCard';
import { Link } from 'react-router-dom';
import { cattleData } from '../data/cattle';

export default function Featured() {
  // Get first 6 featured cattle
  const featuredCattle = cattleData.filter(cattle => cattle.featured).slice(0, 6);

  return (
    <section id="featured" className="relative py-12 sm:py-16 bg-gray-50">
      <div className="relative container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm sm:text-base font-semibold leading-7 text-primary-600">Featured Cattle</h2>
          <p className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Our Premium Selection
          </p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            Explore our handpicked selection of premium cattle, each certified for quality and health.
          </p>
        </motion.div>

        {/* Cattle Grid - Changed to show 6 cards in 3x2 grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredCattle.map((cattle) => (
            <CattleCard
              key={cattle.id}
              {...cattle}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/cattle"
            className="inline-flex items-center justify-center rounded-full bg-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-primary-600 shadow-sm ring-1 ring-inset ring-primary-600/10 hover:bg-primary-50 transition-colors duration-200"
          >
            View All Cattle
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 