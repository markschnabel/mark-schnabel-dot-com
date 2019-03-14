import React, { Component } from 'react'
import styled from 'react-emotion'
import Fade from 'react-reveal/Fade'
import axios from 'axios'
import validator from 'validator'
import Spinner from 'react-svg-spinner'
import _ from 'lodash'

import isEmpty from '../../utils/isEmpty'

const SpinnerContainer = styled.div`
  ${tw`flex flex-col items-center justify-center`};
  height: 600px;
`
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
const Required = styled.span`
  ${tw`text-accent`};
`
const RequiredAsterix = () => <Required>*</Required>

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
  ${tw`italic mb-4 text-sm`};
  ${props => (props.error ? tw`text-error` : tw`text-grey`)};
`
const Message = styled.p`
  ${tw`p-4 w-100% mb-3 border-solid border-2 font-semibold text-center text-base`};
  border-radius: 5px;
  ${props =>
    props.success
      ? tw`text-success bg-success-light border-success-dark`
      : null};
  ${props =>
    props.error ? tw`text-error bg-error-light border-error-dark` : null};
`

const LAMBDA_URI = '/.netlify/functions/contact_message'

export class ContactForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      subject: '',
      email: '',
      message: '',

      errors: {},
      success: null,
      loading: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setErrors = _.debounce(this.setErrors.bind(this), 700)
    this.setSuccess = _.debounce(this.setSuccess.bind(this), 700)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  setErrors(errors) {
    this.setState({ errors, loading: false, success: null })
  }

  setSuccess(success) {
    this.setState({
      success,
      loading: false,
      errors: {},
      firstName: '',
      lastName: '',
      phone: '',
      subject: '',
      email: '',
      message: '',
    })
  }

  async handleSubmit(e) {
    e.preventDefault()

    await this.setState({ loading: true })

    const errors = {}
    const { firstName, lastName, email, phone, subject, message } = this.state

    if (!validator.isLength(subject, { min: 5, max: 100 })) {
      errors.subject = 'Must be between 5-100 characters.'
    }
    if (!validator.isLength(message, { min: 10, max: 1000 })) {
      errors.message = 'Must be between 10-1000 characters.'
    }
    if (!validator.isEmail(email)) {
      errors.email = 'Must be a valid email address.'
    }

    this.setErrors(errors, () => {
      if (!isEmpty(errors)) {
        return
      }
    })

    axios
      .post(LAMBDA_URI, {
        firstName,
        lastName,
        email,
        phone,
        subject,
        message,
      })
      .then(res => {
        console.log(res)
        this.setSuccess(res.data.success)
      })
      .catch(err => {
        if (typeof err.response.data.errors === 'object') {
          this.setErrors(err.response.data.errors)
        } else {
          this.setErrors({
            general: `I'm sorry. It seems that an unknown error has occured. Please 
                try again shortly or feel free to use one of the designated methods 
                next to this form to contact me! Thank you for your patience`,
          })
        }
      })
  }

  render() {
    if (this.state.loading) {
      return (
        <SpinnerContainer>
          <Spinner color="white" size="30%" />
        </SpinnerContainer>
      )
    }

    let successOrErrorMessage
    const { errors, success } = this.state

    if (!isEmpty(success) && isEmpty(errors)) {
      successOrErrorMessage = <Message success>{success}</Message>
    } else if (!isEmpty(errors.general) && isEmpty(success)) {
      successOrErrorMessage = <Message error>{errors.general}</Message>
    } else {
      successOrErrorMessage = ''
    }

    return (
      <Fade bottom delay={100} distance="25px">
        {successOrErrorMessage}
        <form name="contact" onSubmit={this.handleSubmit}>
          <InlineInputsSection>
            <InlineInputContainer>
              <StyledLabel htmlFor="firstName">First Name</StyledLabel>
              <StyledInput
                type="text"
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={e => this.handleChange(e)}
              />
            </InlineInputContainer>
            <InlineInputContainer>
              <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
              <StyledInput
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={e => this.handleChange(e)}
              />
            </InlineInputContainer>
          </InlineInputsSection>

          <StyledLabel htmlFor="email">
            Email
            <RequiredAsterix />
          </StyledLabel>
          <StyledInput
            type="email"
            name="email"
            placeholder="Email Address (Required)"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
            required
          />
          <HelperText error={'email' in errors}>
            {'email' in errors
              ? errors.email
              : 'Please make sure to use a valid email address so I can get back to you! I promise that your email will not be shared with anyone.'}
          </HelperText>

          <StyledLabel htmlFor="phone">Phone</StyledLabel>
          <StyledInput
            type="phone"
            name="phone"
            placeholder="Phone Number"
            value={this.state.phone}
            onChange={e => this.handleChange(e)}
          />

          <StyledLabel htmlFor="subject">
            Subject
            <RequiredAsterix />
          </StyledLabel>
          <StyledInput
            type="text"
            name="subject"
            placeholder="Subject (Required)"
            value={this.state.subject}
            onChange={e => this.handleChange(e)}
            required
          />
          <HelperText error={'subject' in errors}>
            {'subject' in errors
              ? errors.subject
              : 'Subjects must be at least 5 characters and less than 100 characters.'}
          </HelperText>

          <StyledLabel htmlFor="message">
            Message
            <RequiredAsterix />
          </StyledLabel>
          <StyledTextArea
            type="text"
            name="message"
            placeholder="Message (Required)"
            value={this.state.message}
            onChange={e => this.handleChange(e)}
          />
          <HelperText error={'message' in errors}>
            {'message' in errors
              ? errors.message
              : 'Messages must be at least 10 characters and less than 1000 characters.'}
          </HelperText>

          <SubmitButton type="submit">send</SubmitButton>
        </form>
      </Fade>
    )
  }
}

export default ContactForm
