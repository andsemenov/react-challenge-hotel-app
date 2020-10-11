import React, { useState, useEffect } from "react";
import "./App.css";
import Bookings from "./Bookings";
import AddBooking from "./AddBooking";

function App() {
  const [bookings, setBookings] = useState([]);
  const loadBookings = () => {
    fetch("/bookings")
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);
      });
  };

  useEffect(() => {
    loadBookings();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>HOTEL BOOKINGS</h1>
      </header>
      <AddBooking bookings={bookings} loadBookings={loadBookings} />
      <Bookings bookings={bookings} loadBookings={loadBookings} />
    </div>
  );
}

export default App;
