import React from 'react'
import styled from '@emotion/styled'

const SkillStyle = styled.p`
  ${tw`bg-grey px-3 py-2 font-semibold text-black inline-block m-1 `};
  border-radius: 2px;
`

const Skill = ({ name }) => {
  return <SkillStyle>{name}</SkillStyle>
}

export default Skill
