import React from 'react'
import styled from 'react-emotion'
import Fade from 'react-reveal'

const StyledList = styled.ul`
  ${tw`list-reset text-center`};
`
const StyledLink = styled.a`
  ${tw`text-3xl my-32 font-semibold tracking-wide text-white cursor-pointer`};
  transition: color 0.5s ease;

  &:hover {
    .react-reveal {
      span {
        ${tw`text-accent`};
        transition: color 0.5s ease;
      }
    }
  }
`

const Links = () => {
  return (
    <StyledList>
      <li>
        <StyledLink>
          <Fade bottom cascade>
            PORTFOLIO
          </Fade>
        </StyledLink>
      </li>
      <li>
        <StyledLink>
          <Fade bottom cascade>
            ABOUT
          </Fade>
        </StyledLink>
      </li>
      <li>
        <StyledLink>
          <Fade bottom cascade>
            CONTACT
          </Fade>
        </StyledLink>
      </li>
    </StyledList>
  )
}

export default Links
