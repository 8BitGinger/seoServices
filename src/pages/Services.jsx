import React from 'react';
import { motion } from 'framer-motion';
import placeholder from '../assets/Placeholder_view_vector.svg.png';
import { fadeIn } from '../variants';
import local from '../assets/local-seo2.jpg';
import seoBack from '../assets/seo-background.jpg';
import content from '../assets/content.jpg';
import monitoring from '../assets/monitoring.jpg';
import competitor from '../assets/competitor.jpg';

const Services = () => {
  return (
    <>
      <div className="column card">
        <h1>Services</h1>
        <img className="list-image2" alt="seo background" src={seoBack}></img>

        <h3>
          Website audit and optimization: Identifies technical SEO issues,
          keyword optimization, and content recommendations for improved
          ranking. Focus on local SEO: Caters specifically to businesses with a
          local presence, optimizing their websites and online profiles for
          local search results.
        </h3>
      </div>
      <div className="list">
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="flex w-1/2 flex-col"
        >
          <div className="column">
            <div className="row">
              <img
                className="list-image"
                alt="local optimization"
                src={local}
              ></img>

              <h3>
                Local SEO optimization: Manages Google My Business listing,
                optimizes local citations, and builds local backlinks.
              </h3>
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
                Content creation and marketing: Develops high-quality,
                SEO-friendly content that attracts organic traffic and
                engagement.
              </h3>
              <img
                className="list-image"
                alt="content creation"
                src={content}
              ></img>
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
              <img
                className="list-image"
                alt="competitor anaylsis"
                src={competitor}
              ></img>

              <h3>
                Competitor analysis: Tracks competitors' SEO strategies and
                identifies opportunities for differentiation.
              </h3>
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
                Ongoing monitoring and reporting: Provides regular updates on
                website performance and SEO progress.
              </h3>
              <img
                className="list-image"
                alt="ongoing monitoring"
                src={monitoring}
              ></img>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Services;
