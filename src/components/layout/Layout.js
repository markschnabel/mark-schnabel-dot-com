import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import {throttle} from 'lodash'

// Import typefaces here to make them available globally
import 'typeface-lato'
import 'typeface-inter'

// Local imports
import './layout.css'
import { screens as twScreens } from '../../../tailwind'
import Container from '../shared/Container'
import Navbar from './navbar/Navbar'
import MobileMenu from './mobileMenu/MobileMenu'
import Footer from './Footer'

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mobileMenuIsOpen: false,
      navShouldBeTransparent: true,
    }

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.handleScroll = throttle(this.handleScroll.bind(this), 300)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.handleScroll)
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

  handleScroll() {
    console.log('confused');
    if (window.scrollY > 10) {
      this.setState({ navShouldBeTransparent: false })
    } else {
      this.setState({ navShouldBeTransparent: true })
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
              navShouldBeTransparent={this.state.navShouldBeTransparent}
              toggleMobileMenu={this.toggleMobileMenu}
              mobileMenuIsOpen={this.state.mobileMenuIsOpen}
            />
            <MobileMenu mobileMenuIsOpen={this.state.mobileMenuIsOpen} />
            <Container>
              {this.props.children}
              <Footer />
            </Container>
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
