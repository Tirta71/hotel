import React from "react";

export default function ContentContact() {
  return (
    <div className="grid-column">
      <h4 className="no-bottom">Address:</h4>
      <p>
        Jl. Palagan Tentara Pelajar, Panggung Sari, Sariharjo, Kec. Ngaglik.
        <br />
        Yogyakarta, Daerah Istimewa Yogyakarta 55581
        <br />{" "}
        <a
          href="https://www.google.com/maps/place/Hyatt+Regency+Yogyakarta/@-7.7404512,110.3709693,17z/data=!3m1!4b1!4m9!3m8!1s0x2e7a58e3a6ece3b5:0xa3ce3fb7e2fef029!5m2!4m1!1i2!8m2!3d-7.7404565!4d110.3735496!16s%2Fg%2F1tdhwvlq?entry=ttu"
          target="_blank"
          rel="noreferrer"
        >
          via Google Maps
        </a>
      </p>

      <h4 className="no-bottom">Phone:</h4>
      <p>
        001 8030160039 (Indosat)
        <br />
        007 8030160039 (PT Telkom)
      </p>

      <h4 className="no-bottom">Email:</h4>
      <p>
        <a href="mailto:contact@leluxe.com">Yogyakarta.regency@hyatt.com</a>
      </p>
    </div>
  );
}
