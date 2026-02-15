import React from 'react';
import { ViewState } from "../../types";

interface HomeProps {
    setView: (view: ViewState) => void;
}

const Home: React.FC<HomeProps> = ({ setView }) => (
    <div className="h-screen bg-blue-700 flex flex-col items-center justify-center px-6 animate-in fade-in duration-500">

        <div className="w-1/2">
            <h1 className="text-5xl font-bold mb-3">Enjoy your time with us!</h1>
            <div className="bg-white border-4 border-yellow-400 rounded flex overflow-hidden shadow-lg">
                <div className="flex-1 flex items-center px-4 py-4 border-r border-gray-300">
                    <span className="text-gray-400 mr-3">📅</span>
                    <input
                        type="date"
                        className="flex-1 text-sm outline-none bg-transparent"
                    />
                    <span className="mx-2 text-gray-400">—</span>
                    <input
                        type="date"
                        className="flex-1 text-sm outline-none bg-transparent"
                    />
                </div>

                <div className="flex-1 flex items-center px-4 py-4 border-r border-gray-300">
                    <span className="text-gray-400 mr-3">👤</span>
                    <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        className="flex-1 text-sm outline-none bg-transparent"
                        placeholder="Guests"
                    />
                </div>

                <div className="flex items-center">
                    <button
                        onClick={() => setView('search')}
                        className="bg-blue-600 text-white px-8 py-4 font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default Home;