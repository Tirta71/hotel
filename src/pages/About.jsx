/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import FormBook from "../component/Booking/formBook";
import Foto from "../assets/img/About/Thumbnail1.png";
import Thumbail from "../assets/img/About/Yo-d2PV40hYhd.jpg";
import { SecondAbout } from "../data/dataAbout";
import Logo from "../component/Logo";
import SocialProfiles from "../component/SocialMedia";

export default function About() {
  return (
    <div className="has-booking has-additional-menu-content">
      <Logo />
      <SocialProfiles />
      <section className="hero-media">
        <div className="owl-carousel" data-expand-duration="800">
          <div className="item owl-lazy" data-src={Foto}></div>
        </div>
        <span className="overlay"></span>
        <span className="mdi mdi-spin mdi-loading"></span>
      </section>

      <div className="content-wrap clearfix">
        <div className="entry entry-page">
          <h2 className="entry-title">Welcome dear guest</h2>
          <div className="entry-content">
            <div className="grid-container">
              <div className="entry-media grid-column">
                <a
                  href="#about-video"
                  data-fancybox
                  data-options='{ "smallBtn" : false }'
                >
                  <img src={Thumbail} width="380" height="580" alt="" />
                  <span className="mdi mdi-play"></span>
                </a>
                <video
                  id="about-video"
                  controls
                  loop
                  muted
                  preload="none"
                  className="d-none"
                >
                  <source
                    type="video/mp4"
                    src="https://res.cloudinary.com/dhrwehs40/video/upload/v1685939524/Hotel/Video/videoplayback_pe6ei2.mp4"
                  />
                  <source
                    type="video/webm"
                    src="https://res.cloudinary.com/dhrwehs40/video/upload/v1685939524/Hotel/Video/videoplayback_pe6ei2.mp4"
                  />
                </video>
              </div>
              <SecondAbout />
            </div>
          </div>
        </div>
      </div>

      <FormBook />
    </div>
  );
}
