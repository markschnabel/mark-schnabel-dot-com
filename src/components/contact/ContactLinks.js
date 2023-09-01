import React from 'react';
import styled from '@emotion/styled';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

import { colors as twColors } from '../../../tailwind';

const ContactLinksContainer = styled.div`
  ${tw`my-4 lg:my-0 mx-auto h-100% text-center flex flex-col justify-center items-center`};
  max-height: 576px;
`;
const Section = styled.div`
  ${tw`my-2`};
`;
const StyledIconLink = styled.a`
  ${tw`text-2xl lg:text-3xl mx-5`};
  transition: all 0.5s ease;

  & {
    svg {
      transition: all 0.5s ease;
    }
  }

  &:hover {
    svg {
      fill: ${twColors.accent};
    }
  }
`;
const StyledTextLink = styled.a`
  ${tw`block text-lg lg:text-xl underline font-light italic cursor-pointer hover:text-accent pb-4`};
  transition: all 0.5s ease;
`;

const ResumeLink = styled.a`
  ${tw`border-2px border-solid border-white text-white bg-transparent
  py-2 text-lg font-thin cursor-pointer my-2 uppercase no-underline
  hover:bg-white hover:text-black inline mr-5%`};
  width: 250px !important;
  display: block !important;
  transition: all 0.3s ease;
`;

const ContactLinks = () => {
  return (
    <ContactLinksContainer>
      <Fade top delay={100} distance="25px">
        <div>
          <Section>
            <StyledIconLink
              href="http://github.com/markschnabel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </StyledIconLink>
            <StyledIconLink
              href="http://linkedin.com/in/mark-j-schnabel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </StyledIconLink>
          </Section>
        </div>
        <Section>
          <StyledTextLink
            href="mailto:mark.schnabel@markschnabel.com"
            target="_top"
          >
            mark.schnabel@markschnabel.com
          </StyledTextLink>
        </Section>
        <Section>
          <ResumeLink
            href="https://drive.google.com/file/d/1qoDypvSZgjD-gUG0RwymL60nwW_iIyeG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME (PDF)
          </ResumeLink>
        </Section>
        <Section>
          <ResumeLink
            href="https://docs.google.com/document/d/1TP3NgI6gz1RBJ5tmNzjpJ5YQ5pczfPp1fPRrcAuk6Dg/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME (DOC)
          </ResumeLink>
        </Section>
      </Fade>
    </ContactLinksContainer>
  );
};

export default ContactLinks;
