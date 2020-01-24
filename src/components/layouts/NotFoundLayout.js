// This forms the wrapper (Header + Footer) around general pages.

import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import "../../sass/styles.scss"
import Header from "./../header/Header"
import SubFooter from "./../footer/SubFooter"
import Footer from "./../footer/Footer"
import config from "../../../data/SiteConfig"
import TopNav from "./../navigation/TopNav"
import header_bg from "./../header/background_bg-hero.png"
import hero_image from "./../../files/images/404.gif"

const NotFoundLayout = ({
  siteData,
  children,
  pageTitle,
  clientName,
  heroTitle,
  heroIntroText,
  heroSubtitle,
  heroCTAText,
  heroCTALink,
  heroClass,
  heroIsExternal,
  hideSubFooter,
  teamImage,
  location,
  social,
}) => (
  <StaticQuery
    query={graphql`
      query NoResultsMetaQuery {
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
          title={pageTitle}
          meta={[ ]}
        />

        <header
          className="section header__main usa-header usa-header-basic"
          style={{ backgroundImage: `url(` + header_bg + `)` }}
        >
          <section className="usa-nav-container">
            <div className="usa-navbar">
              <Header siteTitle={data.site.siteMetadata.title} />
              <button className="usa-menu-btn"> Menu </button>
            </div>
            <TopNav pages={data.allSitePage} />
          </section>
          <section className="hero usa-grid no-results">
            <div className="hero__image">
              <img src={hero_image} alt="page not found" />
            </div>
            <div className="hero__text">
              <h1 className="hero__title">{heroTitle}</h1>
              <div className="hero__intro-text">
                {heroIntroText}
                <ul>
                  <li>
                    <Link to="/">Visit our homepage</Link>
                  </li>
                  <li>
                    <Link to="/careers">View our job listings</Link>
                  </li>
                  <li>
                    <a href="https://medium.com/civicactions">Read our blog</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </header>
        <main>
          <div>{children}</div>
        </main>
        <SubFooter hide={hideSubFooter} />

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

export default NotFoundLayout
