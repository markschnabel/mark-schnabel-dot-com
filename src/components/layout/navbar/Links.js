import React from 'react';
import styled from '@emotion/styled';
import { Link as SmoothScrollLink } from 'react-scroll';

const StyledList = styled.ul`
  ${tw`list-reset hidden lg:inline-block`};
`;

const StyledListItem = styled.ul`
  ${tw`list-reset inline-block`};
`;

const StyledScrollLink = styled(SmoothScrollLink)`
  ${tw`font-light tracking-extra-wide text-lg ml-6 cursor-pointer hover:text-accent`};
  transition: all 0.5s ease;
`;

const SCROLL_CONFIG = {
  spy: true,
  smooth: true,
  duration: 500,
  offset: -70
};

const Links = () => {
  return (
    <StyledList>
      <StyledListItem>
        <StyledScrollLink to="experienceSection" {...SCROLL_CONFIG}>
          EXPERIENCE
        </StyledScrollLink>
      </StyledListItem>
      <StyledListItem>
        <StyledScrollLink to="portfolioSection" {...SCROLL_CONFIG}
        >
          PORTFOLIO
        </StyledScrollLink>
      </StyledListItem>
      <StyledListItem>
        <StyledScrollLink to="aboutSection" {...SCROLL_CONFIG}
        >
          ABOUT
        </StyledScrollLink>
      </StyledListItem>
      <StyledListItem>
        <StyledScrollLink to="contactSection" {...SCROLL_CONFIG}>
          CONTACT
        </StyledScrollLink>
      </StyledListItem>
    </StyledList>
  );
};

export default Links;
