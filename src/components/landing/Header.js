import React from 'react';
import Fade from 'react-reveal/Fade';

const Header = () => {
  return (
    <div className="absolute z-20 flex flex-col justify-center h-2/5">
      <div className="absolute ml-5% z-5" style={{ marginTop: '25vh' }}>
        <h1 className="site-header ml-10% font-semibold uppercase my-1 tracking-wide leading-none bold-reveal">
          <Fade bottom cascade delay={250}>
            Mark
          </Fade>
        </h1>
        <h1 className="site-header ml-10% font-semibold uppercase my-1 tracking-wide leading-none bold-reveal">
          <Fade bottom cascade delay={600}>
            Schnabel
          </Fade>
        </h1>
        <h2 className="site-subheader md:mt-3 md:ml-10% w-100% uppercase tracking-extra-wide leading-none">
          <Fade bottom cascade delay={950} distance="100px">
            Software Engineer
          </Fade>
        </h2>
      </div>
    </div>
  );
};

export default Header;
