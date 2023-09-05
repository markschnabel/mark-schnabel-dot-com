import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Fade from 'react-reveal/Fade';

import SectionHeader from '../shared/SectionHeader';
import ContactLinks from './ContactLinks';

const Contact = () => {
  return (
    <div style={{ marginTop: '5rem', marginBottom: '90px' }}>
      <SectionHeader headerText="Contact" />
      <Grid>
        <Row>
          <Col lg={6}>
            <Fade left delay={50} distance="50px">
              <h3 className="text-3xl sm:text-center lg:text-6xl lg:m-2">Let's build</h3>
            </Fade>
            <Fade right delay={50} distance="50px">
              <h3 className="text-3xl sm:text-center lg:text-6xl lg:m-2">something</h3>
            </Fade>
          </Col>
          <Col lg={6}>
            <ContactLinks />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Contact;
