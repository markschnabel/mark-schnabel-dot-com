import React from 'react';
import PropTypes from 'prop-types';

import Container from '../../shared/Container';
import Brand from './Brand';
import MobileMenuButton from './MobileMenuButton';
import Links from './Links';

const Navbar = ({
  navShouldBeTransparent,
  toggleMobileMenu,
  mobileMenuIsOpen,
  closeMobileMenu
}) => {
  const navBgClass = navShouldBeTransparent ? 'bg-transparent' : 'bg-background';

  return (
    <nav
      className={`z-50 fixed pin-t w-full py-5 ${navBgClass}`}
      style={{ transition: 'background 0.5s ease;' }}
    >
      <Container>
        <div className="flex justify-between">
          <Brand closeMobileMenu={closeMobileMenu} />
          <MobileMenuButton
            toggleMobileMenu={toggleMobileMenu}
            mobileMenuIsOpen={mobileMenuIsOpen}
          />
          <Links />
        </div>
      </Container>
    </nav>
  );
};

Navbar.propTypes = {
  navShouldBeTransparent: PropTypes.bool.isRequired,
  toggleMobileMenu: PropTypes.func.isRequired,
  mobileMenuIsOpen: PropTypes.bool.isRequired
};

export default Navbar;
