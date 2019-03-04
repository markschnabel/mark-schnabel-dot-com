import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styled from 'react-emotion'
import { StaticQuery, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'

import SectionHeader from '../shared/SectionHeader'
import ProfilePicture from './ProfilePicture'
import Bio from './Bio'
import SkillsHeader from './SkillsHeader'
import Skill from './Skill'

const SkillsSectionHeader = styled.h2`
  ${tw`text-xl m-0 text-center tracking-wide font-semibold uppercase mt-20`};
`
const Underline = styled.div`
  ${tw`bg-white w-100% mb-2 m-auto mt-1`};
  max-width: 180px;
  height: 1px;
`

function createSkills(skillsString) {
  return skillsString.split(', ').map(skillName => {
    return <Skill name={skillName} />
  })
}

const About = () => {
  return (
    <StaticQuery
      query={graphql`
        query aboutDataQuery {
          markdownRemark(fileAbsolutePath: { regex: "/about/about.*\\.md$/" }) {
            frontmatter {
              bio
              programmingLanguages
              libsAndFrameworks
              toolsEnvsDatabases
            }
          }
        }
      `}
      render={data => {
        const {
          bio,
          programmingLanguages,
          libsAndFrameworks,
          toolsEnvsDatabases,
        } = data.markdownRemark.frontmatter

        return (
          <>
            <div>
              <SectionHeader headerText={'ABOUT'} />
              <Grid>
                <Row>
                  <Col lg={6} style={{ padding: 0 }}>
                    <ProfilePicture />
                  </Col>
                  <Col lg={6} style={{ padding: 0 }}>
                    <Bio bioText={bio} />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Fade left delay={50} distance="25px">
                      <SkillsSectionHeader>
                        Technical Skills
                      </SkillsSectionHeader>
                    </Fade>
                    <Fade right delay={50} distance="25px">
                      <Underline />
                    </Fade>
                  </Col>
                </Row>
                <Row>
                  <Col lg={4}>
                    <Fade bottom delay={50} distance="25px">
                      <SkillsHeader headerText={'Programming Languages'} />

                      <div style={{ textAlign: 'center' }}>
                        {createSkills(programmingLanguages)}
                      </div>
                    </Fade>
                  </Col>
                  <Col lg={4}>
                    <Fade top delay={50} distance="25px">
                      <SkillsHeader headerText={'Libraries & Frameworks'} />
                      <div style={{ textAlign: 'center' }}>
                        {createSkills(libsAndFrameworks)}
                      </div>
                    </Fade>
                  </Col>
                  <Col lg={4}>
                    <Fade bottom delay={50} distance="25px">
                      <SkillsHeader
                        headerText={'Tools, Databases & Environments'}
                      />
                      <div style={{ textAlign: 'center' }}>
                        {createSkills(toolsEnvsDatabases)}
                      </div>
                    </Fade>
                  </Col>
                </Row>
              </Grid>
            </div>
          </>
        )
      }}
    />
  )
}

export default About
