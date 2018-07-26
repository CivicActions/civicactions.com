// This forms the wrapper (Header + Footer) around the home page

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Header from './../header/Header'
import HeroHome from './../header/HeroHome';
import SubFooter from './../footer/SubFooter';

import '../../sass/styles.scss';
import header_bg from './../header/background_bg-hero.png';


const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }

      markdownRemark(frontmatter: {path: { eq: "/" }}) {
      html
      frontmatter {
        path
        title
        subtitle
        cta_text
        cta_link
        quote
        banner_image {
          childImageSharp {
            resize(width: 1400) {
              src
            }
          }
        }
      }
    }
    }
    `}
    render={data => (

      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <header className = "section header__main"
              style = {{ backgroundImage: "url(" + header_bg + ")" }}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <HeroHome info = {data.markdownRemark.frontmatter}/>
        </header>
        <main>
          <div>
            {children}
           </div>
        </main>
        <footer>
          <SubFooter />
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
