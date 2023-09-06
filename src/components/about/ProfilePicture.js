import React from 'react';
import Image from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';

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
          <div>
            <Fade top delay={50} distance="25px">
              <div className="profile-picture">
                <Image
                  style={{ borderRadius: '5px' }}
                  fluid={data.file.childImageSharp.fluid}
                />
              </div>
            </Fade>
          </div>
        );
      }}
    />
  );
};

export default ProfilePicture;
