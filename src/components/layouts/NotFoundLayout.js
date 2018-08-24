// This forms the wrapper (Header + Footer) around general pages.

import React from "react";
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import '../../sass/styles.scss';
import Header from './../header/Header'
import SubFooter from './../footer/SubFooter';
import Footer from './../footer/Footer';
import config from "../../../data/SiteConfig";
import TopNav from './../navigation/TopNav';
import header_bg from './../header/background_bg-hero.png';
import hero_image from './../../files/images/404.gif';

const NotFoundLayout = ({
  siteData,
  children,
  pageTitle,
  clientName,
  heroTitle,
  heroSubtitle,
  heroCTAText,
  heroCTALink,
  heroClass,
  heroIsExternal,
  hideSubFooter,
  teamImage,
  location,
  social
  }) => (

  <StaticQuery
    query = { graphql`
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

    render = { data => (
      <>
        <Helmet
          title= {pageTitle}
          meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },

                // Social Sharing
                { name: 'og:site_name', content: data.site.siteMetadata.title },
                { property: 'og:type', content: 'website'},
                { property: 'og:url', content: location },
                { property: 'og:title', content: heroTitle },
                { property: 'og:description', content: heroSubtitle },
                { property: 'og:image', content: teamImage },
                { name: 'twitter:card', content: config.seo.twitterCard },
                { name: 'twitter:site', content: config.seo.twitterSite },
                { property: 'fb:app_id', content: config.seo.fbAppId },

                // Contact
                { property: 'og:email', content: data.site.siteMetadata.email },
                { property: 'og:phone_number', content: data.site.siteMetadata.phone },

              ]}
        />

      <header className = "section header__main usa-header usa-header-basic"
              style = {{ backgroundImage: "url(" + header_bg + ")" }}>
          <section className = "usa-nav-container">
              <div className = "usa-navbar">
                  <Header siteTitle={data.site.siteMetadata.title} />
                  <button className = "usa-menu-btn"> Menu </button>
              </div>
              <TopNav pages = { data.allSitePage } />
          </section>
          <section className = "hero usa-grid no-results">
              <div className = "hero__image"><img src = { hero_image } alt = "page not found" /></div>
              <div className = "hero__text">
                  <h1 className = "hero__title">Whoops!</h1>
                  <div className = "hero__intro-text">
                      The page you’re looking for no longer exists. May we suggest:
                      <ul>
                          <li><Link to = "/" >Visit our homepage</Link></li>
                          <li><Link to = "/careers" >View our Jobs Listing</Link></li>
                          <li><a href = "https://medium.com/civicactions">Read Our Blog</a></li>
                      </ul>
                  </div>

              </div>
          </section>
      </header>
        <main>
          <div>
            {children}
          </div>
        </main>
        <SubFooter hide = { hideSubFooter } />

        <Footer
          email = { data.site.siteMetadata.email }
          phone = { data.site.siteMetadata.phone }
          address = { data.site.siteMetadata.address }
          address_line_2 = { data.site.siteMetadata.address_line_2 }
          city = { data.site.siteMetadata.city }
        />
       </>

    )}

  />
);

export default NotFoundLayout;
