import React from 'react'
import { FaGithub, FaBitbucket, FaLinkedin } from 'react-icons/fa'
import styled from 'react-emotion'

import { colors as twColors } from '../../../../tailwind'

const ContactIconsWrapper = styled.div`
  ${tw`inline-block w-100% text-center mt-16`};
`

const StyledIconLink = styled.a`
  ${tw`text-xl cursor-pointer mx-4`};
  &:hover {
    svg {
      fill: ${twColors['accent']};
    }
  }
  transition: all 0.5s ease;
`

const ContactIcons = () => {
  return (
    <ContactIconsWrapper>
      <StyledIconLink
        href="https://github.com/markschnabel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </StyledIconLink>
      <StyledIconLink
        href="https://www.linkedin.com/in/mark-j-schnabel/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </StyledIconLink>
      <StyledIconLink
        href="https://bitbucket.org/markschnabel/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaBitbucket />
      </StyledIconLink>
    </ContactIconsWrapper>
  )
}

export default ContactIcons
