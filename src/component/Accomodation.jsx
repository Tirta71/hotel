/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AccommodationListing() {
  const [accommodations, setAccommodations] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://647c5a8bc0bae2880ad09b73.mockapi.io/kamar"
      );
      setAccommodations(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleDetailClick = (id) => {
    navigate(`/detail-pesan/${id}`);
  };

  return (
    <div className="accomodation-listing">
      {accommodations.map((accommodation) => (
        <article className="entry-accomodation" key={accommodation.id}>
          <div className="entry-media">
            <a onClick={() => handleDetailClick(accommodation.id)}>
              <img
                src={accommodation.images[0]}
                width="1380"
                height="500"
                alt=""
              />
            </a>
          </div>
          <header className="entry-header">
            <h2 className="entry-title">
              <a onClick={() => handleDetailClick(accommodation.id)}>
                {accommodation.name}
              </a>
            </h2>
            <ul>
              <li>Max. {accommodation.capacity} Person</li>
              <li>{accommodation.breakfast}</li>
              {accommodation.totalRoom === 0 ? (
                <li>Room Full Booked</li>
              ) : (
                <li>Rest of the room {accommodation.totalRoom}</li>
              )}
            </ul>
            <a
              onClick={() => handleDetailClick(accommodation.id)}
              className="accomodation-price"
            >
              <span className="currency">Rp. </span>
              <span className="price">
                {accommodation.price.toLocaleString()}
              </span>
              <span className="price-per"> / night</span>
            </a>
          </header>
        </article>
      ))}
    </div>
  );
}

export default AccommodationListing;
