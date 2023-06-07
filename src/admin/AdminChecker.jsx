import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarAdmin from "../component/NavbarAdmin/NavbarAdmin";

export default function AdminChecker() {
  const [ticketData, setTicketData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTicketData();
  }, []);

  const fetchTicketData = async () => {
    try {
      const response = await axios.get(
        "https://647c5a8bc0bae2880ad09b73.mockapi.io/booking"
      );
      setTicketData(response.data);
      setError(null);
    } catch (error) {
      setTicketData([]);
      setError("Failed to fetch ticket data");
    }
  };

  const handleStatusUpdate = async (id) => {
    try {
      await axios.put(
        `https://647c5a8bc0bae2880ad09b73.mockapi.io/booking/${id}`,
        { status: true }
      );
      fetchTicketData();
    } catch (error) {
      setError("Failed to update ticket status");
    }
  };

  const handleTicketDelete = async (id) => {
    try {
      await axios.delete(
        `https://647c5a8bc0bae2880ad09b73.mockapi.io/booking/${id}`
      );
      fetchTicketData();
    } catch (error) {
      setError("Failed to delete ticket");
    }
  };

  return (
    <>
      <NavbarAdmin />
      <div style={{ margin: "3rem" }}>
        <h2>Admin Checker</h2>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Ticket ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Adults</th>
              <th>Children</th>
              <th>Many Room</th>
              <th>Notes</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {ticketData.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.BookId}</td>
                <td>{ticket.name}</td>
                <td>{ticket.email}</td>
                <td>{ticket.checkin}</td>
                <td>{ticket.checkout}</td>
                <td>{ticket.adults}</td>
                <td>{ticket.children}</td>
                <td>{ticket.roomNo}</td>
                <td>{ticket.notes}</td>
                <td>{ticket.status ? "Paid" : "Unpaid"}</td>
                <td>
                  {!ticket.status && (
                    <button
                      onClick={() => handleStatusUpdate(ticket.id)}
                      style={{
                        textAlign: "center",
                        padding: "5px",
                      }}
                    >
                      Mark as Paid
                    </button>
                  )}
                  <button
                    onClick={() => handleTicketDelete(ticket.id)}
                    style={{
                      textAlign: "center",
                      padding: "5px",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {error && <p>{error}</p>}
      </div>
    </>
  );
}
