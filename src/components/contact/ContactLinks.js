import React from 'react'
import styled from 'react-emotion'
import { FaGithub, FaLinkedin, FaBitbucket } from 'react-icons/fa'

const ContactLinksContainer = styled.div`
  ${tw`mx-auto h-100% text-center flex flex-col justify-center items-center `};
  max-height: 576px;
`
const Section = styled.div`
  ${tw`my-2`};
`
const StyledIconLink = styled.a`
  ${tw`text-2xl lg:text-3xl mx-5`};
`
const StyledTextLink = styled.a`
  ${tw`block text-lg lg:text-xl underline font-light italic cursor-pointer`};
`
const ResumeButton = styled.button`
  ${tw`border-solid border-2px border-white text-white bg-transparent py-2 
  text-lg font-thin cursor-pointer w-100% my-2
  hover:bg-white hover:text-black inline mr-5%`};
  transition: all 0.3s ease;
  max-width: 260px;
`

const ContactLinks = () => {
  return (
    <ContactLinksContainer>
      <div>
        <Section>
          <StyledIconLink
            href="http://github.com/markschnabel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </StyledIconLink>
          <StyledIconLink
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </StyledIconLink>
          <StyledIconLink
            href="http://linkedin.com/in/mark-j-schnabel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBitbucket />
          </StyledIconLink>
        </Section>
      </div>
      <Section>
        <StyledTextLink href="mailto:mark.schnabel@markschnabel.com">
          mark.schnabel@markschnabel.com
        </StyledTextLink>
        <StyledTextLink href="tel:+">603-315-2828</StyledTextLink>
      </Section>
      <Section>
        <ResumeButton>RESUME (PDF)</ResumeButton>
        <ResumeButton>RESUME (DOC) </ResumeButton>
      </Section>
    </ContactLinksContainer>
  )
}

export default ContactLinks
