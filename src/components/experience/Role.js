import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

import CompanyLogo from './CompanyLogo';
import RoleText from './RoleText';

const Role = ({
  company,
  companySite,
  title,
  duration,
  description,
  accomplishments,
  responsibilities,
  companyLogo
}) => {
  return (
    <Row style={{ paddingBottom: '4rem' }}>
      <Col lg={5}>
        <CompanyLogo companyLogo={companyLogo} />
      </Col>
      <Col lg={7}>
        <RoleText
          company={company}
          companySite={companySite}
          title={title}
          duration={duration}
          description={description}
          accomplishments={accomplishments}
          responsibilities={responsibilities}
        />
      </Col>
    </Row>
  );
};

Role.propTypes = {
  company: PropTypes.string.isRequired,
  companySite: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  companyLogo: PropTypes.object.isRequired,
  accomplishments: PropTypes.array.isRequired,
  responsibilities: PropTypes.array.isRequired
};

export default Role;
