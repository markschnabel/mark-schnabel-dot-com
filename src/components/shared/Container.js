import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return <div className="mx-5% xl:mx-auto max-w-screen-xl">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired
};

export default Container;
