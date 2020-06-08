import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import PageLinks from './PageLinks'
import ContactIcons from './ContactIcons'
import ContactInfo from './ContactInfo'

const MenuWrapper = styled.div`
  ${tw`fixed pin bg-background lg:hidden w-100% h-100%`};
  opacity: ${props => (props.mobileMenuIsOpen ? '1' : '0')};
  z-index: ${props => (props.mobileMenuIsOpen ? '1' : '0')};
  transition: opacity 0.25s ease;
`

const MobileMenu = ({ mobileMenuIsOpen, closeMobileMenu }) => {
  return (
    <MenuWrapper mobileMenuIsOpen={mobileMenuIsOpen}>
      <PageLinks closeMobileMenu={closeMobileMenu} />
      <ContactIcons />
      <ContactInfo />
    </MenuWrapper>
  )
}

MobileMenu.propTypes = {
  mobileMenuIsOpen: PropTypes.bool.isRequired,
  closeMobileMenu: PropTypes.func.isRequired,
}

export default MobileMenu
