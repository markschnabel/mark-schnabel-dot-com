import React from 'react'
import { FaGithub, FaLinkedin, FaBitbucket } from 'react-icons/fa'
import styled, { css } from 'react-emotion'

const IconLinksWrapper = styled.div`
  ${tw`absolute flex justify-end w-100%`};
  bottom: 15px;
`

const IconLinkStyle = css`
  ${tw`text-lg ml-6 text-grey-light cursor-pointer`};
  transition: all 0.25s ease;
  &:hover {
    fill: #b8572c;
  }
`

const ContactIcons = () => {
  return (
    <IconLinksWrapper>
      <a
        href="https://github.com/markschnabel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className={IconLinkStyle} />
      </a>
      <a
        href="http://linkedin.com/in/mark-j-schnabel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className={IconLinkStyle} />
      </a>
      <a
        href="https://bitbucket.org/markschnabel/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaBitbucket className={IconLinkStyle} />
      </a>
    </IconLinksWrapper>
  )
}

export default ContactIcons
