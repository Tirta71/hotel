/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AcomodationInfo({ kamarData }) {
  const navigate = useNavigate();
  const handleBooking = () => {
    if (kamarData.totalRoom === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Room is fully booked",
      });
      navigate("/pesan-kamar");
      window.location.reload();
    } else {
      navigate("/detail-book");
      window.location.reload();
    }
  };

  return (
    <div>
      <article className="entry-accomodation">
        <header className="entry-header">
          <h2 className="entry-title">
            <a>{kamarData.name}</a>
          </h2>
          <ul>
            <li>Max. {kamarData.capacity} person</li>
            {Array.isArray(kamarData.amenities) && (
              <ul style={{ listStyle: "inside" }}>
                {kamarData.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            )}
          </ul>
          <a className="accomodation-price">
            <span className="currency">Rp.</span>
            <span className="price">{kamarData.price.toLocaleString()}</span>
            <span className="price-per"> / night</span>
          </a>
          <form className="form-booking-button" onSubmit={handleBooking}>
            {kamarData.totalRoom === 0 ? (
              <button type="button" className="button-color" disabled>
                Room Full Booked
              </button>
            ) : (
              <button type="submit" className="button-color">
                Book Now
              </button>
            )}
            <div className="share-widget-container">
              <a href="#share-widget" className="button">
                <span className="mdi mdi-share-variant"></span>
              </a>
              <div id="share-widget">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                  target="_blank"
                  title="Share via Facebook"
                  rel="noreferrer"
                >
                  <span className="mdi mdi-facebook"></span>{" "}
                  <span className="screen-reader-text">Facebook</span>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    kamarData.name
                  )}&amp;url=${window.location.href}`}
                  target="_blank"
                  title="Share via Twitter"
                  rel="noreferrer"
                >
                  <span className="mdi mdi-twitter"></span>{" "}
                  <span className="screen-reader-text">Twitter</span>
                </a>
                <a
                  href={`https://plus.google.com/share?url=${window.location.href}`}
                  target="_blank"
                  title="Share via Google+"
                  rel="noreferrer"
                >
                  <span className="mdi mdi-google-plus"></span>{" "}
                  <span className="screen-reader-text">Google+</span>
                </a>
              </div>
            </div>
          </form>
        </header>
      </article>
    </div>
  );
}
