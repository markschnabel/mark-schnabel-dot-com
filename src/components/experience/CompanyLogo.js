import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';

const CompanyLogo = ({ companyLogo }) => (
  <Image
    fluid={companyLogo.childImageSharp.fluid}
    className="w-350 h-350 m-auto"
  />
);

CompanyLogo.propTypes = {
  companyLogo: PropTypes.object.isRequired
};

export default CompanyLogo;
