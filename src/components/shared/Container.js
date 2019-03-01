import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

const ContainerStyles = styled.div`
  ${tw`mx-5% xl:mx-auto max-w-1200`};
`

const Container = ({ children }) => {
  return <ContainerStyles>{children}</ContainerStyles>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
