import React, { useState } from 'react';
import { Room, FormData, ViewState, SearchFilters, SortOption } from './types';
import Navigation from "./components/navigation";
import Home from "./pages/home/home";
import Search from "./pages/rooms/search";
import Checkout from "./pages/checkout";
import Success from "./pages/success";
import Login from "./pages/login";
import AdminDashboard from './pages/admin/dashboard';

const App: React.FC = () => {
    const [view, setView] = useState<ViewState>('home');
    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({ firstName: '', lastName: '', email: '', phone: '' });
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
    const [searchFilters, setSearchFilters] = useState<SearchFilters>({
        checkIn: '',
        checkOut: '',
        guests: 1,
        roomType: '',
        priceRange: { min: 0, max: 500 }
    });
    const [sortOption, setSortOption] = useState<SortOption>({ field: 'price', direction: 'asc' });

    // Mock Data
    const rooms: Room[] = [
        { id: 1, name: "Aurora Suite", price: 250, amenities: ["Private Spa", "24/7 Butler", "Terrace"], description: "Unmatched elegance with a private terrace overlooking the historic city center.", type: 'deluxe' },
        { id: 2, name: "Heritage Deluxe", price: 180, amenities: ["King Bed", "Smart UI", "Mini Bar"], description: "Classic design meets modern comfort in our newly renovated heritage rooms.", type: 'comfort' },
        { id: 3, name: "Urban Comfort", price: 120, amenities: ["Wifi", "Desk", "Rain Shower"], description: "Minimalist and quiet, designed for the modern international traveler.", type: 'standard' }
    ];

    const handleBookingConfirm = () => {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        if (!formData.firstName) newErrors.firstName = "Name required";
        if (!formData.email.includes('@')) newErrors.email = "Check email format";

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setLoading(true);
            setTimeout(() => { setLoading(false); setView('success'); }, 1500);
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-100 flex flex-col">
            <Navigation setView={setView} />

            <main className="flex-grow">
                {loading ? (
                    <div className="h-[80vh] flex flex-col items-center justify-center">
                        <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mb-4" />
                        <p className="text-sm text-gray-600 animate-pulse">Processing...</p>
                    </div>
                ) : (
                    <div className="animate-in fade-in duration-500">
                        {view === 'home' && <Home setView={setView} />}

                        {view === 'search' && (
                            <Search
                                rooms={rooms}
                                filters={searchFilters}
                                setFilters={setSearchFilters}
                                sortOption={sortOption}
                                setSortOption={setSortOption}
                                setSelectedRoom={setSelectedRoom}
                                setView={setView}
                            />
                        )}

                        {view === 'checkout' && (
                            <Checkout
                                selectedRoom={selectedRoom}
                                formData={formData}
                                setFormData={setFormData}
                                errors={errors}
                                handleBookingConfirm={handleBookingConfirm}
                                setView={setView}
                            />
                        )}

                        {view === 'success' && <Success setView={setView} />}

                        {view === 'login' && <Login setView={setView} />}

                        {view === 'admin' && <AdminDashboard />}
                    </div>
                )}
            </main>

            <footer className="py-8 border-t border-gray-900 mt-auto bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-xs text-gray-600 uppercase">
                        Bloom Hotel &copy; 2025
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default App;