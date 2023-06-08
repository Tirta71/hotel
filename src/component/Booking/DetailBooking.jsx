import React, { useEffect, useState } from "react";
import { DataKamar } from "../../api/api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function DetailBooking() {
  const [dataBooking, setDataBooking] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkin: "",
    checkout: "",
    adults: "2",
    children: "0",
    roomNo: "1",
    room: "",
    notes: "",
    roomPrice: "",
    totalRoom: "",
  });
  const [roomPrice, setRoomPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await DataKamar();
      setDataBooking(response.data);
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "room") {
      const selectedRoom = dataBooking.find((item) => item.name === value);
      const price = selectedRoom ? selectedRoom.price : 0;
      const totalRoom = selectedRoom ? selectedRoom.totalRoom : 0;

      setFormData({
        ...formData,
        [name]: value,
        roomPrice: price,
        totalRoom: totalRoom,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    const selectedRoom = dataBooking.find(
      (item) => item.name === formData.room
    );
    if (selectedRoom) {
      setRoomPrice(selectedRoom.price);
    }
  }, [formData.room, dataBooking]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Cek apakah ada input yang kosong
    const isFormValid =
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.checkin.trim() !== "" &&
      formData.checkout.trim() !== "" &&
      formData.room.trim() !== "";

    if (!isFormValid) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Field cannot be empty",
      });
      return;
    }

    try {
      // Temukan kamar yang dipilih berdasarkan nama
      const selectedRoom = dataBooking.find(
        (item) => item.name === formData.room
      );

      // Cek apakah kamar yang dipilih ada
      if (!selectedRoom) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Selected room is not available",
        });
        return;
      }

      // Kurangi totalRoom sesuai dengan jumlah kamar yang dipesan
      const updatedTotalRoom = selectedRoom.totalRoom - Number(formData.roomNo);

      // Cek apakah kamar tersedia
      if (updatedTotalRoom < 0) {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "The room is fully booked",
        });
        return;
      }

      // Perbarui totalRoom di API kamar
      const responseKamar = await axios.put(
        `https://647c5a8bc0bae2880ad09b73.mockapi.io/kamar/${selectedRoom.id}`,
        {
          totalRoom: updatedTotalRoom,
        }
      );

      Swal.fire({
        icon: "success",
        title: "Booking Successful! Next payment",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/detail-booking-ticket", { state: formData });
          window.location.reload();
        }
      });

      console.log("Total room diperbarui:", responseKamar.data);
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  return (
    <>
      <div className="entry-content">
        <form className="booking-form-full" onSubmit={handleSubmit}>
          <div className="message">
            <div id="booking_alert" className="alert">
              Make sure you take your time to complete all the fields so we can
              offer you a quicker and better response.
            </div>
          </div>
          <p className="field-name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name and surname..."
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </p>
          <p className="field-email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email used when contacting you..."
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </p>
          <p className="field-checkin">
            <label htmlFor="checkin">Check-in</label>
            <input
              type="date"
              name="checkin"
              id="checkin"
              className="custom-date-field"
              required
              value={formData.checkin}
              onChange={handleInputChange}
            />
          </p>
          <p className="field-checkout">
            <label htmlFor="checkout">Check-out</label>
            <input
              type="date"
              name="checkout"
              id="checkout"
              className="custom-date-field"
              required
              value={formData.checkout}
              onChange={handleInputChange}
            />
          </p>
          <p className="field-adults">
            <label htmlFor="adults">No. of adults</label>
            <select
              name="adults"
              id="adults"
              value={formData.adults}
              onChange={handleInputChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p>
          <p className="field-children">
            <label htmlFor="children">No. of children</label>
            <select
              name="children"
              id="children"
              value={formData.children}
              onChange={handleInputChange}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p>
          <p className="field-room-type">
            <label htmlFor="room">Select a room</label>
            {dataBooking.length > 0 ? (
              <select
                name="room"
                id="room"
                value={formData.room}
                onChange={handleInputChange}
              >
                {dataBooking.map((item, index) => (
                  <option value={item.name} key={index}>
                    {item.name}
                  </option>
                ))}
              </select>
            ) : (
              <p>Loading data...</p>
            )}
          </p>

          <p className="field-room-no">
            <label htmlFor="room-no">How many rooms</label>
            <select
              name="roomNo"
              id="room-no"
              value={formData.roomNo}
              onChange={handleInputChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p>
          <div className="clear"></div>
          <label htmlFor="notes">Additional notes</label>
          <textarea
            name="notes"
            id="notes"
            cols="30"
            rows="4"
            placeholder="Any additional requests you may have..."
            value={formData.notes}
            onChange={handleInputChange}
          ></textarea>
          <div className="price-section">
            {formData.totalRoom > 0 ? (
              <>
                <h5>rest of the room {formData.totalRoom}</h5>
                <h2>Room Price : Rp. {roomPrice.toLocaleString()} per night</h2>
                <p className="price"></p>
              </>
            ) : (
              <h2>Room Full Booked</h2>
            )}
          </div>

          <button className="button-filled button-color" onClick={handleSubmit}>
            Booking
          </button>
        </form>
      </div>
    </>
  );
}
