import React, { useState } from "react";
import axios from "axios";

export default function TicketChecker() {
  const [ticketBookId, setTicketBookId] = useState("");
  const [ticketData, setTicketData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setTicketBookId(event.target.value);
  };

  const fetchTicketData = async () => {
    try {
      const response = await axios.get(
        "https://647c5a8bc0bae2880ad09b73.mockapi.io/booking"
      );
      const ticket = response.data.find(
        (ticket) => ticket.BookId === parseInt(ticketBookId)
      );
      if (ticket) {
        setTicketData(ticket);
        setError(null);
      } else {
        setTicketData(null);
        setError("Ticket not found");
      }
    } catch (error) {
      setTicketData(null);
      setError("Failed to fetch ticket data");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (ticketBookId.trim() !== "") {
      fetchTicketData();
    }
  };

  return (
    <div style={{ margin: "6rem 3rem" }}>
      <h2>Ticket Checker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Ticket BookId"
          value={ticketBookId}
          onChange={handleInputChange}
        />
        <button type="submit">Check Ticket</button>
      </form>

      {error && <p>{error}</p>}

      {ticketData && (
        <table>
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Adults</th>
              <th>Children</th>
              <th>Room No</th>
              <th>Notes</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr key={ticketData.id}>
              <td>{ticketData.id}</td>
              <td>{ticketData.name}</td>
              <td>{ticketData.email}</td>
              <td>{ticketData.checkin}</td>
              <td>{ticketData.checkout}</td>
              <td>{ticketData.adults}</td>
              <td>{ticketData.children}</td>
              <td>{ticketData.roomNo}</td>
              <td>{ticketData.notes}</td>
              <td>{ticketData.status ? "Success" : "Pending"}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
