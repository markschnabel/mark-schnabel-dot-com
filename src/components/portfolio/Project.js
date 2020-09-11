import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-flexbox-grid';

import ProjectText from './ProjectText';
import ProjectImage from './ProjectImage';

const Project = ({
  image,
  title,
  description,
  techStack,
  projectNumber,
  projectLink,
  repoLink,
  reverse
}) => {
  const flexDirection = reverse ? 'row-reverse' : 'row';

  return (
    <Row style={{ flexDirection, paddingBottom: '4rem' }}>
      <ProjectImage
        image={image}
        reverse={reverse}
        projectLink={projectLink}
        repoLink={repoLink}
      />
      <ProjectText
        title={title}
        description={description}
        techStack={techStack}
        projectNumber={projectNumber}
        projectLink={projectLink}
        repoLink={repoLink}
        reverse={reverse}
      />
    </Row>
  );
};

Project.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projectNumber: PropTypes.string.isRequired,
  projectLink: PropTypes.string,
  repoLink: PropTypes.string.isRequired,
  reverse: PropTypes.bool.isRequired
};

export default Project;
