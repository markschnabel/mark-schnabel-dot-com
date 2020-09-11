import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Container from '../../shared/Container';
import Brand from './Brand';
import MobileMenuButton from './MobileMenuButton';
import Links from './Links';
import { colors as twColors } from '../../../../tailwind';

const StyledNav = styled.nav`
  ${tw`z-50 fixed pin-t w-100% py-5`};
  background: ${props =>
    props.navShouldBeTransparent ? 'transparent' : twColors.background};
  transition: background 0.5s ease;
`;
const FlexContainer = styled.div`
  ${tw`flex justify-between`};
`;

const Navbar = ({
  navShouldBeTransparent,
  toggleMobileMenu,
  mobileMenuIsOpen,
  closeMobileMenu
}) => {
  return (
    <StyledNav navShouldBeTransparent={navShouldBeTransparent}>
      <Container>
        <FlexContainer>
          <Brand closeMobileMenu={closeMobileMenu} />
          <MobileMenuButton
            toggleMobileMenu={toggleMobileMenu}
            mobileMenuIsOpen={mobileMenuIsOpen}
          />
          <Links />
        </FlexContainer>
      </Container>
    </StyledNav>
  );
};

Navbar.propTypes = {
  navShouldBeTransparent: PropTypes.bool.isRequired,
  toggleMobileMenu: PropTypes.func.isRequired,
  mobileMenuIsOpen: PropTypes.bool.isRequired
};

export default Navbar;
