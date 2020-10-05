import React from "react";
function Bookings(props) {
  function handleClick() {
    props.loadBookings();
  }

  function handleToDelete(event) {
    console.log(event.target.className);
    const bookingId = event.target.className;
    fetch(`http://localhost:3000/bookings/${bookingId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => props.loadBookings());
  }

  return (
    <div>
      <button className="btn btn-secondary" onClick={handleClick}>
        Refresh
      </button>

      {!props.bookings.length ? (
        <p>Not loading yet</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              {Object.keys(props.bookings[0]).map((key) => (
                <th scope="col" key={key}>
                  {key}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {props.bookings.map((booking) => {
              return (
                <tr
                  className="bookings"
                  key={(Math.random() / 10000000000).toString()}
                >
                  {Object.keys(booking).map(function (key, index) {
                    return (
                      <td
                        key={(Math.random() * 10000000000).toString()}
                        className={key}
                      >
                        {booking[key]}
                      </td>
                    );
                  })}
                  <td>
                    <button className={booking.id} onClick={handleToDelete}>
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Bookings;
