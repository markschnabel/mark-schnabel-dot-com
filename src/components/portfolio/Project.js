import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-flexbox-grid';

import ProjectText from './ProjectText';
import ProjectImage from './ProjectImage';

function formatProjectNumber(projectNumber) {
  return projectNumber < 10 ? `0${projectNumber}.` : `${projectNumber}.`;
}

const Project = (props) => {
  const {
    image,
    title,
    description,
    techStack,
    projectNumber,
    projectLink,
    repoLink
  } = props;

  // Flip the styling if were on an even numbered project
  const reverse = (projectNumber % 2) === 0;
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
        projectNumber={formatProjectNumber(projectNumber)}
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
  projectNumber: PropTypes.number.isRequired,
  projectLink: PropTypes.string,
  repoLink: PropTypes.string.isRequired
};

export default Project;
