import React from 'react';
import { Link as SmoothScrollLink } from 'react-scroll';

const Link = ({ name, sectionId }) => {
  return (
    <li className="inline-block">
      <SmoothScrollLink
        className="font-light tracking-extra-wide text-lg ml-6 cursor-pointer hover:text-accent transition-all ease-in-out duration-500"
        to={sectionId}
        spy={true}
        smooth={true}
        duration={500}
        offset={70}
      >
        {name}
      </SmoothScrollLink>
    </li>
  );
};

const Links = () => {
  return (
    <ul className="list-reset hidden lg:flex">
      <Link name="EXPERIENCE" sectionId="experienceSection" />
      <Link name="PORTFOLIO" sectionId="portfolioSection" />
      <Link name="ABOUT" sectionId="aboutSection" />
      <Link name="CONTACT" sectionId="contactSection" />
    </ul>
  );
};

export default Links;
