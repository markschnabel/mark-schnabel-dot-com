import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// Import typefaces here to make them available globally
import 'typeface-lato'

// Local imports
import './layout.css'
import { screens as twScreens } from '../../../tailwind'
import Container from '../styled/Container'
import Navbar from './navbar/Navbar'
import MobileMenu from './mobileMenu/MobileMenu'

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = { mobileMenuIsOpen: false }

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  /**
   * Window resize listener to ensure that if the user resizes the browser when
   * the menu is open to the point it hits it's CSS breakpoint where it is hidden
   * in favor of navbar links that it will not be still in the open state if the
   * user resizes the browser to a smaller width
   */
  handleResize() {
    if (window.innerWidth >= parseInt(twScreens.lg.replace('px', ''))) {
      this.setState({ mobileMenuIsOpen: false })
    }
  }

  toggleMobileMenu() {
    this.setState(prevState => ({
      mobileMenuIsOpen: !prevState.mobileMenuIsOpen,
    }))
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                description
                keywords
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content: data.site.siteMetadata.description,
                },
                {
                  name: 'keywords',
                  content: data.site.siteMetadata.keywords,
                },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Navbar
              toggleMobileMenu={this.toggleMobileMenu}
              mobileMenuIsOpen={this.state.mobileMenuIsOpen}
            />
            <Container>{this.props.children}</Container>
            <MobileMenu mobileMenuIsOpen={this.state.mobileMenuIsOpen} />
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
