import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';

const SectionHeader = ({ headerText }) => {
  return (
    <Fragment>
      <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold uppercase my-1 tracking-wide leading-none bold-reveal">
        <Fade bottom cascade delay={50}>
          {headerText}
        </Fade>
      </h1>
      <Fade left delay={375} distance="50px">
        <hr className="bg-white opacity-50 w-100% mt-4 lg:mt-6 mb-8 lg:mb-20" />
      </Fade>
    </Fragment>
  );
};

export default SectionHeader;
