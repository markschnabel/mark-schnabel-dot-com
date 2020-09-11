import React from 'react';
import styled from '@emotion/styled';

import BackgroundAnimation from './BackgroundAnimation';
import Header from './Header';
import Arrow from './Arrow';
import ContactIcons from './ContactIcons';

const LandingWrapper = styled.div`
  ${tw`relative w-100% h-screen mb-15%`};
`;

const Landing = () => {
  return (
    <LandingWrapper>
      <BackgroundAnimation />
      <Header />
      <Arrow />
      <ContactIcons />
    </LandingWrapper>
  );
};

Landing.propTypes = {};

export default Landing;
