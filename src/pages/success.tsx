import React from 'react';
import { ViewState } from '../types';
import Button from '../components/button';

interface SuccessProps {
    setView: (view: ViewState) => void;
}

const Success: React.FC<SuccessProps> = ({ setView }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 animate-in fade-in duration-500">
            <div className="max-w-md text-center">
                <h2 className="text-3xl font-semibold uppercase text-gray-900 mb-4">
                    Booking Confirmed
                </h2>

                <p className="text-gray-600 mb-8">
                    Your reservation has been confirmed. A confirmation email has been sent to you.
                </p>

                <Button
                    onClick={() => setView('home')}
                    variant="primary"
                    className="px-8 py-2"
                >
                    Return Home
                </Button>
            </div>
        </div>
    );
};

export default Success;