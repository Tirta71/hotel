import React from "react";

const socialMediaLinks = [
  { name: "Facebook", url: "http://facebook.com" },
  { name: "Twitter", url: "http://twitter.com" },
  { name: "Instagram", url: "http://instagram.com" },
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
