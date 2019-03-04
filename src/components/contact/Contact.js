import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import SectionHeader from '../shared/SectionHeader'
import ContactLinks from './ContactLinks'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div style={{ marginTop: '90px' }}>
      <SectionHeader headerText="Contact" />
      <Grid>
        <Row>
          <Col lg="6">
            <ContactForm />
          </Col>
          <Col lg="6">
            <ContactLinks />
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default Contact
