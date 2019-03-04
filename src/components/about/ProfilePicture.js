import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'
import Fade from 'react-reveal/Fade'

const ImageContainer = styled.div`
  position: relative;
  max-width: 325px;
  max-height: 300px;
  height: 100%;
  width: 100%;
  transition: all 0.6s ease;
  margin: auto;

  @media only screen and (min-width: 992px) {
    margin-left: auto;
    margin-right: 35px;
    max-width: 400px;
    max-height: 350px;
  }
`

const ProfilePicture = () => {
  return (
    <StaticQuery
      query={graphql`
        query profilePictureQuery {
          file(relativePath: { eq: "profile_picture.png" }) {
            childImageSharp {
              fluid(maxWidth: 450, maxHeight: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <>
            <div>
              <Fade top delay={50} distance="25px">
                <ImageContainer>
                  <Img
                    style={{ borderRadius: '5px' }}
                    fluid={data.file.childImageSharp.fluid}
                  />
                </ImageContainer>
              </Fade>
            </div>
          </>
        )
      }}
    />
  )
}

export default ProfilePicture
