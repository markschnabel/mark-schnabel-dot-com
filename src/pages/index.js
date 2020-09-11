import React from 'react';
import { Element } from 'react-scroll';

import Layout from '../components/layout/Layout';
import Landing from '../components/landing/Landing';
import Experience from '../components/experience/Experience';
import Portfolio from '../components/portfolio/Portfolio';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';

const IndexPage = () => (
  <Layout>
    <Landing />
    <Element name="experienceSection">
      <Experience />
    </Element>
    <Element name="portfolioSection">
      <Portfolio />
    </Element>
    <Element name="aboutSection">
      <About />
    </Element>
    <Element name="contactSection">
      <Contact />
    </Element>
  </Layout>
);

export default IndexPage;
