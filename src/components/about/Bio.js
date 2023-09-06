import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';


// @media only screen and (min-width: 992px) {
//   margin-left: 25px;
//   min-height: 350px;
// }

const Bio = ({ professionalBio, personalBio }) => {
  return (
    <Fade bottom delay={50} distance="25px">
      <div className="h-100% flex flex-col justify-between py-2 text-center lg:text-left lg:py-2 m-auto max-w-lg">
        <div>
          <Fade left delay={50} distance="25px">
            <h2 className="text-2xl m-0 tracking-wide font-semibold uppercase">Bio</h2>
          </Fade>

          <Fade right delay={50} distance="25px">
            <hr className="bg-white w-100% max-w-12 m-auto lg:m-0 mb-4 max-w-4xs" />
          </Fade>
          <p className="text-base font-secondary my-1 font-light text-grey-light tracking-wide pt-2 lg:mt-0 mb-12 lg:mb-4">
            {professionalBio}
          </p>
          <p className="text-base font-secondary my-1 font-light text-grey-light tracking-wide pt-2 lg:mt-0 mb-12 lg:mb-4">
            {personalBio}
          </p>
        </div>
        <div>
          <button
            className="resume-button"
            href="https://drive.google.com/file/d/1gFIOl2FB78QCDlLfV1fZKAjQ4sxJs3Oe/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME (PDF)
          </button>
          <button
            className="resume-button"
            href="https://docs.google.com/document/d/1TP3NgI6gz1RBJ5tmNzjpJ5YQ5pczfPp1fPRrcAuk6Dg/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME (DOC)
          </button>
        </div>
      </div>
    </Fade>
  );
};

Bio.propTypes = {
  professionalBio: PropTypes.string.isRequired,
  personalBio: PropTypes.string.isRequired
};

export default Bio;
