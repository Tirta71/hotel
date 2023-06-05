/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import MyNavbar from "../component/myNavbar";
import AccommodationListing from "../component/Accomodation";
import Logo from "../component/Logo";
import SocialProfiles from "../component/SocialMedia";

export default function KamarHotel() {
  return (
    <div className="has-additional-menu-content full-content">
      <MyNavbar />
      <Logo />
      <SocialProfiles />
      <div className="content-wrap">
        <div className="entry entry-page">
          <div className="entry-content">
            <AccommodationListing />
          </div>
        </div>
        <div className="entry-copyright"></div>
      </div>
    </div>
  );
}
