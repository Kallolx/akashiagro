import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ScaleIcon, 
  ClockIcon, 
  TagIcon, 
  BeakerIcon,
  TruckIcon,
  ShieldCheckIcon,
  CurrencyBangladeshiIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';
import OrderModal from '../modals/OrderModal';
import { cattleData } from '../Featured'; // Import the cattle data

// Image gallery component
function ImageGallery({ images }: { images: string[] }) {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <Tab.List className="mt-4 grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Tab
            key={index}
            className="relative flex aspect-[3/2] cursor-pointer items-center justify-center rounded-md bg-white"
          >
            {({ selected }) => (
              <>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <img src={image} alt="" className="h-full w-full object-cover object-center" />
                </span>
                <span
                  className={`absolute inset-0 rounded-md ring-2 ring-offset-2 ${
                    selected ? 'ring-primary-500' : 'ring-transparent'
                  }`}
                />
              </>
            )}
          </Tab>
        ))}
      </Tab.List>
      
      <Tab.Panels className="aspect-[16/9] w-full">
        {images.map((image, index) => (
          <Tab.Panel key={index}>
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="h-full w-full object-cover object-center rounded-lg"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

// Specifications component
function Specifications({ specs }: { specs: Record<string, string> }) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-medium text-gray-900">Specifications</h3>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {Object.entries(specs).map(([key, value]) => (
          <div key={key} className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
            <div className="flex-shrink-0">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-50">
                {key === 'Weight' && <ScaleIcon className="h-5 w-5 text-primary-600" />}
                {key === 'Age' && <ClockIcon className="h-5 w-5 text-primary-600" />}
                {key === 'Type' && <TagIcon className="h-5 w-5 text-primary-600" />}
                {key === 'Health' && <BeakerIcon className="h-5 w-5 text-primary-600" />}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{key}</p>
              <p className="mt-1 text-base font-medium text-gray-900">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CattleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [cattle, setCattle] = useState<any>(null);
  
  useEffect(() => {
    // Find the cattle by id from the cattleData array
    const found = cattleData.find(c => c.id === id);
    if (!found) {
      navigate('/');
      return;
    }
    setCattle(found);
  }, [id, navigate]);

  if (!cattle) return null;

  return (
    <div className="bg-white pt-16"> {/* Added pt-16 to prevent navbar overlap */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate('/')}
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to Featured Cattle
        </motion.button>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Image gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-24" // Make image section sticky
          >
            <div className="overflow-hidden rounded-2xl bg-gray-50 p-2">
              <ImageGallery images={[cattle.image, cattle.image]} />
            </div>
          </motion.div>

          {/* Product info */}
          <motion.div
            className="mt-10 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="lg:sticky lg:top-24"> {/* Sticky container for details */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900">{cattle.breed}</h1>
                  <div className="mt-3">
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                      cattle.isAvailable 
                        ? 'bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20'
                        : 'bg-gray-50 text-gray-600 ring-1 ring-inset ring-gray-500/20'
                    }`}>
                      {cattle.isAvailable ? 'Available' : 'Sold'}
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline">
                  <p className="text-4xl font-bold tracking-tight text-gray-900">{cattle.price}</p>
                  <p className="ml-3 text-sm text-gray-500">Negotiable</p>
                </div>

                {/* Quick Info Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-primary-50/50 p-4">
                    <div className="flex items-center gap-3">
                      <ScaleIcon className="h-6 w-6 text-primary-600" />
                      <div>
                        <p className="text-sm font-medium text-primary-900">Weight</p>
                        <p className="text-2xl font-semibold text-primary-700">{cattle.weight}</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-primary-50/50 p-4">
                    <div className="flex items-center gap-3">
                      <ClockIcon className="h-6 w-6 text-primary-600" />
                      <div>
                        <p className="text-sm font-medium text-primary-900">Age</p>
                        <p className="text-2xl font-semibold text-primary-700">{cattle.age}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="rounded-xl bg-gray-50 p-6">
                  <h3 className="text-sm font-medium text-gray-900">Included with Purchase</h3>
                  <div className="mt-4 space-y-3">
                    {[
                      { name: 'Free Delivery within Dhaka Division', icon: TruckIcon },
                      { name: 'Health Certificate & Documentation', icon: ShieldCheckIcon },
                      { name: '৳1000 Advance Payment Required', icon: CurrencyBangladeshiIcon },
                    ].map((feature) => (
                      <div key={feature.name} className="flex items-center">
                        <feature.icon className="h-5 w-5 text-primary-500" />
                        <span className="ml-3 text-sm text-gray-700">{feature.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <Specifications 
                  specs={{
                    Weight: cattle.weight,
                    Age: cattle.age,
                    Type: cattle.type,
                    Health: 'Certified',
                  }} 
                />

                {/* Order button */}
                <div className="mt-8 flex flex-col gap-4">
                  <button
                    onClick={() => setIsOrderModalOpen(true)}
                    className="w-full rounded-full bg-primary-600 px-4 py-4 text-base font-semibold text-white shadow-lg hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors duration-200"
                  >
                    Order Now (৳1000 Advance)
                  </button>
                  <a
                    href={`tel:+8801757320452`}
                    className="w-full rounded-full bg-green-600 px-4 py-4 text-base font-semibold text-white shadow-lg hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-colors duration-200 text-center"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        cattleId={cattle.id}
        breed={cattle.breed}
        price={cattle.price}
      />
    </div>
  );
} 