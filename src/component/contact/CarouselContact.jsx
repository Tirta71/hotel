import React from "react";

export default function CarouselContact() {
  return (
    <section className="hero-media">
      <div className="owl-carousel" data-expand-duration="800">
        <div
          className="item owl-lazy"
          data-src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80"
        ></div>
      </div>
      <span className="overlay"></span>
      <span className="mdi mdi-spin mdi-loading"></span>
    </section>
  );
}
