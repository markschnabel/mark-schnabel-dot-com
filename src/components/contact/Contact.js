import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Fade from 'react-reveal/Fade';

import SectionHeader from '../shared/SectionHeader';
import ContactLinks from './ContactLinks';
import styled from '@emotion/styled';

const Header = styled.h2`
  ${tw`text-6xl m-2`};
`;

const Contact = () => {
  return (
    <div style={{ marginTop: '5rem', marginBottom: '90px' }}>
      <SectionHeader headerText="Contact" />
      <Grid>
        <Row>
          <Col lg={6}>
            <Fade left delay={50} distance="50px">
              <Header>Let's build</Header>
            </Fade>
            <Fade right delay={50} distance="50px">
              <Header>something</Header>
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
