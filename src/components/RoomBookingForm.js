import React, { useState, useEffect } from 'react';
import './RoomBookingForm.css';

const RoomBookingForm = () => {
  const [rooms, setRooms] = useState([]);
  const [bookingFormData, setBookingFormData] = useState({
    roomId: '',
    guestName: '',
    checkInDate: '',
    checkOutDate: ''
  });
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Simulating fetching rooms from a server or storage
    const fetchedRooms = [
      { id: 1, number: '101', type: 'Single', price: '100' },
      { id: 2, number: '102', type: 'Double', price: '150' },
      { id: 3, number: '103', type: 'Suite', price: '200' }
    ];
    setRooms(fetchedRooms);

    // Simulating fetching bookings from a server or storage
    const fetchedBookings = [
      { id: 1, roomId: 1, guestName: 'John Doe', checkInDate: '2024-06-15', checkOutDate: '2024-06-18' },
      { id: 2, roomId: 2, guestName: 'Jane Smith', checkInDate: '2024-06-20', checkOutDate: '2024-06-25' }
    ];
    setBookings(fetchedBookings);
  }, []);

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    // Logic to handle booking submission (e.g., send data to server)
    console.log('Submitting Booking:', bookingFormData);
    // Simulate adding a new booking to the list
    const newBooking = { ...bookingFormData, id: bookings.length + 1 };
    setBookings([...bookings, newBooking]);
    // Clear form data after submission
    setBookingFormData({ roomId: '', guestName: '', checkInDate: '', checkOutDate: '' });
  };

  const handleBookingChange = (event) => {
    const { name, value } = event.target;
    setBookingFormData({ ...bookingFormData, [name]: value });
  };

  return (
    <div>
      <h2>Room Booking Form</h2>
      <form onSubmit={handleBookingSubmit}>
        <div>
          <label htmlFor="roomId">Select Room:</label>
          <select
            id="roomId"
            name="roomId"
            value={bookingFormData.roomId}
            onChange={handleBookingChange}
            required
          >
            <option value="">Select a Room</option>
            {rooms.map(room => (
              <option key={room.id} value={room.id}>{room.number} - {room.type} (${room.price} per night)</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="guestName">Guest Name:</label>
          <input
            type="text"
            id="guestName"
            name="guestName"
            value={bookingFormData.guestName}
            onChange={handleBookingChange}
            required
          />
        </div>
        <div>
          <label htmlFor="checkInDate">Check-In Date:</label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            value={bookingFormData.checkInDate}
            onChange={handleBookingChange}
            required
          />
        </div>
        <div>
          <label htmlFor="checkOutDate">Check-Out Date:</label>
          <input
            type="date"
            id="checkOutDate"
            name="checkOutDate"
            value={bookingFormData.checkOutDate}
            onChange={handleBookingChange}
            required
          />
        </div>
        <button type="submit">Book Room</button>
      </form>

      <div>
        <h3>Current Bookings</h3>
        <ul>
          {bookings.map(booking => (
            <li key={booking.id}>
              <strong>Room {rooms.find(room => room.id === booking.roomId)?.number}:</strong> {booking.guestName}, {booking.checkInDate} to {booking.checkOutDate}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoomBookingForm;
