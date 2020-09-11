import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

const StyledImg = styled(Img)`
  width: 350px;
  height: 350px;
  margin: auto;
`;

const CompanyLogo = ({ companyLogo }) => <StyledImg fluid={companyLogo.childImageSharp.fluid} />;

CompanyLogo.propTypes = {
  companyLogo: PropTypes.object.isRequired
};

export default CompanyLogo;
