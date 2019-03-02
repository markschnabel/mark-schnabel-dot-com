import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import SectionHeader from '../shared/SectionHeader'
import ProfilePicture from './ProfilePicture'
import Bio from './Bio'

const About = () => {
  return (
    <div>
      <SectionHeader headerText={'ABOUT'} />
      <Grid>
        <Row>
          <Col lg={6} style={{ padding: 0 }}>
            <ProfilePicture />
          </Col>
          <Col lg={6}  style={{ padding: 0 }}>
            <Bio />
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default About
