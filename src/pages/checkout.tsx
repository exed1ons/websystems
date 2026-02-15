import React from 'react';
import { Room, FormData, ViewState } from '../types';
import Button from '../components/button';
import InputField from '../components/input-field';

interface CheckoutProps {
    selectedRoom: Room | null;
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    errors: Partial<Record<keyof FormData, string>>;
    handleBookingConfirm: () => void;
    setView: (view: ViewState) => void;
}

const Checkout: React.FC<CheckoutProps> = ({
    selectedRoom,
    formData,
    setFormData,
    errors,
    handleBookingConfirm,
    setView
}) => {
    return (
        <div className="w-1/2 mx-auto px-6 py-12 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-semibold uppercase text-gray-900 mb-8">Checkout</h2>

                    <div className="space-y-4">
                        <InputField
                            label="First Name"
                            value={formData.firstName}
                            error={errors.firstName}
                            onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                        />
                        <InputField
                            label="Last Name"
                            value={formData.lastName}
                            onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                        />
                        <InputField
                            label="Email"
                            type="email"
                            value={formData.email}
                            error={errors.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                        <InputField
                            label="Phone Number"
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>

                    <div className="mt-8">
                        <Button onClick={handleBookingConfirm} variant="primary" className="w-full py-3">
                            BOOK
                        </Button>
                    </div>
                </div>

                {/* Right Sidebar Summary */}
                <div className="bg-gray-50 border border-gray-300 rounded p-6 h-fit">
                    <h3 className="font-semibold uppercase text-gray-900 mb-6 text-sm">Order Summary</h3>
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-600">1x {selectedRoom?.name}</span>
                            <span className="font-medium">${selectedRoom?.price}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>2 nights</span>
                            <span className="font-medium">${(selectedRoom?.price || 0) * 2}</span>
                        </div>
                        <div className="pt-3 border-t border-gray-300 flex justify-between font-semibold">
                            <span>TOTAL</span>
                            <span>${(selectedRoom?.price || 0) * 2}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;