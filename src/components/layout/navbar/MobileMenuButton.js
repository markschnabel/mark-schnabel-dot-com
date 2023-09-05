import React from 'react';
import PropTypes from 'prop-types';

const Line = () => (
  <div
    className="bg-grey-light block mt-1"
    style={{
      width: '28px',
      height: '2px',
      transition: 'all 0.2s ease-in-out'
    }}
  />
);

const MobileMenuButton = ({ toggleMobileMenu }) => {
  return (
    // Todo: animate button into an X when clicked
    <button
      className="flex flex-col items-center outline-none bg-transparent border-none cursor-pointer lg:hidden"
      onClick={toggleMobileMenu}
    >
      <Line />
      <Line />
      <Line />
      <Line />
    </button>
  );
};

MobileMenuButton.propTypes = {
  toggleMobileMenu: PropTypes.func.isRequired
};

export default MobileMenuButton;
