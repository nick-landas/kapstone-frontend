import React from "react";

export const HeroBanner = () => {
  const logo = "https://pixabay.com/get/g84b6bacbc338e45849b2f47cb8243d90da9d703390b17c498b9896dfb1efd2e59d69cd59ada3d59d801ff317eab615ee.svg";

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
        <img className="hero-banner__image" src={logo} alt="React logo" />
      </div>
      <h1 className="hero-banner__headline">Hey, Y'all!</h1>
      <p className="hero-banner__description">
      This is a chat application using React/Rails, Zustand, Auth0, Tailwindcss, and DaisyUI.
      </p>
    </div>
  );
};
