import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { cattleData } from '../data/cattle';
import type { CattleType, CattleBreed } from '../types/cattle';

export default function CattleListing() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<CattleType | 'all'>('all');
  const [selectedBreed, setSelectedBreed] = useState<CattleBreed | 'all'>('all');

  // Filter cattle based on selections
  const filteredCattle = cattleData.filter(cattle => {
    const matchesType = selectedType === 'all' || cattle.type === selectedType;
    const matchesBreed = selectedBreed === 'all' || cattle.breed === selectedBreed;
    return matchesType && matchesBreed;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-16 sm:pt-24 pb-8 sm:pb-16">
      <div className="container-custom px-3 sm:px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Cattle Collection
          </h1>
          <p className="text-lg text-gray-600">
            Browse through our selection of premium quality cattle
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as CattleType | 'all')}
            className="rounded-full px-4 py-2 border-gray-300 focus:border-primary-500 focus:ring-primary-500"
          >
            <option value="all">All Types</option>
            <option value="Bull">Bull</option>
            <option value="Cow">Cow</option>
          </select>

          <select
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value as CattleBreed | 'all')}
            className="rounded-full px-4 py-2 border-gray-300 focus:border-primary-500 focus:ring-primary-500"
          >
            <option value="all">All Breeds</option>
            <option value="Brahman">Brahman</option>
            <option value="Jersey">Jersey</option>
            <option value="Sahiwal">Sahiwal</option>
            <option value="Holstein Friesian">Holstein Friesian</option>
            <option value="Indigenous">Indigenous</option>
          </select>
        </div>

        {/* Cattle Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCattle.map((cattle) => (
            <motion.div
              key={cattle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                <img
                  src={cattle.image}
                  alt={cattle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {cattle.featured && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {cattle.name}
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-gray-500">Type</p>
                    <p className="font-medium text-gray-900">{cattle.type}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Breed</p>
                    <p className="font-medium text-gray-900">{cattle.breed}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Age</p>
                    <p className="font-medium text-gray-900">{cattle.age} months</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Weight</p>
                    <p className="font-medium text-gray-900">{cattle.weight} KG</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-primary-600">
                    ৳{cattle.price.toLocaleString()}
                  </p>
                  <button 
                    onClick={() => navigate(`/cattle/${cattle.id}`)}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors font-medium text-sm"
                  >
                    View Details
                    <ChevronRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 