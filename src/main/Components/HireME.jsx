import React from "react";

const HireME = () => {
  return (
    <div className="user-details-section">
      <div className="user-avatar-container">
        <span className="user-avatar-line"></span>
        <a className="url rounded-circle" rel="contact" title="Taras Migulko" href="/ui_migulko">
          <picture >
            <source
              srcset="https://cdn.dribbble.com/users/1998175/avatars/normal/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868"
              media="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx)"
            />
            <source srcset="https://cdn.dribbble.com/users/1998175/avatars/small/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868" />
            <img
              className="photo rounded-circle"
              alt="Taras Migulko"
              src="https://cdn.dribbble.com/users/1998175/avatars/small/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868"
            />
          </picture>
        </a>
        <span className="user-avatar-line"></span>
      </div>

      <a className="user-name" rel="contact" href="/ui_migulko">
        Shivanshu Shrivastava
      </a>

      <div className="user-bio">Email me ssshrivastava😉. cz</div>
      <button type="button" className="btn my-2 btn-danger btn-rounded mb-5">Hire Me 😉</button>

     
    </div>
  );
};

export default HireME;
