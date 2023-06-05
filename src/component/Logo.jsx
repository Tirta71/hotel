/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function Logo() {
  return (
    <header id="identity">
      <div class="logo">
        <h1>
          <a href="/" class="custom-logo-link" rel="home">
            <img
              src="tmp/Logo.ico"
              class="custom-logo dark"
              width="105"
              height="50"
            />
            <img
              src="tmp/Logo.ico"
              class="custom-logo light"
              width="105"
              height="50"
            />
          </a>
        </h1>
      </div>
    </header>
  );
}
