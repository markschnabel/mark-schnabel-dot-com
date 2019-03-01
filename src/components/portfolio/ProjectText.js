import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-flexbox-grid'
import styled from 'react-emotion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'

import { colors as twColors } from '../../../tailwind'

const TextWrapper = styled.div`
  ${tw`flex flex-col justify-between z-5`};
  min-height: 400px;
  margin: ${props => (props.reverse ? '0 9.5% 0 0' : '0 0 0 9.5%')};

  @media only screen and (max-width: 992px) {
    margin: 0px;
  }
`
const ProjectTitle = styled.h3`
  ${tw`text-2xl m-0 tracking-wide font-semibold`};
`
const ProjectNumber = styled.h3`
  ${tw`absolute text-background font-bold m-0 -mt-32 hidden xxl:block`};
  font-size: 12vw;
  opacity: 0.5;
  text-shadow: -1px 0 #555, 0 1px #555, 1px 0 #555, 0 -1px #555;
  margin-left: ${props => (props.reverse ? '-13rem' : '26rem')};
`
const TextSectionTitle = styled.h6`
  ${tw`text-lg m-0 uppercase tracking-extra-wide pt-3`};
`
const TextSectionBody = styled.p`
  ${tw`my-1 font-hairline text-grey-light tracking-wide`};
  font-size: 1.07rem;
`
const LinksWrapper = styled.div`
  ${tw`lg:h-100% lg:flex-flex-col lg:justify-end`};
`
const Link = styled.a`
  ${tw`mr-5% cursor-pointer`};
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
      fill: ${twColors['accent']};
    }
  }
`
const LinkText = styled.span`
  ${tw`text-lg mr-2`};
  transition: color 0.5s ease;
`

const ProjectText = ({
  title,
  description,
  techStack,
  projectNumber,
  projectLink,
  repoLink,
  reverse,
}) => {
  const projectNumberMargin = reverse ? '0 0 0 25%' : '0 25% 0 0'

  return (
    <Col lg={6} style={{ padding: 0 }}>
      <Fade
        delay={50}
        distance="50px"
        left={reverse ? true : false}
        right={reverse ? false : true}
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
            <TextSectionTitle>Description</TextSectionTitle>
            <TextSectionBody>{description}</TextSectionBody>
            <TextSectionTitle>Tech Stack</TextSectionTitle>
            <TextSectionBody>{techStack}</TextSectionBody>
          </div>
          <LinksWrapper>
            <Link href={projectLink} target="_blank" rel="noopener noreferrer">
              <LinkText>Visit Project</LinkText>
              <FaExternalLinkAlt />
            </Link>
            <Link href={repoLink} target="_blank" rel="noopener noreferrer">
              <LinkText>View Source</LinkText>
              <FaGithub />
            </Link>
          </LinksWrapper>
        </TextWrapper>
      </Fade>
    </Col>
  )
}

// Project.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   projectNumber: PropTypes.string.isRequired,
//   projectLink: PropTypes.string.isRequired,
//   repoLink: PropTypes.string.isRequired,
//   reverse: PropTypes.bool.isRequired,
// }

export default ProjectText
