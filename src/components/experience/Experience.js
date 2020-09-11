import React from 'react';
import { Grid } from 'react-flexbox-grid';
import { StaticQuery, graphql } from 'gatsby';

import SectionHeader from '../shared/SectionHeader';
import Role from './Role';

const Experience = () => {
  return (
    <StaticQuery
      query={graphql`
        query experienceDataQuery {
          allExperienceJson {
            edges {
              node {
                id
                company
                companySite
                title
                duration
                description
                accomplishments
                responsibilities
                companyLogo {
                  childImageSharp {
                    fluid(maxWidth: 600, maxHeight: 600) {
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
        const experienceDataArr = data.allExperienceJson.edges;

        const roles = experienceDataArr.map(data => {
          const role = data.node;
          const key = `role-${data.node.id}`;
          delete role.id;

          return <Role key={key} {...role} />;
        });

        return (
          <>
            <SectionHeader headerText={'Experience'} />
            <Grid>{roles}</Grid>
          </>
        );
      }}
    />
  );
};

export default Experience;
