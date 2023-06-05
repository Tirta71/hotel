/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../component/Logo";
import SocialProfiles from "../component/SocialMedia";
import CarouselContact from "../component/contact/CarouselContact";
import ContentContact from "../component/contact/ContentContact";
import FormContact from "../component/contact/FormContact";

export default function Contact() {
  return (
    <div className="contact has-additional-menu-content">
      <Logo />
      <SocialProfiles />
      <CarouselContact />
      <div className="content-wrap">
        <div className="entry entry-page">
          <h2 className="entry-title">
            Get in touch and ask freely at Hyatt Regency
          </h2>
          <div className="entry-content">
            <p>
              Hyatt Regency. Know it? A regular of ours once compared the hotel
              to this classic of literature and the movies. Hidden behind every
              door and corner is a whole new world.
            </p>
            <br />
            <div className="grid-container">
              <div className="grid-column">
                <FormContact />
              </div>
              <ContentContact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
