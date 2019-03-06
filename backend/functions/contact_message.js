import { isEmpty, validate } from '../validators'
import sendEmail from '../sendEmail'

exports.handler = function(event, _, callback) {
  /**
   * Function to serve a response to the client
   * @param {The object to send back to the client} body
   */
  const send = body => {
    callback(null, {
      statusCode: 200,
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
    send({ error: 'No input fields provided' })
  }

  let requestBody

  // If imporoperly formatted data provided cancel
  try {
    requestBody = JSON.parse(event.body)
  } catch {
    send({ error: 'Input was not parsable.' })
  }

  const { isValid, errors } = validate(requestBody)

  if (!isValid) {
    send(errors)
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
      send({
        success:
          'Success! Your message has been sent to me. I will review it and get back to you as soon as possible!',
      })
    })
    .catch(_err => {
      send({
        error: `Sorry! It seems something has gone wrong while processing your message. 
        Please try again shortly or feel free to contact me using one of the designated methods listed next to this form.
        Thank you for your patience`,
      })
    })
}
