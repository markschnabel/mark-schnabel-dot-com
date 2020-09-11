import React from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';

const StyledFooter = styled.footer`
  ${tw`mb-32 mt-12 lg:my-24 text-center`};
`;
const ClosingText = styled.p`
  ${tw`text-xl lg:text-2xl font-semibold `};
`;
const Copyright = styled.p`
  ${tw`text-base font-light mt-2 text-grey-light`};
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Fade left delay={50} distance="50px">
        <ClosingText>Thank you for visiting!</ClosingText>
      </Fade>
      <Fade right delay={50} distance="50px">
        <Copyright>Copyright 2019 © Mark Schnabel</Copyright>
      </Fade>
    </StyledFooter>
  );
};

export default Footer;
