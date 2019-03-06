import validate from './helpers/validate'
import isEmpty from '../utils/isEmpty'
import sendEmail from './helpers/sendEmail'

exports.handler = function(event, _, callback) {
  /**
   * Function to serve a response to the client
   * @param {The object to send back to the client} body
   */
  const send = (statusCode, body) => {
    callback(null, {
      statusCode,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept',
      },
      body: JSON.stringify(body),
    })
  }

  // If no data whatsoever has been provided cancel
  if (isEmpty(event.body)) {
    send(400, { errors: { general: 'No input fields provided' } })
    return
  }

  let requestBody

  // If imporoperly formatted data provided cancel
  try {
    requestBody = JSON.parse(event.body)
  } catch {
    send(400, { errors: { general: 'Input was not parsable.' } })
    return
  }

  const { isValid, errors } = validate(requestBody)

  if (!isValid) {
    send(400, { errors })
    return
  }

  // Create email
  const options = {
    to: 'mark.schnabel@markschnabel.com',
    subject: 'Test',
    html: `
      <strong>First Name:</strong> ${requestBody.firstName}<br/>
      <strong>Last Name:</strong> ${requestBody.lastName}<br/>
      <strong>Phone Number:</strong> ${requestBody.phoneNumber}<br/>
      <strong>Email:</strong> ${requestBody.email}<br/>
      <strong>Message:</strong> ${requestBody.message} 
    `,
  }

  // Send email & return success/error
  sendEmail(options)
    .then(() => {
      send(200, {
        success:
          "Success! Your message has been sent. I'll review it and get back to you as soon as possible! Thank you.",
      })
    })
    .catch(_err => {
      send(400, {
        errors: {
          general: `Sorry! It seems something has gone wrong while processing your message.
        Please try again shortly or feel free to contact me using one of the designated methods listed next to this form.
        Thank you for your patience`,
        },
      })
    })
}
