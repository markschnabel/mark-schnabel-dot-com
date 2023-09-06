import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <footer className="mb-32 mt-12 lg:my-24 text-center pb-16">
      <Fade left delay={50} distance="50px">
        <p className="text-xl lg:text-2xl font-semibold ">Thank you for visiting!</p>
      </Fade>
      <Fade right delay={50} distance="50px">
        <p className="text-base font-light mt-2 text-grey-light">Copyright {new Date().getFullYear()} © Mark Schnabel</p>
      </Fade>
    </footer>
  );
};

export default Footer;
