import React from 'react';
import bannerLogo from '../assets/seo-background2.jpg';

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerLogo} alt="banner" />
      <div className="hero-text">
        <h1>SEO Services</h1>
        <p>Optimize your website with our SEO services</p>
      </div>
    </div>
  );
};

export default Banner;
