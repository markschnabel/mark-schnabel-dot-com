import React, { Fragment } from 'react'
import styled from 'react-emotion'
import Fade from 'react-reveal/Fade'

const Header = styled.h1`
  ${tw`text-3xl sm:text-4xl md:text-6xl font-semibold uppercase my-1 tracking-wide
  leading-none`};

  & {
    .react-reveal {
      span {
        font-weight: 500;
      }
    }
  }
`
const Divider = styled.div`
  ${tw`bg-white opacity-50 w-100% mt-8 mb-24`};
  height: 1px;
`

const SectionHeader = ({ headerText }) => {
  return (
    <Fragment>
      <Header>
        <Fade bottom cascade delay={50}>
          {headerText}
        </Fade>
      </Header>
      <Fade left delay={375} distance="50px">
        <Divider />
      </Fade>
    </Fragment>
  )
}

export default SectionHeader
