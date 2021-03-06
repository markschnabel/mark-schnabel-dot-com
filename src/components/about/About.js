import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';

import SectionHeader from '../shared/SectionHeader';
import ProfilePicture from './ProfilePicture';
import Bio from './Bio';
import SkillsHeader from './SkillsHeader';
import Skill from './Skill';

const SkillsSectionHeader = styled.h2`
  ${tw`text-xl m-0 text-center tracking-wide font-semibold uppercase mt-20`};
`;

const Underline = styled.div`
  ${tw`bg-white w-100% mb-2 m-auto mt-1`};
  max-width: 180px;
  height: 1px;
`;

function formatSkills(skills) {
  return skills.map(skillName => {
    return <Skill key={'skill-' + skillName} name={skillName} />;
  });
}

const About = () => {
  return (
    <StaticQuery
      query={graphql`
        query aboutDataQuery {
          aboutJson {
            professionalBio
            personalBio
            programmingLanguages
            libsAndFrameworks
            toolsEnvsDatabases
          }
        }
      `}

      render={({ aboutJson }) => {
        const {
          professionalBio,
          personalBio,
          programmingLanguages,
          libsAndFrameworks,
          toolsEnvsDatabases
        } = aboutJson;

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
                    <Bio professionalBio={professionalBio} personalBio={personalBio} />
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
                        {formatSkills(programmingLanguages)}
                      </div>
                    </Fade>
                  </Col>
                  <Col lg={4}>
                    <Fade top delay={50} distance="25px">
                      <SkillsHeader headerText={'Libraries & Frameworks'} />
                      <div style={{ textAlign: 'center' }}>
                        {formatSkills(libsAndFrameworks)}
                      </div>
                    </Fade>
                  </Col>
                  <Col lg={4}>
                    <Fade bottom delay={50} distance="25px">
                      <SkillsHeader
                        headerText={'Tools, Databases & Environments'}
                      />
                      <div style={{ textAlign: 'center' }}>
                        {formatSkills(toolsEnvsDatabases)}
                      </div>
                    </Fade>
                  </Col>
                </Row>
              </Grid>
            </div>
          </>
        );
      }}
    />
  );
};

export default About;
