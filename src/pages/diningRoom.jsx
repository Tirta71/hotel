import React from "react";
import FormBook from "../component/formBook";
import CarouselDining from "../component/Dining/CarouselDining";

import TabDining from "../component/Dining/tabDining";
import Logo from "../component/Logo";
import SocialProfiles from "../component/SocialMedia";
export default function DiningRoom() {
  return (
    <div className="has-booking has-additional-menu-content">
      <Logo />
      <SocialProfiles />
      <CarouselDining />

      <div className="content-wrap clearfix">
        <div className="entry entry-page">
          <h2 className="entry-title">Come and taste our delicacies</h2>
          <div className="entry-content">
            <p>
              Explore texture, color and of course the{" "}
              <a href="#">ultimate tastes</a> with our menu of the season. All
              the <a href="#">ingredients are fresh</a> and carefully selected
              by our chefs.
            </p>
            <TabDining />
          </div>
        </div>
        <div className="entry-copyright"></div>
      </div>

      <FormBook />
    </div>
  );
}
