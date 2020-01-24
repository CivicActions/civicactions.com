// This forms the wrapper (Header + Footer) around the home page
import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import Header from "./../header/Header"
import HeroHome from "./../header/HeroHome"
import SubFooter from "./../footer/SubFooter"
import Footer from "./../footer/Footer"
import config from "../../../data/SiteConfig"
import TopNav from "./../navigation/TopNav"
import header_bg from "./../header/background_bg-hero.png"
import logo from "./../header/logo.png"

const Layout = ({ children, urlObject }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            email
            phone
            address
            address_line_2
            city
          }
        }

        markdownRemark(frontmatter: { type: { eq: "home" } }) {
          html
          frontmatter {
            path
            title
            subtitle
            cta_text
            cta_link
            quote
          }
        }

        allSitePage {
          edges {
            node {
              path
              fields {
                slug
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
            {
              name: `description`,
              content: `Open and Agile Digital Government Services`,
            },
            // { name: 'keywords', content: 'sample, something' },

            // Social Sharing
            { name: `og:site_name`, content: data.site.siteMetadata.title },
            { property: `og:type`, content: `website` },
            { property: `og:url`, content: urlObject.href },
            { property: `og:title`, content: data.site.siteMetadata.title },
            {
              property: `og:description`,
              content: `Open and Agile Digital Government Services`,
            },
            { property: `og:image`, content: `${urlObject.origin}${logo}` },
            { name: `twitter:card`, content: config.seo.twitterCard },
            { name: `twitter:site`, content: config.seo.twitterSite },
            { name: `twitter:image`, content: `${urlObject.origin}${logo}` },
            { property: `fb:app_id`, content: config.seo.fbAppId },

            // Contact
            { property: `og:email`, content: data.site.siteMetadata.email },
            {
              property: `og:phone_number`,
              content: data.site.siteMetadata.phone,
            },
          ]}
        />

        <header
          className="section header__main"
          style={{ backgroundImage: `url(` + header_bg + `)` }}
        >
          <section className="usa-nav-container">
            <div className="usa-navbar">
              <Header siteTitle={data.site.siteMetadata.title} />
              <button className="usa-menu-btn"> Menu </button>
            </div>
            <TopNav pages={data.allSitePage} />
          </section>
          <HeroHome info={data.markdownRemark.frontmatter} />
        </header>
        <main>
          <div>{children}</div>
        </main>
        <SubFooter />

        <Footer
          email={data.site.siteMetadata.email}
          phone={data.site.siteMetadata.phone}
          address={data.site.siteMetadata.address}
          address_line_2={data.site.siteMetadata.address_line_2}
          city={data.site.siteMetadata.city}
        />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
