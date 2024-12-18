import { Dialog } from '@headlessui/react';
import { XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: (formData: OrderFormData) => void;
  cattleImage: string;
  cattleName: string;
}

export interface OrderFormData {
  name: string;
  whatsapp: string;
  address: string;
  city: string;
  district: string;
  notes?: string;
}

export default function OrderForm({ isOpen, onClose, onNext, cattleImage, cattleName }: OrderFormProps) {
  const [formData, setFormData] = useState<OrderFormData>({
    name: '',
    whatsapp: '',
    address: '',
    city: '',
    district: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-xl rounded-2xl bg-white shadow-xl">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Dialog.Title className="text-lg font-semibold text-gray-900">
              Order Details
            </Dialog.Title>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Selected Cattle Preview */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <img
                src={cattleImage}
                alt={cattleName}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-medium text-gray-900">{cattleName}</h3>
                <p className="text-sm text-gray-500">Advance Payment: ৳1,000</p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
                <input
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
                  className="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Enter your WhatsApp number"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                  className="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Enter your full address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                  className="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Enter your city"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
                <input
                  type="text"
                  required
                  value={formData.district}
                  onChange={(e) => setFormData(prev => ({ ...prev, district: e.target.value }))}
                  className="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Enter your district"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes (Optional)</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                  className="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                  rows={3}
                  placeholder="Any special requirements or notes"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors font-medium"
            >
              Proceed to Payment
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
} 