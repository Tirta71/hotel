import React from "react";
import Logo from "../component/Logo";
import SocialProfiles from "../component/SocialMedia";

import MyNavbar from "../component/myNavbar";
import CarouselBooking from "../component/Booking/CarouselBooking";
import DetailBooking from "../component/Booking/DetailBooking";
export default function Booking() {
  return (
    <>
      <div className="single has-additional-menu-content">
        <Logo />
        <SocialProfiles />
        <MyNavbar />
        <CarouselBooking />

        <div className="content-wrap">
          <div className="entry entry-page">
            <h2 className="entry-title">Book accomodation</h2>
            <DetailBooking />
          </div>
        </div>
      </div>
    </>
  );
}
