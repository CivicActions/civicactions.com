// This forms the wrapper (Header + Footer) around general pages.

import React from "react";
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from "gatsby";

import Header from './../header/Header'
import Hero from './../header/Hero';
import SubFooter from './../footer/SubFooter';
import Footer from './../footer/Footer';
import config from "../../../data/SiteConfig";
import ExternalLink from './../scripts/ExternalLink';
import TopNav from './../navigation/TopNav';

import '../../../node_modules/uswds/dist/js/uswds';
import header_bg from './../header/background_bg-hero.png';


const GeneralLayout = ({
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
      query SiteMetaQuery {
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

        <header className = "section header__main"
              style = {{ backgroundImage: "url(" + header_bg + ")" }}>
            <section className = "usa-nav-container">
                <div className = "usa-navbar">
                    <Header siteTitle= "CivicActions" />
                    <button className = "usa-menu-btn">Menu</button>
                </div>
                <TopNav pages = { data.allSitePage } />
            </section>
          <Hero
            client_name = { clientName }
            title       = { heroTitle }
            subtitle    = { heroSubtitle }
            cta_text    = { heroCTAText }
            cta_link    = { heroCTALink }
            cta_is_external = { heroIsExternal }
            hero_class  = { heroClass }
            image       = { teamImage }
            location    = { location }
            social      = { social }
          />
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

       <ExternalLink/>

       </>

    )}

    />
);

export default GeneralLayout;
