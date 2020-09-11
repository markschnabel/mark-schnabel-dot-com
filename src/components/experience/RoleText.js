import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const RoleTitle = styled.h3`
  ${tw`text-xl lg:text-2xl m-0 font-semibold`};

  a {
    ${tw`no-underline text-accent`};
    transition: all 0.25s ease;
  }
`;

const DurationText = styled.p`
  ${tw`text-base my-2 font-light tracking-wide`};
`;

const DescriptionText = styled.p`
  ${tw`text-base my-2 font-light tracking-wide`};
`;

const SubHeaderText = styled.h3`
  ${tw`text-base mt-4 mb-2 font-medium`};
`;

const List = styled.ul`
  padding-left: 20px;

  li {
    ${tw`text-base my-2 font-light`};
  }
`;

const RoleText = ({
  company,
  companySite,
  title,
  duration,
  description,
  accomplishments,
  responsibilities
}) => {
  return (
    <div>
      <RoleTitle>
        {title}
        {' '}
        <a href={companySite} target="_blank" rel="noopener noreferrer">@{company}</a>
      </RoleTitle>
      <DurationText>{duration}</DurationText>
      <DescriptionText>{description}</DescriptionText>
      <SubHeaderText>Major Accomplishments:</SubHeaderText>
      <List>
        {accomplishments.map((a, i) => <li key={`accomplishments-${i}`}>{a}</li>)}
      </List>
      <SubHeaderText>Day to Day Responsiblities:</SubHeaderText>
      <List>
        {responsibilities.map((a, i) => <li key={`responsibilities-${i}`}>{a}</li>)}
      </List>
    </div>
  );
};

RoleText.propTypes = {
  company: PropTypes.string.isRequired,
  companySite: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  accomplishments: PropTypes.array.isRequired,
  responsibilities: PropTypes.array.isRequired
};

export default RoleText;
