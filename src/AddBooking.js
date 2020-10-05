import React, { useState } from "react";

function AddBooking(props) {
  const [addBooking, setAddBooking] = useState({
    id: "",
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: "",
  });

  const handleChange = (event) => {
    const updatedBooking = {
      ...addBooking,
      [event.target.name]: event.target.value,
    };
    setAddBooking(updatedBooking);
  };

  function handleSubmit(event) {
    event.preventDefault();
    props.loadBookings();

    fetch("http://localhost:3000/bookings", {
      method: "POST",
      body: JSON.stringify({ ...addBooking }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => props.loadBookings());

    setAddBooking({
      id: "",
      title: "",
      firstName: "",
      surname: "",
      email: "",
      roomId: "",
      checkInDate: "",
      checkOutDate: "",
    });
  }

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            id="title"
            name="title"
            value={addBooking.title}
            placeholder="Title"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={addBooking.firstName}
            placeholder="First name"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            id="surName"
            name="surname"
            value={addBooking.surname}
            placeholder="Surname"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            id="email"
            name="email"
            value={addBooking.email}
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="roomId"
            value={addBooking.roomId}
            placeholder="Room ID"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="date"
            name="checkInDate"
            value={addBooking.checkInDate}
            placeholder="checkInDate"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="date"
            name="checkOutDate"
            value={addBooking.checkOutDate}
            placeholder="checkOutDate"
            onChange={handleChange}
          />
        </div>
      </form>

      <div className="form-buttons">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Send
        </button>
        <button className="btn btn-secondary">Send random</button>
      </div>
    </div>
  );
}

export default AddBooking;
