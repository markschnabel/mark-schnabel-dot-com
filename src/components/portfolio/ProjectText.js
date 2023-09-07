import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

function formatTechStack(techStack) {
  return techStack.join(', ');
}

const ProjectText = ({
  title,
  description,
  techStack,
  projectNumber,
  projectLink,
  repoLink,
  reverse
}) => {
  const projectNumberStyle = (reverse) => ({
    fontSize: '12vw',
    opacity: '0.5',
    textShadow: '-1px 0 #555, 0 1px #555, 1px 0 #555, 0 -1px #555',
    marginLeft: (reverse ? '-13rem' : '26rem'),
    zIndex: -999
  });

  return (
    <Col lg={6} style={{ padding: 0 }}>
      <Fade
        delay={50}
        distance="50px"
        left={!!reverse}
        right={!reverse}
      >
        <div
          className="flex flex-col justify-between z-5 mb-12 pt-5 lg:pt-0 max-w-600 m-auto project-text-wrapper"
          style={{ padding: reverse ? '5px 9.5% 0 0' : '5px 0 0 9.5%' }}
          reverse={reverse}
        >
          <div>
            <h3
              className="absolute text-background font-bold m-0 -mt-32 hidden xl:block"
              style={projectNumberStyle(reverse)}
            >
              {projectNumber}
            </h3>
            <h3 className="text-xl lg:text-2xl m-0 tracking-wide font-semibold">{title}</h3>
            <hr className="bg-white opacity-50 w-100% mt-2 lg:hidden" />
            <h6 className="text-base font-semibold lg:text-lg m-0 uppercase tracking-extra-wide pt-3">Description</h6>
            <p className="text-base my-1 font-light text-grey-light tracking-wide">{description}</p>
            <h6 className="text-base font-semibold lg:text-lg m-0 uppercase tracking-extra-wide pt-3">Tech Stack</h6>
            <p className="text-base my-1 font-light text-grey-light tracking-wide">{formatTechStack(techStack)}</p>
          </div>
          <div className="mt-5 pb-5 lg:h-100% lg:flex-flex-col lg:justify-end">
            {projectLink && projectLink.length ? (
              <a
                className="mr-5% cursor-pointer no-underline "
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-lg mr-2 transition-colors duration-500 ease-in-out">Visit Project</span>
                <FaExternalLinkAlt className="hoverable-icon" />
              </a>
            ) : null}
            <a
              className="mr-5% cursor-pointer no-underline "
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-lg mr-2 transition-colors duration-500 ease-in-out">View Source</span>
              <FaGithub className="hoverable-icon" />
            </a>
          </div>
        </div>
      </Fade>
    </Col>
  );
};

ProjectText.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projectNumber: PropTypes.string.isRequired,
  projectLink: PropTypes.string,
  repoLink: PropTypes.string.isRequired,
  reverse: PropTypes.bool.isRequired
};

export default ProjectText;
