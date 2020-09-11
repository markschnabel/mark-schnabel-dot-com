import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link as SmoothScrollLink } from 'react-scroll';

const StyledList = styled.ul`
  ${tw`list-reset text-center pt-48 m-auto`};
`;

const StyledLink = styled(SmoothScrollLink)`
  ${tw`text-3xl my-32 cursor-pointer font-semibold tracking-extra-wide hover:text-accent`};
  transition: color 0.5s ease;
`;

const PageLinks = ({ closeMobileMenu }) => {
  const SCROLL_CONFIG = {
    spy: true,
    smooth: true,
    duration: 500,
    offset: -70,
    onClick: closeMobileMenu
  };

  return (
    <StyledList>
      <li>
        <StyledLink to="experienceSection" {...SCROLL_CONFIG}>
          EXPERIENCE
        </StyledLink>
      </li>
      <li>
        <StyledLink to="portfolioSection" {...SCROLL_CONFIG}>
          PORTFOLIO
        </StyledLink>
      </li>
      <li>
        <StyledLink to="aboutSection" {...SCROLL_CONFIG}>
          ABOUT
        </StyledLink>
      </li>
      <li>
        <StyledLink to="contactSection" {...SCROLL_CONFIG}>
          CONTACT
        </StyledLink>
      </li>
    </StyledList>
  );
};

PageLinks.propTypes = {
  closeMobileMenu: PropTypes.func.isRequired
};

export default PageLinks;
