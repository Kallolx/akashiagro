import { motion } from 'framer-motion';
import { ScaleIcon, ClockIcon, TagIcon, BeakerIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

interface CattleCardProps {
  id: string;
  image: string;
  breed: string;
  weight: string;
  age: string;
  price: string;
  type: string;
  isAvailable?: boolean;
}

export default function CattleCard({ 
  id, 
  image, 
  breed, 
  weight, 
  age, 
  price, 
  type,
  isAvailable = true 
}: CattleCardProps) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/cattle/${id}`);
  };

  return (
    <motion.div
      className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Image Container */}
      <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={`${breed} cattle`}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{breed}</h3>
          {isAvailable ? (
            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              Available
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/20">
              Sold
            </span>
          )}
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <ScaleIcon className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500">Weight</p>
              <p className="text-sm font-medium text-gray-900">{weight}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ClockIcon className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500">Age</p>
              <p className="text-sm font-medium text-gray-900">{age}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <TagIcon className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500">Type</p>
              <p className="text-sm font-medium text-gray-900">{type}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <BeakerIcon className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500">Health</p>
              <p className="text-sm font-medium text-green-600">Certified</p>
            </div>
          </div>
        </div>

        {/* Price and Action */}
        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Price</p>
            <p className="text-lg font-semibold text-gray-900">{price}</p>
          </div>
          <button 
            onClick={handleViewDetails}
            className="inline-flex items-center justify-center rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 transition-colors duration-200"
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
} 