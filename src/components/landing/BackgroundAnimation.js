import React from 'react'
import styled from 'react-emotion'

const Wrapper = styled.div`
  ${tw`absolute w-100% h-100% flex justify-center items-center`};
  background-color: transparent;
`
const Circle = styled.div`
  ${tw`absolute rounded-circle opacity-50`};
  height: 75vw;
  width: 75vw;
  max-width: 640px;
  min-width: 330px;
  max-height: 640px;
  min-height: 330px;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;

  @keyframes scale {
    0% {
      transform: scale(1.05) rotate(0deg) skewX(0deg);
      opacity: 0.45;
    }
    50% {
      transform: scale(0.75) rotate(180deg) skewX(35deg);
      opacity: 0;
      border-color: lightblue;
    }
    100% {
      transform: scale(1.05) rotate(360deg) skewX(0deg);
      opacity: 0.45;
    }
  }
  animation: scale;
  animation-iteration-count: infinite;
  animation-direction: ${props => props.direction};
  animation-duration: ${props => props.duration};
  animation-delay: ${props => props.delay};
  animation-fill-mode: both;
`

const BackgroundCircle = () => {
  return (
    <Wrapper>
      <Circle duration="24s" direction="reverse" />
      <Circle duration="24s" />
      <Circle duration="32s" direction="reverse" />
      <Circle duration="32s" />
    </Wrapper>
  )
}

export default BackgroundCircle
