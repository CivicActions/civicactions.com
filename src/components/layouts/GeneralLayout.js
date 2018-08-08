// This forms the wrapper (Header + Footer) around general pages.

import React from "react";
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from "gatsby";

import Header from './../header/Header'
import Hero from './../header/Hero';
import SubFooter from './../footer/SubFooter';
import Footer from './../footer/Footer';

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
  teamImage,
  location,
  social }) => (

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
       }
    `}

    render = { data => (
      <>
        <Helmet
          title= {pageTitle}
          meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
        />
        <header className = "section header__main"
              style = {{ backgroundImage: "url(" + header_bg + ")" }}>
          <Header siteTitle= "CivicActions" />
          <Hero
            client_name = { clientName }
            title       = { heroTitle }
            subtitle    = { heroSubtitle }
            cta_text    = { heroCTAText }
            cta_link    = { heroCTALink }
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
        <SubFooter />
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

export default GeneralLayout;
