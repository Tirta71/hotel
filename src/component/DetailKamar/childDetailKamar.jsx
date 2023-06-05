import React, { useEffect, useState } from "react";
import axios from "axios";
import { HeroCarousel } from "./HeroCarousel";
import AcomodationInfo from "./AcomodationInfo";

export default function JenisKamar({ id }) {
  const [kamarData, setKamarData] = useState(null);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://647c5a8bc0bae2880ad09b73.mockapi.io/kamar/${id}`
      );
      setKamarData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      console.log("Response:", error.response);
      console.log("Request:", error.request);
      console.log("Config:", error.config);
    }
  };

  if (!kamarData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single single-accomodation has-additional-menu-content">
      <HeroCarousel images={kamarData?.images} />

      <div className="content-wrap clearfix">
        <div className="entry entry-page">
          <div className="entry-content">
            <div className="grid-container">
              <div className="grid-column no-animation">
                <AcomodationInfo kamarData={kamarData} />
              </div>
              <div className="grid-column">
                <p>{kamarData.description}</p>
              </div>
            </div>
            <div className="gallery-masonry">
              {kamarData.images &&
                kamarData.images.map((image, index) => (
                  <figure key={index}>
                    <a href={image} data-fancybox="gallery">
                      <img
                        src={image}
                        width="310"
                        height="465"
                        alt=""
                        style={{
                          width: "310px",
                          height: "465px",
                          objectFit: "cover",
                        }}
                      />
                    </a>
                    <figcaption>
                      {index === 0
                        ? "Comfortable beds with unique color palette"
                        : "Accents here and there, for reinforcing the brand"}
                    </figcaption>
                  </figure>
                ))}
            </div>
          </div>
        </div>
        <div className="entry-copyright">
          <p>
            &copy; 2018 <a href="index.html">LeLuxe Hotel</a>. All Rights
            Reserved. <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}
