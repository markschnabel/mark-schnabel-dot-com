import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade'
import { FaCheck } from 'react-icons/fa'

import { colors as twColors } from '../../tailwind'

const Wrapper = styled.div`
  ${tw`w-100% h-screen flex flex-col justify-center items-center bg-background`}
`
const Header = styled.h1`
  ${tw`text-4xl md:text-6xl font-semibold my-2 text-center text-white`};
`
const Message = styled.p`
  ${tw`text-base md:text-xl text-grey-light font-light text-center my-2 overflow-wrap px-6 break-words`};
  max-width: 650px;
`
const HomeLink = styled(Link)`
  ${tw`underline text-white text-lg md:text-xl text-center my-4 mx-auto block hover:text-accent`};
  transition: all 0.5s ease;
`
const StyledCheck = styled(FaCheck)`
  ${tw`pin text-center block m-auto absolute`};
  font-size: calc(70px + 50vw);
  fill: ${twColors['primary']};
`

const success = () => {
  return (
    <Wrapper>
      <Fade top cascade delay={50}>
        <StyledCheck />
      </Fade>

      <Fade left cascade delay={50} distance="50px">
        {/* div used to ensure Fade cascade works properly */}
        <div>
          <Header>Success!</Header>
          <Message>
            Your message has been sent to me! Thank you very much. I'll make
            sure to get back you as soon as possible!
          </Message>
          <HomeLink to="/">Click here to go back home</HomeLink>
        </div>
      </Fade>
    </Wrapper>
  )
}

export default success
