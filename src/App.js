import React, { useState, useEffect } from "react";
import "./App.css";
import Bookings from "./Bookings";
import AddBooking from "./AddBooking";

function App() {
  const [bookings, setBookings] = useState([]);
  const loadBookings = () => {
    fetch("http://localhost:3000/bookings")
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
        <p>HI EVERYONE</p>
      </header>
      <AddBooking bookings={bookings} loadBookings={loadBookings} />
      <Bookings bookings={bookings} loadBookings={loadBookings} />
    </div>
  );
}

export default App;
