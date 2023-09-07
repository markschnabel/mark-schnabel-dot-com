import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactIcons = () => {
  return (
    <div className="inline-block w-100% text-center mt-16">
      <a
        className="text-xl cursor-pointer mx-4 transition-all duration-500 ease-in-out"
        href="https://github.com/markschnabel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="hoverable-icon" />
      </a>
      <a
        className="text-xl cursor-pointer mx-4 transition-all duration-500 ease-in-out"
        href="https://www.linkedin.com/in/mark-j-schnabel/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="hoverable-icon" />
      </a>
    </div>
  );
};

export default ContactIcons;
