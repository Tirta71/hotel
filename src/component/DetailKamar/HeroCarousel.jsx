import React from "react";
export function HeroCarousel({ images }) {
  return (
    <section className="hero-media">
      <div className="" data-expand-duration="800">
        {images.slice(0, 2).map((image, index) => (
          <div className="item owl-lazy" key={index}>
            <img src={image} alt="" />
          </div>
        ))}
      </div>
      <span className="overlay"></span>
      <span className="mdi mdi-spin mdi-loading"></span>
    </section>
  );
}
