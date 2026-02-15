import React from 'react';
import { ViewState } from "../../types";

interface HomeProps {
    setView: (view: ViewState) => void;
}

const Home: React.FC<HomeProps> = ({ setView }) => (
    <div className="min-h-screen bg-blue-700 flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-0 animate-in fade-in duration-500">
        {/* Heading Section - Responsive Typography */}
        <div className="w-full max-w-2xl mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3">
                Enjoy your time with us!
            </h1>
            <p className="text-sm sm:text-base text-blue-100">
                Find the perfect room for your stay
            </p>
        </div>

        {/* Search Bar - Responsive Flex Layout */}
        <div className="w-full max-w-2xl">
            <div className="bg-white border-4 border-yellow-400 rounded flex flex-col sm:flex-row overflow-hidden shadow-lg">
                {/* Dates Section - Responsive */}
                <div className="flex-1 flex items-center px-3 sm:px-4 py-3 sm:py-4 border-b sm:border-b-0 sm:border-r border-gray-300">
                    <span className="text-gray-400 mr-2 sm:mr-3 text-lg">📅</span>
                    <input
                        type="date"
                        className="flex-1 text-xs sm:text-sm outline-none bg-transparent"
                    />
                    <span className="mx-1 sm:mx-2 text-gray-400">—</span>
                    <input
                        type="date"
                        className="flex-1 text-xs sm:text-sm outline-none bg-transparent"
                    />
                </div>

                {/* Guests Section - Responsive */}
                <div className="flex-1 flex items-center px-3 sm:px-4 py-3 sm:py-4 border-b sm:border-b-0 sm:border-r border-gray-300">
                    <span className="text-gray-400 mr-2 sm:mr-3 text-lg">👤</span>
                    <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        className="flex-1 text-xs sm:text-sm outline-none bg-transparent"
                        placeholder="Guests"
                    />
                </div>

                {/* Search Button - Responsive */}
                <div className="flex items-center">
                    <button
                        onClick={() => setView('search')}
                        className="w-full sm:w-auto bg-blue-600 text-white px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default Home;