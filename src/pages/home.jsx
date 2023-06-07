/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import MyNavbar from "../component/MyNavbar/myNavbar";
import FormBook from "../component/Booking/formBook";
import FotoHotel from "../assets/img/Home/yuliya-pankevich-oyxsG2Lh_uA-unsplash.jpg";
import Logo from "../component/Logo";
import SocialProfiles from "../component/SocialMedia";

export default function Home() {
  return (
    <div className="home fullpage has-booking has-additional-menu-content">
      <MyNavbar />
      <Logo />
      <SocialProfiles />
      <section className="hero-media">
        <div className="owl-carousel">
          <div className="item owl-lazy" data-src={FotoHotel}>
            <div className="text">
              <h2>The must-see panoramic hotel from France</h2>
            </div>
          </div>
          <div
            className="item item-video owl-lazy light-hero-colors"
            data-src="https://html.liviucerchez.com/leluxe/tmp/sample-video1.jpg"
          >
            <video loop muted preload="none">
              <source
                type="video/mp4"
                src="https://html.liviucerchez.com/leluxe/tmp/sample-video1.mp4"
              />
              <source
                type="video/webm"
                src="https://html.liviucerchez.com/leluxe/tmp/sample-video1.webm"
              />
            </video>
            <div className="text">
              <h2>Our motto: expect nothing but the best</h2>
            </div>
          </div>
        </div>
        <span className="mdi mdi-spin mdi-loading"></span>
      </section>

      {/* FORM BOOK NOW */}
      <FormBook />
    </div>
  );
}
