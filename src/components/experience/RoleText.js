import React from 'react';
import PropTypes from 'prop-types';

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
      <h3 className="text-xl lg:text-2xl m-0 font-semibold">
        <span>{title}</span>
        &nbsp;
        <a
          className="no-underline text-accent"
          href={companySite}
          target="_blank"
          rel="noopener noreferrer"
        >
          @{company}
        </a>
      </h3>

      <p className="text-base my-2 font-light tracking-wide">{duration}</p>
      <p className="text-base my-2 font-light tracking-wide">{description}</p>

      <p className="text-base mt-4 mb-2 font-medium">Major Accomplishments:</p>
      <ul className="pl-5 text-base my-2 font-light">
        {accomplishments.map((a, i) => (
          <li key={`accomplishments-${i}`}>{a}</li>
        ))}
      </ul>

      <p className="text-base mt-4 mb-2 font-medium">Day to Day Responsiblities:</p>
      <ul className="pl-5 text-base my-2 font-light">
        {responsibilities.map((r, i) => <li key={`responsibilities-${i}`}>{r}</li>)}
      </ul>
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
