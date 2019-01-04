import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

import Links from './Links'
import ContactIcons from './ContactIcons'
import ContactInfo from './ContactInfo'

const MenuWrapper = styled.div`
  ${tw`fixed pin flex flex-col items-center justify-center w-100% min-h-screen
  bg-background lg:hidden`};
`

const MobileMenu = ({ mobileMenuIsOpen }) => {
  if (mobileMenuIsOpen) {
    return (
      <MenuWrapper mobileMenuIsOpen={mobileMenuIsOpen}>
        <Links />
        <ContactIcons />
        <ContactInfo />
      </MenuWrapper>
    )
  } else {
    return null
  }
}

MobileMenu.propTypes = {
  mobileMenuIsOpen: PropTypes.bool.isRequired,
}

export default MobileMenu
