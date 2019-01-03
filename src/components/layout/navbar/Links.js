import React from 'react'
import styled from 'react-emotion'

const StyledList = styled.ul`
  ${tw`list-reset hidden lg:inline-block`};
`
const StyledListItem = styled.ul`
  ${tw`list-reset inline-block`};
`
const StyledLink = styled.a`
  ${tw`font-light tracking-extra-wide text-lg ml-6 cursor-pointer hover:text-accent`};
  transition: all 0.5s ease;
`

const Links = () => {
  return (
    <StyledList>
      <StyledListItem>
        <StyledLink>PORTFOLIO</StyledLink>
      </StyledListItem>
      <StyledListItem>
        <StyledLink>ABOUT</StyledLink>
      </StyledListItem>
      <StyledListItem>
        <StyledLink>CONTACT</StyledLink>
      </StyledListItem>
    </StyledList>
  )
}

export default Links
