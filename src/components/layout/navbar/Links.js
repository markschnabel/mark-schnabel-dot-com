import React from 'react'
import styled from 'react-emotion'
import { Link as SmoothScrollLink } from 'react-scroll'

const StyledList = styled.ul`
  ${tw`list-reset hidden lg:inline-block`};
`
const StyledListItem = styled.ul`
  ${tw`list-reset inline-block`};
`
const StyledScrollLink = styled(SmoothScrollLink)`
  ${tw`font-light tracking-extra-wide text-lg ml-6 cursor-pointer hover:text-accent`};
  transition: all 0.5s ease;
`

const Links = () => {
  return (
    <StyledList>
      <StyledListItem>
        <StyledScrollLink
          to="portfolioSection"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          PORTFOLIO
        </StyledScrollLink>
      </StyledListItem>
      <StyledListItem>
        <StyledScrollLink to="aboutSection" spy={true} smooth={true} duration={500} offset={-70}>
          ABOUT
        </StyledScrollLink>
      </StyledListItem>
      <StyledListItem>
        <StyledScrollLink to="contactSection" spy={true} smooth={true} duration={500} offset={-70}>
          CONTACT
        </StyledScrollLink>
      </StyledListItem>
    </StyledList>
  )
}

export default Links
