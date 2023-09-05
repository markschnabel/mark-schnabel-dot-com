import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const Brand = ({ closeMobileMenu } ) => {
  const scrollToTop = () => {
    closeMobileMenu();
    scroll.scrollToTop();
  };

  return (
    <button
      onClick={scrollToTop}
      className="tracking-extra-wide text-xl font-normal cursor-pointer uppercase hover:text-accent transition-all ease-in-out duration-500"
    >
      MARK SCHNABEL
    </button>
  );
};

export default Brand;
