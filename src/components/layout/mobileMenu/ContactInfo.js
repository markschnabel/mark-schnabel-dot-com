import React from 'react'
import styled from 'react-emotion'
import Fade from 'react-reveal'

const ContactInfoWrapper = styled.div`
  ${tw`text-center mt-1`};
`
const InfoLink = styled.a`
  ${tw`italic block hover:text-accent mt-1`};
  transition: color 0.5s ease;
`

const ContactInfo = () => {
  return (
    <ContactInfoWrapper>
      <Fade bottom cascade>
        <InfoLink href="mailto:mark.schnabel@markschnabel.com" target="_top">
          mark.schnabel@markschnabel.com
        </InfoLink>
      </Fade>
      <Fade bottom cascade>
        <InfoLink href="tel:+6033152828">603-315-2828</InfoLink>
      </Fade>
    </ContactInfoWrapper>
  )
}

export default ContactInfo
