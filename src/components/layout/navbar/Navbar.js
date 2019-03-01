import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

import Container from '../../shared/Container'
import Brand from './Brand'
import MobileMenuButton from './MobileMenuButton'
import Links from './Links'

const StyledNav = styled.nav`
  ${tw`z-50 fixed pin-t w-100% py-5`};
`
const FlexContainer = styled.div`
  ${tw`flex justify-between`};
`

const Navbar = ({ toggleMobileMenu, mobileMenuIsOpen }) => {
  return (
    <StyledNav>
      <Container>
        <FlexContainer>
          <Brand />
          <MobileMenuButton
            toggleMobileMenu={toggleMobileMenu}
            mobileMenuIsOpen={mobileMenuIsOpen}
          />
          <Links />
        </FlexContainer>
      </Container>
    </StyledNav>
  )
}

Navbar.propTypes = {
  toggleMobileMenu: PropTypes.func.isRequired,
  mobileMenuIsOpen: PropTypes.bool.isRequired,
}

export default Navbar
