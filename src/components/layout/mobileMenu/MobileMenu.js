import React from 'react';
import PropTypes, { element } from 'prop-types';

import PageLinks from './PageLinks';
import ContactIcons from './ContactIcons';
import ContactInfo from './ContactInfo';

const MobileMenu = ({ mobileMenuIsOpen, closeMobileMenu }) => {
  const opacity = mobileMenuIsOpen ? 1 : 0;
  const zIndex = mobileMenuIsOpen ? 40 : -100;
  const transition = 'opacity 0.25s ease';

  return (
    <div
      id="wtf"
      className="fixed bg-background lg:hidden w-full h-screen"
      style={{ opacity, zIndex, transition }}
      mobileMenuIsOpen={mobileMenuIsOpen}
    >
      <PageLinks closeMobileMenu={closeMobileMenu} />
      <ContactIcons />
      <ContactInfo />
    </div>
  );
};

MobileMenu.propTypes = {
  mobileMenuIsOpen: PropTypes.bool.isRequired,
  closeMobileMenu: PropTypes.func.isRequired
};

export default MobileMenu;
