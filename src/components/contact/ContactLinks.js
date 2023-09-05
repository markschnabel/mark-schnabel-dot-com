import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

const resumeStyles = {
  width: '250px',
  display: 'block',
  transition: 'all 0.3s ease'
};

const ContactLinks = () => {
  return (
    <div
      className="my-4 lg:my-0 mx-auto h-100% text-center flex flex-col justify-center items-center"
      style={{ 'max-height': '576px' }}
    >
      <Fade top delay={100} distance="25px">
        <div>
          <div className="my-2">
            <a
              className="text-2xl lg:text-3xl mx-5 transition-all duration-500 ease-in-out"
              href="http://github.com/markschnabel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hoverable-icon text-2xl lg:text-3xl mx-5" />
            </a>
            <a
              className="text-2xl lg:text-3xl mx-5 transition-all duration-500 ease-in-out"
              href="http://linkedin.com/in/mark-j-schnabel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hoverable-icon text-2xl lg:text-3xl mx-5" />
            </a>
          </div>
        </div>
        <div className="my-2">
          <a
            className="block text-lg lg:text-xl underline font-light italic cursor-pointer hover:text-accent pb-4 transition-all duration-500 ease-in-out"
            href="mailto:mark.schnabel@markschnabel.com"
            target="_top"
          >
            mark.schnabel@markschnabel.com
          </a>
        </div>
        <div className="my-2">
          <a
            className="resume-button"
            style={resumeStyles}
            href="https://drive.google.com/file/d/1qoDypvSZgjD-gUG0RwymL60nwW_iIyeG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME (PDF)
          </a>
        </div>
        <div className="my-2">
          <a
            className="resume-button"
            style={resumeStyles}
            href="https://docs.google.com/document/d/1TP3NgI6gz1RBJ5tmNzjpJ5YQ5pczfPp1fPRrcAuk6Dg/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME (DOC)
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default ContactLinks;
