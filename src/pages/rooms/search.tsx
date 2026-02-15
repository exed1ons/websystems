import React from 'react';
import { Room, ViewState, SearchFilters, SortOption } from '../../types';
import RoomCard from './room-card';
import Button from '../../components/button';

interface SearchProps {
    rooms: Room[];
    filters: SearchFilters;
    setFilters: React.Dispatch<React.SetStateAction<SearchFilters>>;
    sortOption: SortOption;
    setSortOption: React.Dispatch<React.SetStateAction<SortOption>>;
    setSelectedRoom: React.Dispatch<React.SetStateAction<Room | null>>;
    setView: (view: ViewState) => void;
}

const Search: React.FC<SearchProps> = ({
    rooms,
    filters,
    setFilters,
    sortOption,
    setSortOption,
    setSelectedRoom,
    setView
}) => {
    // Filter rooms based on current filters
    const filteredRooms = rooms.filter(room => {
        if (filters.roomType && filters.roomType !== '' && room.type !== filters.roomType) {
            return false;
        }
        if (room.price < filters.priceRange.min || room.price > filters.priceRange.max) {
            return false;
        }
        return true;
    });

    // Sort filtered rooms
    const sortedRooms = [...filteredRooms].sort((a, b) => {
        if (sortOption.field === 'price') {
            return sortOption.direction === 'asc' ? a.price - b.price : b.price - a.price;
        } else {
            return sortOption.direction === 'asc'
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        }
    });

    const handleSelectRoom = (room: Room) => {
        setSelectedRoom(room);
        setView('checkout');
    };

    const toggleSort = () => {
        setSortOption(prev => ({
            ...prev,
            direction: prev.direction === 'asc' ? 'desc' : 'asc'
        }));
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 animate-in fade-in duration-500">
            <div className="flex gap-8">
                {/* Left Sidebar - Filters */}
                <div className="w-64 border-r border-gray-300 pr-8">
                    <h2 className="text-lg font-semibold uppercase mb-6 text-gray-900">Filters</h2>

                    {/* Room Type Filter */}
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-600 mb-3">Room Type</label>
                        <select
                            value={filters.roomType || ''}
                            onChange={(e) => setFilters({ ...filters, roomType: (e.target.value || '') as any })}
                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:border-blue-500 outline-none"
                        >
                            <option value="">All Types</option>
                            <option value="deluxe">Deluxe</option>
                            <option value="comfort">Comfort</option>
                            <option value="standard">Standard</option>
                        </select>
                    </div>

                    {/* Price Range Filter */}
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-600 mb-3">Price Range</label>
                        <div className="space-y-3">
                            <div>
                                <label className="text-xs text-gray-500">Min: ${filters.priceRange.min}</label>
                                <input
                                    type="range"
                                    min="0"
                                    max="500"
                                    value={filters.priceRange.min}
                                    onChange={(e) => setFilters({
                                        ...filters,
                                        priceRange: { ...filters.priceRange, min: parseInt(e.target.value) }
                                    })}
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <label className="text-xs text-gray-500">Max: ${filters.priceRange.max}</label>
                                <input
                                    type="range"
                                    min="0"
                                    max="500"
                                    value={filters.priceRange.max}
                                    onChange={(e) => setFilters({
                                        ...filters,
                                        priceRange: { ...filters.priceRange, max: parseInt(e.target.value) }
                                    })}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Apply Button */}
                    <Button variant="primary" className="w-full">
                        APPLY
                    </Button>
                </div>

                {/* Right Content Area */}
                <div className="flex-1">
                    {/* Sort Button */}
                    <div className="flex justify-end mb-6">
                        <button
                            onClick={toggleSort}
                            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                        >
                            SORT {sortOption.direction === 'asc' ? '↑' : '↓'}
                        </button>
                    </div>

                    {/* Room Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sortedRooms.map(room => (
                            <RoomCard
                                key={room.id}
                                room={room}
                                onSelect={handleSelectRoom}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
