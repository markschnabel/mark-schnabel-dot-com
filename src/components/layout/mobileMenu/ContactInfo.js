import React from 'react'
import styled from '@emotion/styled'

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
        <InfoLink href="mailto:mark.schnabel@markschnabel.com" target="_top">
          mark.schnabel@markschnabel.com
        </InfoLink>
        <InfoLink href="tel:+6033152828">603-315-2828</InfoLink>
    </ContactInfoWrapper>
  )
}

export default ContactInfo
