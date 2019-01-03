import React from 'react'
import styled from 'react-emotion'

const StyledBrand = styled.a`
  ${tw`tracking-extra-wide text-lg font-normal cursor-pointer uppercase hover:text-accent`};
  transition: all 0.5s ease;
`

const Brand = () => {
  return (
    <StyledBrand>
      MARK SCHNABEL 
    </StyledBrand>
  )
}

export default Brand
