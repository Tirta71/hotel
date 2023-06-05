import React from "react";

export default function CarouselDining() {
  return (
    <section class="hero-media">
      <div class="owl-carousel" data-expand-duration="800">
        <div
          class="item item-video owl-lazy"
          data-src="https://html.liviucerchez.com/leluxe/tmp/sample-video2.jpg"
        >
          <video
            loop
            muted
            preload="auto"
            poster="https://html.liviucerchez.com/leluxe/tmp/sample-video2.jpg"
          >
            <source
              type="video/mp4"
              src="https://html.liviucerchez.com/leluxe/tmp/sample-video2.mp4"
            />
            <source
              type="video/webm"
              src="https://html.liviucerchez.com/leluxe/tmp/sample-video2.webm"
            />
          </video>
        </div>
      </div>
      <span class="overlay"></span>
      <span class="mdi mdi-spin mdi-loading"></span>
    </section>
  );
}
