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
          allPortfolioProjectsJson {
            edges {
              node {
                id
                title
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
      `}

      render={data => {
        const projectDataArr = data.allPortfolioProjectsJson.edges;

        let projectNumber = 1;

        const projectsArr = projectDataArr.map(data => {
          const {
            title,
            description,
            image,
            techStack,
            projectLink,
            repoLink
          } = data.node;

          const jsx = (
            <Project
              key={'project-' + data.node.id}
              title={title}
              projectNumber={projectNumber}
              description={description}
              projectLink={projectLink}
              repoLink={repoLink}
              techStack={techStack}
              image={image}
            />
          );

          projectNumber += 1;

          return jsx;
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
