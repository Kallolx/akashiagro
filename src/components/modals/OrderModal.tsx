import { Fragment, useState } from 'react';
import { Dialog, Transition, RadioGroup } from '@headlessui/react';
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/outline';

const paymentMethods = [
  {
    id: 'bkash',
    name: 'bKash',
    logo: '/images/bkash-logo.svg',
    number: '01757320452',
    color: 'bg-pink-50 text-pink-700 ring-pink-600/20',
  },
  {
    id: 'nagad',
    name: 'Nagad',
    logo: '/images/nagad-logo.svg',
    number: '01757320452',
    color: 'bg-orange-50 text-orange-700 ring-orange-600/20',
  },
];

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  breed: string;
  price: string;
}

export default function OrderModal({ isOpen, onClose, breed, price }: OrderModalProps) {
  const [selectedPayment, setSelectedPayment] = useState(paymentMethods[0]);
  const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>('details');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    transactionId: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'details') {
      setStep('payment');
    } else if (step === 'payment') {
      setStep('confirmation');
    }
  };

  const renderStepIndicator = () => (
    <div className="mb-6 sm:mb-8">
      <div className="relative">
        <div className="absolute left-0 top-2 h-0.5 w-full bg-gray-200">
          <div
            className="absolute h-full bg-primary-600 transition-all duration-500"
            style={{
              width: step === 'details' ? '33%' : step === 'payment' ? '66%' : '100%',
            }}
          />
        </div>
        <div className="relative flex justify-between">
          {['Details', 'Payment', 'Confirmation'].map((label, idx) => {
            const isCompleted = (step === 'payment' && idx === 0) ||
                              (step === 'confirmation' && idx <= 1);
            const isCurrent = (step === 'details' && idx === 0) ||
                            (step === 'payment' && idx === 1) ||
                            (step === 'confirmation' && idx === 2);
            
            return (
              <div key={label} className="flex flex-col items-center">
                <div
                  className={`h-3 w-3 sm:h-4 sm:w-4 rounded-full ${
                    isCompleted || isCurrent
                      ? 'bg-primary-600'
                      : 'bg-gray-200'
                  } transition-colors duration-200`}
                />
                <span className={`mt-2 text-[10px] sm:text-xs ${
                  isCurrent ? 'font-medium text-primary-600' : 'text-gray-500'
                }`}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderStep = () => {
    switch (step) {
      case 'details':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="rounded-lg bg-primary-50/50 p-3 sm:p-4 mb-6">
              <h4 className="text-sm sm:text-base font-medium text-primary-900">Order Summary</h4>
              <div className="mt-2 space-y-1">
                <p className="text-xs sm:text-sm text-gray-600">Cattle: <span className="font-medium text-gray-900">{breed}</span></p>
                <p className="text-xs sm:text-sm text-gray-600">Price: <span className="font-medium text-gray-900">{price}</span></p>
                <p className="text-xs sm:text-sm text-gray-600">Advance: <span className="font-medium text-gray-900">৳1,000</span></p>
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-sm"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-sm"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            
            <div>
              <label htmlFor="address" className="block text-xs sm:text-sm font-medium text-gray-700">
                Delivery Address
              </label>
              <textarea
                id="address"
                required
                rows={3}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-sm"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>
            
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-primary-600 px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-primary-500"
            >
              Continue to Payment
            </button>
          </form>
        );

      case 'payment':
        return (
          <div className="space-y-6">
            <RadioGroup value={selectedPayment} onChange={setSelectedPayment}>
              <RadioGroup.Label className="text-sm sm:text-base font-semibold text-gray-900">
                Select Payment Method
              </RadioGroup.Label>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {paymentMethods.map((method) => (
                  <RadioGroup.Option
                    key={method.id}
                    value={method}
                    className={({ checked }) =>
                      `${
                        checked ? 'border-primary-600 ring-2 ring-primary-600' : 'border-gray-300'
                      } relative flex cursor-pointer rounded-lg border p-3 sm:p-4 focus:outline-none transition-all duration-200 hover:border-primary-500`
                    }
                  >
                    {({ checked }) => (
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium ${
                                checked ? 'text-primary-900' : 'text-gray-900'
                              }`}
                            >
                              {method.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${method.color} mt-1`}
                            >
                              {method.number}
                            </RadioGroup.Description>
                          </div>
                        </div>
                        {checked && (
                          <div className="shrink-0 text-primary-600">
                            <CheckIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                          </div>
                        )}
                      </div>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>

            <div className="rounded-lg bg-gray-50 p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-gray-600">
                Please send ৳1000 to <span className="font-medium text-gray-900">{selectedPayment.number}</span> and enter the Transaction ID below
              </p>
              <input
                type="text"
                required
                placeholder="Enter Transaction ID"
                className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-sm"
                value={formData.transactionId}
                onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full rounded-full bg-primary-600 px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-primary-500"
            >
              Confirm Order
            </button>
          </div>
        );

      case 'confirmation':
        return (
          <div className="text-center">
            <div className="mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-green-100">
              <CheckIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
            </div>
            <h3 className="mt-4 text-base sm:text-lg font-medium text-gray-900">Order Confirmed!</h3>
            <p className="mt-2 text-xs sm:text-sm text-gray-600">
              Thank you for your order. We will contact you shortly to confirm the delivery details.
              If you have any questions, please contact us at aakashi1963@gmail.com
            </p>
            <button
              onClick={onClose}
              className="mt-6 w-full rounded-full bg-primary-600 px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-primary-500"
            >
              Close
            </button>
          </div>
        );
    }
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog 
        as="div" 
        className="relative z-50" 
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white w-full max-w-lg p-4 sm:p-6 text-left shadow-xl transition-all">
                <div className="absolute right-0 top-0 pr-3 pt-3 sm:pr-4 sm:pt-4">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                </div>
                
                <div>
                  <Dialog.Title as="h3" className="text-base sm:text-lg font-semibold leading-6 text-gray-900">
                    Order {breed}
                  </Dialog.Title>
                  <div className="mt-4 sm:mt-6">
                    {renderStepIndicator()}
                    {renderStep()}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
} 