import React from "react";

const socialMediaLinks = [
  { name: "Facebook", url: "https://www.facebook.com/HyattRegency/" },
  { name: "Twitter", url: "https://twitter.com/hyattyogya" },
  { name: "Instagram", url: "https://www.instagram.com/hyatt/" },
];

function SocialProfiles() {
  return (
    <div id="social-profiles">
      <nav className="social-menu">
        <ul>
          {socialMediaLinks.map((link) => (
            <li key={link.name} className="menu-item">
              <a href={link.url} target="_blank" rel="noreferrer">
                <span className="mdi"></span>
                <span className="screen-reader-text">{link.name} Profile</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SocialProfiles;
