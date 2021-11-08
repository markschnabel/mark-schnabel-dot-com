import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';

const BioWrapper = styled.div`
  ${tw`h-100% flex flex-col justify-between py-2 text-center lg:text-left lg:py-8`};
  max-width: 500px;
  margin: auto;

  @media only screen and (min-width: 992px) {
    margin-left: 25px;
    min-height: 350px;
  }
`;

const BioTitle = styled.h2`
  ${tw`text-xl m-0 tracking-wide font-semibold uppercase`};
`;

const Underline = styled.div`
  ${tw`bg-white w-100% mb-2 max-w-12 m-auto lg:m-0 mb-4`};
  height: 1px;
`;

const BioBody = styled.p`
  ${tw`text-base font-secondary my-1 font-light text-grey-light tracking-wide pt-2 lg:mt-0 mb-12 lg:mb-4`};
  font-size: 16px;

  @media only screen and (max-width: 576px) {
    font-size: 0.95rem;
  }
`;

const ResumeLink = styled.a`
  ${tw`border-solid border-2px border-white text-white bg-transparent py-2 px-3
  text-lg font-thin cursor-pointer w-100% my-2 no-underline
  hover:bg-white hover:text-black inline mr-5%`};
  transition: all 0.3s ease;

  @media only screen and (min-width: 992px) {
    max-width: 160px;
  }

  @media only screen and (max-width: 450px) {
    display: block;
  }
`;

const Bio = ({ professionalBio, personalBio }) => {
  return (
    <Fade bottom delay={50} distance="25px">
      <BioWrapper>
        <div>
          <Fade left delay={50} distance="25px">
            <BioTitle>Bio</BioTitle>
          </Fade>

          <Fade right delay={50} distance="25px">
            <Underline />
          </Fade>
          <BioBody>{professionalBio}</BioBody>
          <BioBody>{personalBio}</BioBody>
        </div>
        <div>
          <ResumeLink
            href="https://drive.google.com/file/d/1sdzT5Nt0J-qaUOnUiMSzWNEGD-ds1ij8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME (PDF)
          </ResumeLink>
          <ResumeLink
            href="https://docs.google.com/document/d/e/2PACX-1vR4Qrz_LRDgUsfwbkBwVmTiFrtFH3ATdRj2xVXQm68tNtvTcCVrMLfmXwo5IG0TlSlNSc-tUMQCwky9/pub"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME (DOC)
          </ResumeLink>
        </div>
      </BioWrapper>
    </Fade>
  );
};

Bio.propTypes = {
  professionalBio: PropTypes.string.isRequired,
  personalBio: PropTypes.string.isRequired
};

export default Bio;
