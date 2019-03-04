import React from 'react'
import styled from 'react-emotion'

const StyledInput = styled.input`
  ${tw`bg-background rounded h-12 border-1 border-grey-dark border-solid 
  px-2 text-lg outline-none py-2 mb-6 hover:border-accent focus:border-primary`};
  transition: all 0.5s ease;
  width: 100%;
`
const InlineInputsSection = styled.div`
  ${tw`lg:flex lg:justify-between`};
`
const InlineInputContainer = styled.div`
  ${tw`block`};
  @media screen and (min-width: 992px) {
    width: 47.5%;
  }
`
const StyledLabel = styled.label`
  ${tw`block text-lg mb-2`};
`
const StyledTextArea = styled.textarea`
  ${tw`bg-background w-100% rounded border-2 border-grey-dark border-solid 
  min-h-32 min-w-32 px-2 text-lg hover:border-primary py-2`};
  transition: border 0.5s ease;
  min-height: 150px;
  resize: vertical;
`

const ContactForm = () => {
  return (
    <form>
      <InlineInputsSection>
        <InlineInputContainer>
          <StyledLabel htmlFor="firstName">First Name</StyledLabel>
          <StyledInput type="text" id="firstName" placeholder="First Name" />
        </InlineInputContainer>
        <InlineInputContainer>
          <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
          <StyledInput type="text" id="lastName" placeholder="Last Name" />
        </InlineInputContainer>
      </InlineInputsSection>
      <StyledLabel htmlFor="email">Email*</StyledLabel>
      <StyledInput
        type="email"
        id="email"
        placeholder="Email Address (Required)"
        width="100%"
        required
      />
      <StyledLabel htmlFor="phone">Phone</StyledLabel>
      <StyledInput
        type="phone"
        id="phone"
        placeholder="Phone Number"
        width="100%"
      />
      <StyledLabel htmlFor="message">Message*</StyledLabel>
      <StyledTextArea
        type="text"
        id="message"
        placeholder="Message (Required)"
        required
      />
    </form>
  )
}

export default ContactForm
