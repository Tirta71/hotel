import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import CarouselContact from "../component/contact/CarouselContact";
import Swal from "sweetalert2";

export default function DetailBookingTicket() {
  const location = useLocation();
  const formData = location.state || {};
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://647c5a8bc0bae2880ad09b73.mockapi.io/booking",
        {
          BookId: Math.floor(Math.random() * 1000), // Membuat ID pesanan secara acak
          name: formData.name,
          email: formData.email,
          checkin: formData.checkin,
          checkout: formData.checkout,
          adults: formData.adults,
          children: formData.children,
          roomNo: formData.roomNo,
          roomPrice: formData.roomPrice,
          room: formData.room,
          TotalPrice: TotalHarga(),
          notes: formData.notes,
          status: false, // Menggunakan status sebagai boolean
        }
      );

      // Menampilkan notifikasi dengan SweetAlert2
      Swal.fire({
        icon: "success",
        title: "Booking Successful!",
        text: `Your order has been placed with ID: ${response.data.BookId} 
          You can check history in Check My ticket Dont lost your ID`,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
          window.location.reload();
        }
      });

      console.log("Data berhasil dikirim:", response.data);
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  const TotalHarga = () => {
    return formData.roomPrice * formData.roomNo;
  };

  return (
    <>
      <div className="contact has-additional-menu-content">
        <CarouselContact />
        <div className="entry-content">
          <div className="content-wrap">
            <div className="entry entry-page">
              <h2 className="entry-title">Get Detail Booking</h2>
              <div className="entry-content">
                <table>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{formData.name}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{formData.email}</td>
                    </tr>
                    <tr>
                      <td>Check-in</td>
                      <td>{formData.checkin}</td>
                    </tr>
                    <tr>
                      <td>Check-out</td>
                      <td>{formData.checkout}</td>
                    </tr>
                    <tr>
                      <td>No of adults</td>
                      <td>{formData.adults}</td>
                    </tr>
                    <tr>
                      <td>Children</td>
                      <td>{formData.children}</td>
                    </tr>

                    <tr>
                      <td>Room</td>
                      <td>{formData.room}</td>
                    </tr>
                    <tr>
                      <td>Room Price</td>
                      <td>
                        Rp. {formData.roomPrice.toLocaleString()} per Night
                      </td>
                    </tr>
                    <tr>
                      <td>Room Total</td>
                      <td>{formData.roomNo}</td>
                    </tr>
                    <tr>
                      <td>Total Price</td>
                      <td>Rp. {TotalHarga().toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td>Notes</td>
                      <td>{formData.notes}</td>
                    </tr>
                  </tbody>
                </table>
                <button onClick={handleSubmit}>Submit Booking</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
