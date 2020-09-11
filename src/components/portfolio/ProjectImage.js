import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';

const ImageContainer = styled.div`
  position: relative;
  max-width: 600px;
  max-height: 400px;
  height: 100%;
  width: 100%;
  margin: auto;
  transition: all 0.6s ease;
`;
const StyledImg = styled(Img)`
  border-radius: 10px;
`;
const HoverOverlay = styled.div`
  ${tw`absolute pin opacity-0 w-100% h-100% flex flex-col items-center justify-center`};
  max-width: 600px;
  max-height: 400px;
  transition: all 0.6s ease;

  &:hover {
    box-shadow: inset 0 0 150px #000000;
    background: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    opacity: 1;
  }
`;
const HoverText = styled.p`
  ${tw`text-white text-3xl font-semibold `};
`;

const ProjectImage = ({ image, reverse, projectLink, repoLink }) => {
  // Since the project may not be hosted anywhere this should default to use the
  // repository link
  const link = projectLink.length >= 1 ? projectLink : repoLink;
  const hoverText = projectLink.length >= 1 ? 'Visit Project' : 'View Source';

  return (
    <Col lg={6} style={{ padding: 0 }}>
      <Fade
        delay={50}
        distance="50px"
        left={!reverse}
        right={!!reverse}
      >
        <ImageContainer>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <StyledImg fluid={image.childImageSharp.fluid} />
            <HoverOverlay>
              <HoverText>{hoverText}</HoverText>
            </HoverOverlay>
          </a>
        </ImageContainer>
      </Fade>
    </Col>
  );
};

ProjectImage.propTypes = {
  image: PropTypes.object.isRequired,
  reverse: PropTypes.bool.isRequired,
  projectLink: PropTypes.string,
  repoLink: PropTypes.string.isRequired
};

export default ProjectImage;
