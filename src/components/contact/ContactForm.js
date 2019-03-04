import React from 'react'
import styled from 'react-emotion'
import Fade from 'react-reveal/Fade'

const StyledInput = styled.input`
  ${tw`bg-background rounded h-12 font-secondary border-1 tracking-wide border-grey-dark border-solid font-light
  px-2 text-lg outline-none py-2 mb-3 hover:border-accent focus:border-primary`};
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
const RequiredAsterix = styled.span`
  ${tw`text-accent`};
`
const StyledTextArea = styled.textarea`
  ${tw`bg-background w-100% rounded font-secondary tracking-wide border-2 border-grey-dark border-solid font-light
  min-h-32 min-w-32 px-2 text-lg hover:border-accent focus:border-primary py-2`};
  transition: border 0.5s ease;
  min-height: 150px;
  resize: vertical;
`
const SubmitButton = styled.button`
  ${tw`border-solid border-2px border-white text-white bg-transparent py-4 
  text-lg font-semibold cursor-pointer w-100% my-6 uppercase
  hover:bg-white hover:text-black inline mr-5%`};
  transition: all 0.3s ease;
`
const HelperText = styled.p`
  ${tw`text-grey-light italic mb-4`};
`
const HoneyPot = styled.div`
  display: none;
`

const ContactForm = () => {
  return (
    <Fade bottom delay={100} distance="25px">
      <form
        name="contact"
        method="POST"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="full-name"
      >
        <HoneyPot>
          <label htmlFor="full-name">
            Don’t fill out this field if you’re a human.
          </label>
          <input type="text" id="full-name" name="full-name" />
        </HoneyPot>
        <InlineInputsSection>
          <InlineInputContainer>
            <StyledLabel htmlFor="firstName">First Name</StyledLabel>
            <StyledInput
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
          </InlineInputContainer>
          <InlineInputContainer>
            <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
            <StyledInput
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
          </InlineInputContainer>
        </InlineInputsSection>
        <StyledLabel htmlFor="email">
          Email
          <RequiredAsterix>*</RequiredAsterix>
        </StyledLabel>
        <StyledInput
          type="email"
          id="email"
          name="email"
          placeholder="Email Address (Required)"
          width="100%"
          required
        />
        <StyledLabel htmlFor="phone">Phone</StyledLabel>
        <StyledInput
          type="phone"
          id="phone"
          name="phone"
          placeholder="Phone Number"
          width="100%"
        />
        <StyledLabel htmlFor="subject">
          Subject
          <RequiredAsterix>*</RequiredAsterix>
        </StyledLabel>
        <StyledInput
          type="text"
          id="subject"
          name="subject"
          pattern=".{5,100}"
          placeholder="Subject (Required)"
          required
        />
        <HelperText>
          Subjects must be at least 5 characters and less than 100 characters.
        </HelperText>
        <StyledLabel htmlFor="message">
          Message
          <RequiredAsterix>*</RequiredAsterix>
        </StyledLabel>

        <StyledTextArea
          type="text"
          id="message"
          pattern=".{10,1000}"
          placeholder="Message (Required)"
          required
        />
        <HelperText>
          Messages must be at least 10 characters and less than 1000 characters.
        </HelperText>
        <SubmitButton type="submit">send</SubmitButton>
      </form>
    </Fade>
  )
}

export default ContactForm
