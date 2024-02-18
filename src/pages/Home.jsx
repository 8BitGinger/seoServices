import React from 'react';
import Banner from '../component/Banner';
import placeholder from '../assets/Placeholder_view_vector.svg.png';
import { motion } from 'framer-motion';
import data from '../assets/data.jpg';
import local from '../assets/local.jpg';
import sustain from '../assets/sustain.jpg';
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="container">
      <Banner />
      <div className="card">
        <h1>What is SEO?</h1>
        <p>
          SEO is a set of processes aimed at improving a website’s visibility in
          search engines, like Google, with the goal of getting more organic
          traffic. SEO is about fulfilling users’ search needs by creating
          relevant, high-quality content and providing the best possible user
          experience.
        </p>
      </div>
      <div className="list">
        <h1>How do we tackle SEO?</h1>
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="flex w-1/2 flex-col"
        >
          <div className="column">
            <div className="row">
              <h3>
                Focus on local SEO: Caters specifically to businesses with a
                local presence, optimizing their websites and online profiles
                for local search results.
              </h3>
              <img className="list-image" alt="local seo" src={local}></img>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="flex w-1/2 flex-col"
        >
          <div className="column">
            <div className="row">
              <img className="list-image" alt="data driven" src={data}></img>
              <h3>
                Data-driven approach: Utilizes advanced SEO tools and analytics
                to track progress and measure results, providing transparent
                reporting to clients.
              </h3>{' '}
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="flex w-1/2 flex-col"
        >
          <div className="column">
            <div className="row">
              <h3>
                Sustainable SEO practices: Emphasizes long-term, ethical SEO
                strategies that avoid black hat tactics and ensure website
                longevity. Affordable pricing: Offers flexible and transparent
                pricing options tailored to the needs and budget of each client.
              </h3>
              <img
                className="list-image"
                alt="sustainable seo"
                src={sustain}
              ></img>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
