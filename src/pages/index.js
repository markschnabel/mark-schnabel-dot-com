import React from 'react'

import Layout from '../components/layout/Layout'
import Landing from '../components/landing/Landing'
import Portfolio from '../components/portfolio/Portfolio'
import About from '../components/about/About'

const IndexPage = () => (
  <Layout>
    <Landing />
    <Portfolio />
    <About />
  </Layout>
)

export default IndexPage
