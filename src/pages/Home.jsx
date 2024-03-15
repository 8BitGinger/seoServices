import Banner from '../component/Banner';
import { motion } from 'framer-motion';
import data from '../assets/data.jpg';
import local from '../assets/local.jpg';
import sustain from '../assets/sustain.jpg';
import { fadeIn } from '../variants';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="container">
      <Banner />
      <p className="card intro">
        In the digital landscape, online visibility is the key to unlocking
        business success. At SkyRocket SEO, we are your one-stop shop for
        achieving top search engine rankings and attracting organic traffic to
        your website. Our expert team utilizes proven SEO strategies to launch
        your website to the top of search results, generate qualified leads, and
        ultimately, skyrocket your bottom line.
      </p>

      <article className="card">
        <h1 className="copy">What is SEO?</h1>

        <p>
          Search Engine Optimization, or SEO, is the art and science of
          propelling your website to the top of search engine results. Simply
          put, it's about ensuring people can easily find your business online
          when they're searching for products or services you offer.
          <br />
          <br />
          At SkyRocket SEO, we achieve this by crafting high-quality, relevant
          content that both users and search engines love. By prioritizing user
          experience and strategically incorporating search terms, we not only
          increase your website's visibility but also attract qualified leads
          genuinely interested in what you offer.
        </p>
      </article>
      <div className="list">
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="flex w-1/2 flex-col"
        >
          <article className="column">
            <h1>How do we SkyRocket your site?</h1>

            <div className="row">
              <p>
                Focus on local SEO: Caters specifically to businesses with a
                local presence, optimizing their websites and online profiles
                for local search results.
              </p>
              <img
                className="list-image"
                alt="laptop with futuristic graphics"
                src={local}
              ></img>
            </div>
          </article>
        </motion.div>
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="flex w-1/2 flex-col"
        >
          <article className="column">
            <div className="row">
              <img
                className="list-image"
                alt="data graph presented in 3d"
                src={data}
              ></img>
              <p>
                Data-driven approach: Utilizes advanced SEO tools and analytics
                to track progress and measure results, providing transparent
                reporting to clients.
              </p>{' '}
            </div>
          </article>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="flex w-1/2 flex-col"
        >
          <article className="column">
            <div className="row">
              <p>
                Sustainable SEO practices: Emphasizes long-term, ethical SEO
                strategies that avoid black hat tactics and ensure website
                longevity.
              </p>
              <img
                className="list-image"
                alt="Mac computer on desk"
                src={sustain}
              ></img>
            </div>
          </article>
        </motion.div>
      </div>
      {/* <Link className="btn" to="/services">
        Learn More!
      </Link> */}
    </section>
  );
};

export default Home;
