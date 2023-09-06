import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactIcons = () => {
  return (
    <div className="absolute flex justify-end w-full" style={{ bottom: '15px' }}>
      <a
        href="https://github.com/markschnabel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-grey-light hoverable-icon" />
      </a>
      <a
        className="text-lg ml-6 text-grey-light cursor-pointer transition-all duration-200 ease-in-out "
        href="http://linkedin.com/in/mark-j-schnabel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-grey-light hoverable-icon" />
      </a>
    </div>
  );
};

export default ContactIcons;
