import React from "react";
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Header from './../header/Header'
import Hero from './../header/Hero';

import header_bg from './../header/background_bg-hero.png';

export default ({children, pageTitle, heroTitle, heroSubtitle, heroCTAText, heroCTALink}) => (
  <div>
    <Helmet
      title= {pageTitle}
      meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
    />
    <header className = "section header__main">
      <Header siteTitle= "CivicActions" />
      <Hero
        title = { heroTitle}
        subtitle = { heroSubtitle }
        cta_text = { heroCTAText }
        cta_link = { heroCTALink }
      />
    </header>
    <main>
      <div>
        {children}
      </div>
    </main>
  </div>
);
