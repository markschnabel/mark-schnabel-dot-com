import React from 'react'
import styled from '@emotion/styled'
import { animateScroll as scroll } from 'react-scroll'

const StyledBrand = styled.a`
  ${tw`tracking-extra-wide text-lg font-normal cursor-pointer uppercase hover:text-accent`};
  transition: all 0.5s ease;
`
const Brand = ({closeMobileMenu} ) => {
  const scrollToTop = () => {
    closeMobileMenu()
    scroll.scrollToTop()
  }
  return <StyledBrand onClick={scrollToTop}>MARK SCHNABEL</StyledBrand>
}

export default Brand
