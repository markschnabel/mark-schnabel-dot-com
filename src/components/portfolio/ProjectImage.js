import React from 'react'
import { Col } from 'react-flexbox-grid'
import Img from 'gatsby-image'
import styled from 'react-emotion'
import Fade from 'react-reveal/Fade'

const ImageContainer = styled.div`
  position: relative;
  max-width: 600px;
  max-height: 400px;
  height: 100%;
  width: 100%;
  transition: all 0.6s ease;
`
const StyledImg = styled(Img)`
  ${tw`cursor-pointer`};
  border-radius: 10px;
  &:hover {
    opacity: 0.9;
  }
`
const HoverOverlay = styled.div`
  ${tw`absolute pin opacity-0 w-100% h-100% flex flex-col items-center justify-center`};
  max-width: 600px;
  max-height: 400px;
  transition: all 0.6s ease;

  &:hover {
    box-shadow: inset 0 0 150px #000000 !important;
    cursor: pointer;
    opacity: 1;
  }
`
const HoverText = styled.p`
  ${tw`text-white text-3xl font-semibold m-auto `};

`

const ProjectImage = ({ image, reverse }) => {
  return (
    <Col lg={6} style={{ padding: 0 }}>
      <Fade
        delay={50}
        distance="50px"
        left={reverse ? false : true}
        right={reverse ? true : false}
      >
        <ImageContainer>
          <StyledImg fluid={image.childImageSharp.fluid} />
          <HoverOverlay>
            <HoverText>Visit Project</HoverText>
          </HoverOverlay>
        </ImageContainer>
      </Fade>
    </Col>
  )
}

export default ProjectImage
