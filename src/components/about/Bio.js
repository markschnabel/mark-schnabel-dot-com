import React from 'react'
import styled from 'react-emotion'
import Fade from 'react-reveal/Fade'

const BioWrapper = styled.div`
  ${tw`h-100% flex flex-col justify-between py-2 text-center lg:text-left lg:py-8`};
  max-width: 500px;
  margin: auto;

  @media only screen and (min-width: 992px) {
    margin-left: 25px;
    min-height: 350px;
  }
`
const BioTitle = styled.h2`
  ${tw`text-xl m-0 tracking-wide font-semibold uppercase`};
`
const Underline = styled.div`
  ${tw`bg-white w-100% mb-2 max-w-12 m-auto lg:m-0 mb-4`};
  height: 1px;
`
const BioBody = styled.p`
  ${tw`text-base font-secondary my-1 font-hairline text-grey-light tracking-wide pt-2 lg:mt-0 mb-4`};
  @media only screen and (max-width: 576px) {
    font-size: 0.95rem;
  }
`
const ResumeButton = styled.button`
  ${tw`border-solid border-2px border-white text-white bg-transparent py-2 
  text-lg font-thin cursor-pointer w-100% my-2
  hover:bg-white hover:text-black inline mr-5%`};
  transition: all 0.3s ease;

  @media only screen and (min-width: 992px) {
    max-width: 160px;
  }
`

const Bio = ({ bioText }) => {
  return (
    <Fade bottom delay={50} distance="25px">
      <BioWrapper>
        <div>
          <Fade left delay={50} distance="25px">
            <BioTitle>Bio</BioTitle>
          </Fade>

          <Fade right delay={50} distance="25px">
            <Underline />
          </Fade>
          <BioBody>{bioText}</BioBody>
        </div>
        <div>
          <ResumeButton>RESUME (PDF)</ResumeButton>
          <ResumeButton>RESUME (DOC)</ResumeButton>
        </div>
      </BioWrapper>
    </Fade>
  )
}

export default Bio
