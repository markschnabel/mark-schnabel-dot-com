import React from 'react';

import BackgroundAnimation from './BackgroundAnimation';
import Header from './Header';
import Arrow from './Arrow';
import ContactIcons from './ContactIcons';

const Landing = () => {
  return (
    <div className="relative w-full h-screen">
      <Header />
      <BackgroundAnimation />
      <Arrow />
      <ContactIcons />
    </div>
  );
};

Landing.propTypes = {};

export default Landing;
