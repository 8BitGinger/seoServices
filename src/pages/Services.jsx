import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import local from '../assets/local-seo2.jpg';
import seoBack from '../assets/services.jpg';
import content from '../assets/content.jpg';
import monitoring from '../assets/monitoring.jpg';
import competitor from '../assets/competitor.jpg';
import optimized from '../assets/seo-optimization.jpg';
import mobile from '../assets/rocket-mobile.jpg';

const Services = () => {
  return (
    <section className="container" id="top">
      <article className="column">
        <h1>Our Services</h1>
        <img
          className="list-image2"
          alt="man pointing at word SEO"
          src={seoBack}
        ></img>
        <div className="card">
          <h3>We Focus on YOUR needs! </h3>
        </div>
      </article>
      <section className="list">
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="flex w-1/2 flex-col"
        >
          <div className="column">
            <div className="row">
              <p>
                Website audit and optimization: Identifies technical SEO issues,
                keyword optimization, and content recommendations for improved
                ranking.
              </p>
              <img
                className="list-image"
                alt="tablet next to 3d SEO graph"
                src={optimized}
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
                alt="stack of documents"
                src={local}
              ></img>

              <p>
                Local SEO optimization: Manages Google My Business listing,
                optimizes local citations, and builds local backlinks.
              </p>
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
              <p>
                Content creation and marketing: Develops high-quality,
                SEO-friendly content that attracts organic traffic and
                engagement.
              </p>
              <img
                className="list-image"
                alt="camera surrounded by computer items"
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
                alt="competitor anaylsis word cloud"
                src={competitor}
              ></img>

              <p>
                Competitor analysis: Tracks competitors SEO strategies and
                identifies opportunities for differentiation.
              </p>
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
              <p>
                Ongoing monitoring and reporting: Provides regular updates on
                website performance and SEO progress.
              </p>
              <img
                className="list-image"
                alt="empty data center"
                src={monitoring}
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
                alt="rocket ship launching from phone screen"
                src={mobile}
              ></img>

              <p>
                We ensure your website utilizes responsive web design RWD
                principles. By prioritizing mobile-friendliness, you capture
                more leads and convert website traffic into sales.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </section>
  );
};

export default Services;
