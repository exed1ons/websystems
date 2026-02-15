import { Room, FormData } from '../types';

const BASE_URL = 'https://hotel-api-jh70.onrender.com/api';

export const fetchRooms = async (): Promise<Room[]> => {
  try {
    const response = await fetch(`${BASE_URL}/rooms`);
    if (!response.ok) {
      throw new Error(`Failed to fetch rooms: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching rooms:', error);
    throw error;
  }
};

export const createBooking = async (bookingData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  roomId: number;
  checkIn: string;
  checkOut: string;
  totalPrice: number;
}) => {
  try {
    const response = await fetch(`${BASE_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      if (response.status === 400) {
        throw new Error(errorData.message || 'Invalid booking data');
      } else if (response.status === 500) {
        throw new Error('Server error. Please try again later.');
      } else {
        throw new Error(`Booking failed with status ${response.status}`);
      }
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};
