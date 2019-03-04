import React from 'react'
import styled from 'react-emotion'
import Fade from 'react-reveal'

const StyledList = styled.ul`
  ${tw`list-reset text-center pt-48 m-auto`};
`
const StyledLink = styled.a`
  ${tw`text-3xl my-32 cursor-pointer font-semibold tracking-extra-wide hover:text-accent`};
  transition: color 0.5s ease;
`

const Links = () => {
  return (
    <StyledList>
      <li>
        <StyledLink>
            PORTFOLIO
        </StyledLink>
      </li>
      <li>
        <StyledLink>
            ABOUT
        </StyledLink>
      </li>
      <li>
        <StyledLink>
            CONTACT
        </StyledLink>
      </li>
    </StyledList>
  )
}

export default Links
