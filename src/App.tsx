import React, { useState, useEffect } from 'react';
import { Room, FormData, ViewState, SearchFilters, SortOption } from './types';
import Navigation from "./components/navigation";
import Home from "./pages/home/home";
import Search from "./pages/rooms/search";
import Checkout from "./pages/checkout";
import Success from "./pages/success";
import Login from "./pages/login";
import AdminDashboard from './pages/admin/dashboard';
import { fetchRooms, createBooking } from './services/api';

const App: React.FC = () => {
    const [view, setView] = useState<ViewState>('home');
    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [rooms, setRooms] = useState<Room[]>([]);
    const [roomsLoading, setRoomsLoading] = useState<boolean>(true);
    const [roomsError, setRoomsError] = useState<string | null>(null);
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

    useEffect(() => {
        const loadRooms = async () => {
            try {
                setRoomsLoading(true);
                setRoomsError(null);
                const data = await fetchRooms();
                setRooms(data);
            } catch (error) {
                console.error('Failed to load rooms:', error);
                setRoomsError('Failed to load rooms. Please refresh the page.');
            } finally {
                setRoomsLoading(false);
            }
        };

        loadRooms();
    }, []);

    const handleBookingConfirm = async () => {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        if (!formData.firstName) newErrors.firstName = "Name required";
        if (!formData.email.includes('@')) newErrors.email = "Check email format";

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            try {
                setLoading(true);

                const bookingData = {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    roomId: selectedRoom?.id || 1,
                    checkIn: '2025-11-21', // TODO: Get from search filters
                    checkOut: '2025-11-23', // TODO: Get from search filters
                    totalPrice: (selectedRoom?.price || 0) * 2
                };

                await createBooking(bookingData);

                setView('success');
            } catch (error) {
                console.error('Booking error:', error);
                setErrors({
                    email: error instanceof Error ? error.message : 'Booking failed. Please try again.'
                });
            } finally {
                setLoading(false);
            }
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