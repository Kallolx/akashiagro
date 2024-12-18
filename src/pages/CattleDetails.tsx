import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cattleData } from '../data/cattle';
import { 
  ArrowLeftIcon,
  MapPinIcon,
  ScaleIcon,
  CalendarIcon,
  TagIcon,
  XMarkIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import PaymentModal from '../components/PaymentModal';
import OrderForm from '../components/OrderForm';

interface OrderFormData {
  name: string;
  whatsapp: string;
  address: string;
  city: string;
  district: string;
  notes?: string;
}

export default function CattleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const cattle = cattleData.find(c => c.id === id);

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderFormData, setOrderFormData] = useState<OrderFormData | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'bkash' | 'nagad' | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  if (!cattle) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="container-custom text-center">
          <h1 className="text-2xl font-bold text-gray-900">Cattle not found</h1>
          <button
            onClick={() => navigate('/cattle')}
            className="mt-4 inline-flex items-center gap-2 text-primary-600 hover:text-primary-700"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back to Cattle Listing
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16 sm:pt-24 pb-8 sm:pb-16">
      <div className="container-custom px-3 sm:px-4">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="mb-4 sm:mb-6 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Back</span>
        </button>

        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
            {/* Image Section */}
            <div className="relative order-1 md:order-none">
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                <img
                  src={cattle.image}
                  alt={cattle.name}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setIsGalleryOpen(true)}
                />
                {cattle.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full">
                    Featured
                  </div>
                )}
              </div>
            </div>

            {/* Details Section */}
            <div className="p-4 sm:p-6 md:p-8 order-2 md:order-none">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                {cattle.location}
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                {cattle.name}
              </h1>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <TagIcon className="w-4 h-4" />
                    Type
                  </div>
                  <p className="font-medium text-gray-900">{cattle.type}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <TagIcon className="w-4 h-4" />
                    Breed
                  </div>
                  <p className="font-medium text-gray-900">{cattle.breed}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CalendarIcon className="w-4 h-4" />
                    Age
                  </div>
                  <p className="font-medium text-gray-900">{cattle.age} months</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <ScaleIcon className="w-4 h-4" />
                    Weight
                  </div>
                  <p className="font-medium text-gray-900">{cattle.weight} KG</p>
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-gray-100 pt-4 sm:pt-6 mb-6 sm:mb-8">
                <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-4">Description</h2>
                <p className="text-sm sm:text-base text-gray-600">{cattle.description}</p>
              </div>

              {/* Price and Actions */}
              <div className="border-t border-gray-100 pt-4 sm:pt-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Price</p>
                    <p className="text-2xl sm:text-3xl font-bold text-primary-600">
                      ৳{cattle.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <button
                      onClick={() => setShowOrderForm(true)}
                      className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors font-medium text-sm sm:text-base"
                    >
                      Order Now
                    </button>
                    <a
                      href={`https://wa.me/+8801757320452?text=Hi, I'm interested in booking ${cattle.name}. Please guide me through the process.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors font-medium text-sm sm:text-base text-center"
                    >
                      Order via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Cattle Section */}
        <div className="mt-8 sm:mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-8">Similar Cattle</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {cattleData
              .filter(c => c.id !== cattle.id && c.type === cattle.type)
              .slice(0, 3)
              .map((similarCattle) => (
                <motion.div
                  key={similarCattle.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                    <img
                      src={similarCattle.image}
                      alt={similarCattle.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {similarCattle.featured && (
                      <div className="absolute top-3 right-3 px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {similarCattle.name}
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <p className="text-gray-500">Type</p>
                        <p className="font-medium text-gray-900">{similarCattle.type}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Breed</p>
                        <p className="font-medium text-gray-900">{similarCattle.breed}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Age</p>
                        <p className="font-medium text-gray-900">{similarCattle.age} months</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Weight</p>
                        <p className="font-medium text-gray-900">{similarCattle.weight} KG</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-xl font-bold text-primary-600">
                        ৳{similarCattle.price.toLocaleString()}
                      </p>
                      <button 
                        onClick={() => navigate(`/cattle/${similarCattle.id}`)}
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

      {/* Image Gallery Modal */}
      <Dialog 
        open={isGalleryOpen} 
        onClose={() => setIsGalleryOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/90" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative w-full max-w-4xl">
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <div className="relative aspect-[4/3]">
              <img
                src={cattle.image}
                alt={cattle.name}
                className="w-full h-full object-contain"
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      <OrderForm
        isOpen={showOrderForm}
        onClose={() => setShowOrderForm(false)}
        onNext={(formData) => {
          setOrderFormData(formData);
          setShowOrderForm(false);
          setShowPaymentModal(true);
        }}
        cattleImage={cattle.image}
        cattleName={cattle.name}
      />

      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        selectedMethod={selectedPaymentMethod}
        onSelectMethod={setSelectedPaymentMethod}
        formData={orderFormData as OrderFormData}
        onConfirm={() => {
          setShowPaymentModal(false);
          setShowConfirmation(true);
        }}
      />

      {/* Success Modal */}
      <Dialog 
        open={showConfirmation} 
        onClose={() => setShowConfirmation(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon className="w-8 h-8 text-green-600" />
              </div>
              
              <Dialog.Title className="text-lg font-semibold text-gray-900 mb-2">
                Order Confirmed!
              </Dialog.Title>

              <p className="text-sm text-gray-600 mb-6">
                Thank you for your order. Our team will verify your payment and contact you shortly.
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
                <h4 className="font-medium text-gray-900 mb-2">Order Summary</h4>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Cattle:</span> {cattle.name}</p>
                  <p><span className="text-gray-500">Payment Method:</span> {selectedPaymentMethod?.toUpperCase()}</p>
                  <p><span className="text-gray-500">Advance Amount:</span> ৳1,000</p>
                  <p><span className="text-gray-500">Delivery Address:</span> {orderFormData?.address}</p>
                  <p><span className="text-gray-500">Contact:</span> {orderFormData?.whatsapp}</p>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowConfirmation(false);
                  navigate('/cattle');
                }}
                className="w-full px-6 py-3 rounded-full bg-primary-600 text-white hover:bg-primary-700"
              >
                Back to Cattle Listing
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
} 