/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../component/Logo";
import SocialProfiles from "../component/SocialMedia";

export default function Contact() {
  return (
    <div className="contact has-additional-menu-content">
      <Logo />
      <SocialProfiles />
      <section className="hero-media">
        <div id="gmap" className="map"></div>
        <span className="overlay"></span>
        <span className="mdi mdi-spin mdi-loading"></span>
      </section>

      <div className="content-wrap">
        <div className="entry entry-page">
          <h2 className="entry-title">Get in touch and ask freely</h2>
          <div className="entry-content">
            <p>
              Alice in Wonderland. Know it? A regular of ours once compared the
              hotel to this classic of literature and the movies. Hidden behind
              every door and corner is a whole new world.
            </p>
            <br />
            <div className="grid-container">
              <div className="grid-column">
                <form id="contact_form" action="sendmail.php">
                  <div className="message d-none">
                    <div id="contact_alert" className="alert notice"></div>
                  </div>
                  <label htmlFor="name" className="screen-reader-text">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name&hellip;"
                    required
                  />
                  <label htmlFor="email" className="screen-reader-text">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email&hellip;"
                    required
                  />
                  <label htmlFor="message" className="screen-reader-text">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Your message&hellip;"
                    required
                  ></textarea>
                  <button type="submit" className="button-filled button-color">
                    Send message
                  </button>
                </form>
              </div>
              <div className="grid-column">
                <h4 className="no-bottom">Address:</h4>
                <p>
                  13 LeLuxe Street, 43569, <br />
                  Lyon, France <br />{" "}
                  <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noreferrer"
                  >
                    via Google Maps
                  </a>
                </p>

                <h4 className="no-bottom">Phone:</h4>
                <p>
                  +23 432 423 16 <br />
                  +23 439 110 85
                </p>

                <h4 className="no-bottom">Email:</h4>
                <p>
                  <a href="mailto:contact@leluxe.com">contact@leluxe.com</a>{" "}
                  <br />
                  <a href="mailto:suggestions@leluxe.com">
                    suggestions@leluxe.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
