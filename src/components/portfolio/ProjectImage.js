import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';

const ProjectImage = ({ image, reverse, projectLink, repoLink }) => {
  const hasProjectLink = projectLink && projectLink.length;

  const link = hasProjectLink ? projectLink : repoLink;
  const hoverText = hasProjectLink ? 'Visit Project' : 'View Source';

  return (
    <Col lg={6} style={{ padding: 0 }}>
      <Fade
        delay={50}
        distance="50px"
        left={!reverse}
        right={!!reverse}
      >
        <div className="project-image">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Img fluid={image.childImageSharp.fluid} style={{ borderRadius: '10px' }} />
            <div className="absolute pin opacity-0 w-100% h-100% flex flex-col items-center justify-center hover-overlay">
              <p className="text-white text-3xl font-semibold">{hoverText}</p>
            </div>
          </a>
        </div>
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
