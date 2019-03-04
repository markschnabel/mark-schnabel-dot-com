import React from 'react'
import styled from 'react-emotion'

const HeaderText = styled.h2`
  ${tw`m-0 tracking-wide font-semibold uppercase mt-8 text-center mb-2`};
  font-size: 1.1rem;
`

const SkillsHeader = ({ headerText }) => {
  return <HeaderText>{headerText}</HeaderText>
}

export default SkillsHeader
