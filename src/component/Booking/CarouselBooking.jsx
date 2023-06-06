import React from "react";

export default function CarouselBooking() {
  return (
    <section class="hero-media">
      <div class="owl-carousel" data-expand-duration="800">
        <div
          class="item owl-lazy"
          data-src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ></div>
      </div>
      <span class="overlay"></span>
      <span class="mdi mdi-spin mdi-loading"></span>
    </section>
  );
}
