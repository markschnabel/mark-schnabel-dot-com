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
    fill: #B8572C;
  }
`

const ContactIcons = () => {
  return (
    <IconLinksWrapper>
      <a href="https://github.com/markschnabel" target="_blank" rel="noopener noreferrer">
        <FaGithub className={IconLinkStyle} />
      </a>
      <FaLinkedin className={IconLinkStyle} />
      <FaBitbucket className={IconLinkStyle} />
    </IconLinksWrapper>
  )
}

export default ContactIcons
