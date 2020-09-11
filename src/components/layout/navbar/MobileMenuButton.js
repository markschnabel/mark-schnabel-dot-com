import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Line = styled.div`
  ${tw`bg-grey-light block mt-1`};
  width: 28px;
  height: 2px;
  transition: all 0.2s ease-in-out;
`;

const StyledButton = styled.button`
  ${tw`flex flex-col items-center outline-none bg-transparent border-none cursor-pointer lg:hidden`};

  /* Hover styles for lines that make up the menu button.
     Done here to make use of the "nth-child" selectors. */
  &:hover {
    .mobile-menu-line-closed {
      ${tw`bg-accent`};

      ${Line}:nth-child(odd) {
        transform: translateX(1.5px);
      }
      ${Line}:nth-child(even) {
        transform: translateX(-1.5px);
      }
    }

    .mobile-menu-line-open {
      ${tw`bg-accent`};
    }
  }

  /* Styles to turn the menu button into an X while the menu is open.
     Done here to make use of the "nth-child" selectors. */
  & {
    .mobile-menu-line-open {
      ${Line}:nth-child(1) {
        opacity: 0;
        transform: translateX(5px);
      }
      ${Line}:nth-child(2) {
        transform: translateY(3px) rotate(225deg);
      }
      ${Line}:nth-child(3) {
        transform: translateY(-3px) rotate(-225deg);
      }
      ${Line}:nth-child(4) {
        opacity: 0;
        transform: translateX(-5px);
      }
    }
  }
`;

const MobileMenuButton = ({ toggleMobileMenu, mobileMenuIsOpen }) => {
  const lineClass = mobileMenuIsOpen
    ? 'mobile-menu-line-open'
    : 'mobile-menu-line-closed';

  return (
    <StyledButton onClick={toggleMobileMenu}>
      <Line className={lineClass} />
      <Line className={lineClass} />
      <Line className={lineClass} />
      <Line className={lineClass} />
    </StyledButton>
  );
};

MobileMenuButton.propTypes = {
  toggleMobileMenu: PropTypes.func.isRequired,
  mobileMenuIsOpen: PropTypes.bool.isRequired
};

export default MobileMenuButton;
