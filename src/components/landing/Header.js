import React from 'react'
import styled from '@emotion/styled'
import Fade from 'react-reveal/Fade'

const FlexContainer = styled.div`
  ${tw`flex flex-col justify-center h-40%`};
`
const Wrapper = styled.div`
  ${tw`absolute md:ml-5% z-5`};
  margin-top: 25vh;
`
const LandingHeader = styled.h1`
  ${tw`md:ml-10% font-semibold uppercase my-1 tracking-wide leading-none`};
  width: 550px;

  & {
    .react-reveal {
      span {
        font-weight: 500;
      }
    }
  }

  /* Calc is used here to give the font a minimum size of 2.5rem */
  font-size: calc(2.5rem + 3.5vw);

  @media (min-width: 1200px) {
    font-size: 5.3rem;
  }
`
const LandingSubHeader = styled.h2`
  ${tw`md:mt-3 md:ml-10% w-100% uppercase tracking-extra-wide leading-none`};
  & {
    .react-reveal {
      span {
        ${tw`font-secondary text-grey-light font-hairline`};
      }
    }
  }

  /* Calc is used here to give the font a minimum size of 1.2em */
  font-size: calc(1.2rem + 1vw);

  @media (min-width: 1200px) {
    font-size: 2.25rem;
  }
`
const Header = () => {
  return (
    <FlexContainer>
      <Wrapper>
        <LandingHeader>
          <Fade bottom cascade delay={250}>
            Mark
          </Fade>
        </LandingHeader>
        <LandingHeader>
          <Fade bottom cascade delay={600}>
            Schnabel
          </Fade>
        </LandingHeader>
        <LandingSubHeader>
          <Fade bottom cascade delay={950} distance="100px">
            Software Developer
          </Fade>
        </LandingSubHeader>
      </Wrapper>
    </FlexContainer>
  )
}

export default Header
