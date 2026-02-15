import React from 'react';
import { ViewState } from '../types';

interface NavigationProps {
    setView: (view: ViewState) => void;
}

const Navigation: React.FC<NavigationProps> = ({ setView }) => {
    return (
        <nav className="bg-white border-b border-gray-900 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
                <button onClick={() => setView('home')} className="font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                    BLOOM HOTEL
                </button>

                <div className="flex items-center space-x-6 text-sm text-gray-900">
                    <button onClick={() => setView('search')} className="hover:text-blue-600 transition-colors">ROOMS</button>
                    <button className="hover:text-blue-600 transition-colors">DINING</button>
                    <button onClick={() => setView('login')} className="hover:text-blue-600 transition-colors">SIGN IN</button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;