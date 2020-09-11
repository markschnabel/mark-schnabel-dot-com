import React from 'react';
import { Grid } from 'react-flexbox-grid';
import { StaticQuery, graphql } from 'gatsby';

import SectionHeader from '../shared/SectionHeader';
import Project from './Project';

const Portfolio = () => {
  return (
    <StaticQuery
      query={graphql`
        query projectDataQuery {
          allMarkdownRemark(
            sort: { fields: frontmatter___projectNumber },
            filter: {fileAbsolutePath: {regex: "/(projects)\/.*\\.md$/"}}
            ) {
            edges {
              node {
                id
                frontmatter {
                  title
                  projectNumber
                  description
                  techStack
                  projectLink
                  repoLink
                  image {
                    childImageSharp {
                      fluid(maxWidth: 600, maxHeight: 400) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const projectDataArr = data.allMarkdownRemark.edges;

        const projectsArr = projectDataArr.map(data => {
          const {
            title,
            description,
            image,
            techStack,
            projectLink,
            projectNumber,
            repoLink
          } = data.node.frontmatter;
          return (
            <Project
              key={'project-' + data.node.id}
              title={title}
              projectNumber={
                projectNumber < 10
                  ? '0' + projectNumber.toString()
                  : projectNumber.toString()
              }
              reverse={projectNumber % 2 == 0 ? true : false}
              description={description}
              projectLink={projectLink}
              repoLink={repoLink}
              techStack={techStack}
              image={image}
            />
          );
        });

        return (
          <>
            <div>
              <SectionHeader headerText={'Portfolio'} />
              <Grid>{projectsArr}</Grid>
            </div>
          </>
        );
      }}
    />
  );
};

export default Portfolio;
