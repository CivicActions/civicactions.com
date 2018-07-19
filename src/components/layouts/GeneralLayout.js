import React from "react";
import Helmet from 'react-helmet'

import Header from './../header/Header'
import Hero from './../header/Hero';


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
