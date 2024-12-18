import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedMethod: 'bkash' | 'nagad' | null;
  onSelectMethod: (method: 'bkash' | 'nagad') => void;
  onConfirm: (transactionId: string) => void;
}

export default function PaymentModal({ 
  isOpen, 
  onClose, 
  selectedMethod, 
  onSelectMethod,
  onConfirm
}: PaymentModalProps) {
  const [transactionId, setTransactionId] = useState('');

  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <Dialog.Title className="text-lg font-semibold text-gray-900">
              Payment Method
            </Dialog.Title>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Payment Methods */}
            {!selectedMethod ? (
              <div className="grid grid-cols-2 gap-4">
                {[
                  { id: 'bkash', logo: '/images/bkash-logo.svg' },
                  { id: 'nagad', logo: '/images/nagad-logo.svg' }
                ].map((method) => (
                  <button
                    key={method.id}
                    onClick={() => onSelectMethod(method.id as 'bkash' | 'nagad')}
                    className="p-6 rounded-xl border-2 border-gray-200 hover:border-primary-200 transition-colors"
                  >
                    <img
                      src={method.logo}
                      alt={method.id}
                      className="h-12 w-auto mx-auto"
                    />
                  </button>
                ))}
              </div>
            ) : (
              <>
                {/* Selected Payment Method Details */}
                <div className="flex justify-center">
                  <img
                    src={`/images/${selectedMethod}-logo.svg`}
                    alt={selectedMethod}
                    className="h-16"
                  />
                </div>

                <div className="bg-gray-50 rounded-xl p-4 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Number</span>
                      <span className="font-medium text-gray-900">01757320452</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Amount</span>
                      <span className="font-medium text-gray-900">৳1,000</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <p className="font-medium text-gray-900">Steps:</p>
                    <ol className="list-decimal list-inside space-y-1 text-gray-600">
                      <li>Send ৳1,000 to the number above</li>
                      <li>Enter the transaction ID below</li>
                      <li>Click confirm to complete your order</li>
                    </ol>
                  </div>
                </div>

                {/* Transaction ID Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Transaction ID
                  </label>
                  <input
                    type="text"
                    required
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    className="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Enter your transaction ID"
                  />
                </div>

                <button
                  onClick={() => onConfirm(transactionId)}
                  disabled={!transactionId}
                  className="w-full px-6 py-3 rounded-full bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirm Order
                </button>
              </>
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
} 