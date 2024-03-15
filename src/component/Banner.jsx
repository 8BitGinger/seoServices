import React from 'react';
import bannerLogo from '../assets/skyrocketSEO.png';

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerLogo} alt="tech screens with statistics" />
      <div className="hero-text">
        <h1>SkyRocket SEO</h1>
        <p>Let us SkyRocket your Site&apos;s Visibility!</p>
      </div>
    </div>
  );
};

export default Banner;
