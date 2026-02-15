export interface Room {
    id: number;
    name: string;
    price: number;
    amenities: string[];
    description: string;
    type: 'deluxe' | 'comfort' | 'standard';
}

export interface Booking {
    id: string;
    guest: string;
    room: string;
    status: 'AWAITING_GUEST' | 'CHECKED_IN' | 'CANCELLED';
}

export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export type ViewState = 'home' | 'search' | 'checkout' | 'success' | 'login' | 'admin';

export interface SearchFilters {
    checkIn: string;
    checkOut: string;
    guests: number;
    roomType?: 'deluxe' | 'comfort' | 'standard' | '';
    priceRange: { min: number; max: number };
}

export interface SortOption {
    field: 'price' | 'name';
    direction: 'asc' | 'desc';
}