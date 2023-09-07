import React from 'react';
import PropTypes from 'prop-types';
import { Link as SmoothScrollLink } from 'react-scroll';

const ListItem = ({ name, id, closeMobileMenu }) => {
  return (
    <li>
      <SmoothScrollLink
        to={id}
        spy={true}
        smooth={true}
        duration={500}
        offset={-70}
        onClick={closeMobileMenu}
        className="text-3xl my-32 cursor-pointer font-semibold tracking-extra-wide hover:text-accent transition-colors duration-500 ease-in-out"
      >
        {name}
      </SmoothScrollLink>
    </li>
  );
};

const PageLinks = ({ closeMobileMenu }) => {
  return (
    <ul className="list-reset text-center pt-48 m-auto">
      <ListItem
        name="EXPERIENCE"
        id="experienceSection"
        closeMobileMenu={closeMobileMenu}
      />
      <ListItem
        name="PORTFOLIO"
        id="portfolioSection"
        closeMobileMenu={closeMobileMenu}
      />
      <ListItem
        name="ABOUT"
        id="aboutSection"
        closeMobileMenu={closeMobileMenu}
      />
      <ListItem
        name="CONTACT"
        id="contactSection"
        closeMobileMenu={closeMobileMenu}
      />
    </ul>
  );
};

PageLinks.propTypes = {
  closeMobileMenu: PropTypes.func.isRequired
};

export default PageLinks;
