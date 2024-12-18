import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cattleData } from '../data/cattle';
import type { Cattle, CattleType, CattleBreed } from '../types/cattle';
import { 
  AdjustmentsHorizontalIcon, 
  XMarkIcon,
  ArrowPathIcon,
  MapPinIcon,
  ScaleIcon,
  CalendarIcon,
  BanknotesIcon,
  TagIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

interface FilterState {
  type: CattleType | 'all';
  breed: CattleBreed | 'all';
  minAge: number;
  maxAge: number;
  minWeight: number;
  maxWeight: number;
  minPrice: number;
  maxPrice: number;
}

export default function CattleListing() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<FilterState>({
    type: 'all',
    breed: 'all',
    minAge: 0,
    maxAge: 100,
    minWeight: 0,
    maxWeight: 1000,
    minPrice: 0,
    maxPrice: 1000000,
  });

  const [showFilters, setShowFilters] = useState(false);

  const filteredCattle = useMemo(() => {
    return cattleData.filter(cattle => {
      return (
        (filters.type === 'all' || cattle.type === filters.type) &&
        (filters.breed === 'all' || cattle.breed === filters.breed) &&
        cattle.age >= filters.minAge &&
        cattle.age <= filters.maxAge &&
        cattle.weight >= filters.minWeight &&
        cattle.weight <= filters.maxWeight &&
        cattle.price >= filters.minPrice &&
        cattle.price <= filters.maxPrice
      );
    });
  }, [filters]);

  const resetFilters = () => {
    setFilters({
      type: 'all',
      breed: 'all',
      minAge: 0,
      maxAge: 100,
      minWeight: 0,
      maxWeight: 1000,
      minPrice: 0,
      maxPrice: 1000000,
    });
  };

  const handleNavigation = (href: string) => {
    setShowFilters(false); // Close filters if open
    if (href.startsWith('#')) {
      // For hash links (sections on home page), navigate to home first
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // For direct routes
      navigate(href);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-primary-600 font-medium mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Collection
          </motion.h2>
          <motion.h1 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Premium Cattle Selection
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Browse through our extensive collection of premium cattle. Use filters to find the perfect match for your needs.
          </motion.p>
        </div>

        {/* Filter Controls */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-8 overflow-hidden">
          <div className="p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors"
              >
                {showFilters ? <XMarkIcon className="w-5 h-5" /> : <AdjustmentsHorizontalIcon className="w-5 h-5" />}
                <span className="font-medium">{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
              </button>
              
              {/* Active Filters Summary */}
              <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
                <span>Active filters:</span>
                <div className="flex items-center gap-2">
                  {filters.type !== 'all' && (
                    <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                      {filters.type}
                    </span>
                  )}
                  {filters.breed !== 'all' && (
                    <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                      {filters.breed}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700"
            >
              <ArrowPathIcon className="w-4 h-4" />
              Reset Filters
            </button>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-gray-100"
              >
                <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Type Filter */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <TagIcon className="w-4 h-4 text-gray-400" />
                      Type
                    </label>
                    <select
                      value={filters.type}
                      onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value as CattleType | 'all' }))}
                      className="w-full rounded-lg border-gray-200 focus:border-primary-500 focus:ring-primary-500"
                    >
                      <option value="all">All Types</option>
                      <option value="Bull">Bull</option>
                      <option value="Cow">Cow</option>
                      <option value="Calf">Calf</option>
                    </select>
                  </div>

                  {/* Breed Filter */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <TagIcon className="w-4 h-4 text-gray-400" />
                      Breed
                    </label>
                    <select
                      value={filters.breed}
                      onChange={(e) => setFilters(prev => ({ ...prev, breed: e.target.value as CattleBreed | 'all' }))}
                      className="w-full rounded-lg border-gray-200 focus:border-primary-500 focus:ring-primary-500"
                    >
                      <option value="all">All Breeds</option>
                      <option value="Brahman">Brahman</option>
                      <option value="Sahiwal">Sahiwal</option>
                      <option value="Holstein Friesian">Holstein Friesian</option>
                      <option value="Indigenous">Indigenous</option>
                    </select>
                  </div>

                  {/* Range Filters */}
                  {[
                    { 
                      label: 'Age', 
                      icon: CalendarIcon,
                      unit: 'months',
                      min: 'minAge', 
                      max: 'maxAge', 
                      step: 1, 
                      range: [0, 100] 
                    },
                    { 
                      label: 'Weight', 
                      icon: ScaleIcon,
                      unit: 'KG',
                      min: 'minWeight', 
                      max: 'maxWeight', 
                      step: 50, 
                      range: [0, 1000] 
                    },
                    { 
                      label: 'Price', 
                      icon: BanknotesIcon,
                      unit: 'BDT',
                      min: 'minPrice', 
                      max: 'maxPrice', 
                      step: 10000, 
                      range: [0, 1000000] 
                    },
                  ].map((filter) => (
                    <div key={filter.label} className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <filter.icon className="w-4 h-4 text-gray-400" />
                        {filter.label}
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <input
                            type="number"
                            value={filters[filter.min as keyof FilterState]}
                            onChange={(e) => setFilters(prev => ({ ...prev, [filter.min]: Number(e.target.value) }))}
                            min={filter.range[0]}
                            max={filter.range[1]}
                            step={filter.step}
                            className="w-full rounded-lg border-gray-200 focus:border-primary-500 focus:ring-primary-500"
                            placeholder={`Min ${filter.label}`}
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            value={filters[filter.max as keyof FilterState]}
                            onChange={(e) => setFilters(prev => ({ ...prev, [filter.max]: Number(e.target.value) }))}
                            min={filter.range[0]}
                            max={filter.range[1]}
                            step={filter.step}
                            className="w-full rounded-lg border-gray-200 focus:border-primary-500 focus:ring-primary-500"
                            placeholder={`Max ${filter.label}`}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">
            Showing <span className="font-medium text-gray-900">{filteredCattle.length}</span> cattle
          </p>
          <div className="text-sm text-gray-500">
            Sort by: <span className="font-medium text-gray-900">Featured</span>
          </div>
        </div>

        {/* Cattle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCattle.map((cattle, index) => (
            <motion.div
              key={cattle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                {cattle.images.length > 0 ? (
                  <img
                    src={cattle.images[0]}
                    alt={cattle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Image Coming Soon
                  </div>
                )}
                {cattle.featured && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                  <MapPinIcon className="w-3 h-3" />
                  {cattle.location}
                </div>
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