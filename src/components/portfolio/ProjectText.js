import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';
import styled from '@emotion/styled';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

import { colors as twColors } from '../../../tailwind';

const TextWrapper = styled.div`
  ${tw`flex flex-col justify-between z-5 mb-12 pt-5 lg:pt-0`};
  max-width: 600px;
  margin: auto;

  @media only screen and (min-width: 992px) {
    margin: 0px;
    min-height: 400px;
    padding: ${props => (props.reverse ? '5px 9.5% 0 0' : '5px 0 0 9.5%')};
  }
`;

const ProjectTitle = styled.h3`
  ${tw`text-xl lg:text-2xl m-0 tracking-wide font-semibold`};
`;

const Divider = styled.div`
  ${tw`bg-white opacity-50 w-100% mt-2 lg:hidden`};
  height: 1px;
`;

const ProjectNumber = styled.h3`
  ${tw`absolute text-background font-bold m-0 -mt-32 hidden xxl:block`};
  font-size: 12vw;
  opacity: 0.5;
  text-shadow: -1px 0 #555, 0 1px #555, 1px 0 #555, 0 -1px #555;
  margin-left: ${props => (props.reverse ? '-13rem' : '26rem')};
`;

const TextSectionTitle = styled.h6`
  ${tw`text-base font-semibold lg:text-lg m-0 uppercase tracking-extra-wide pt-3`};
`;

const TextSectionBody = styled.p`
  ${tw`text-base my-1 font-hairline text-grey-light tracking-wide`};
`;

const LinksWrapper = styled.div`
  ${tw`mt-5 pb-5 lg:h-100% lg:flex-flex-col lg:justify-end`};
`;

const Link = styled.a`
  ${tw`mr-5% cursor-pointer no-underline `};
  & {
    svg {
      transition: fill 0.5s ease;
    }
  }

  &:hover {
    span {
      ${tw`text-accent`};
    }

    svg {
      fill: ${twColors.accent};
    }
  }
`;
const LinkText = styled.span`
  ${tw`text-lg mr-2`};
  transition: color 0.5s ease;
`;

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
  const projectNumberMargin = reverse ? '0 0 0 25%' : '0 25% 0 0';

  return (
    <Col lg={6} style={{ padding: 0 }}>
      <Fade
        delay={50}
        distance="50px"
        left={!!reverse}
        right={!reverse}
      >
        <TextWrapper reverse={reverse}>
          <div>
            <ProjectNumber
              style={{ zIndex: -999 }}
              margin={projectNumberMargin}
              reverse={reverse}
            >
              {projectNumber}
            </ProjectNumber>
            <ProjectTitle>{title}</ProjectTitle>
            <Divider />
            <TextSectionTitle>Description</TextSectionTitle>
            <TextSectionBody>{description}</TextSectionBody>
            <TextSectionTitle>Tech Stack</TextSectionTitle>
            <TextSectionBody>{formatTechStack(techStack)}</TextSectionBody>
          </div>
          <LinksWrapper>
            {projectLink && projectLink.length ? (
              <Link
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkText>Visit Project</LinkText>
                <FaExternalLinkAlt />
              </Link>
            ) : null}
            <Link href={repoLink} target="_blank" rel="noopener noreferrer">
              <LinkText>View Source</LinkText>
              <FaGithub />
            </Link>
          </LinksWrapper>
        </TextWrapper>
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
