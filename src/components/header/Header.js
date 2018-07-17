import React from 'react'

import Logo from './../atoms/logo/Logo';
import header_bg from './background_bg-hero.png';

const Header = ({ siteTitle }) => {

  return(
      <header className = "section header__main"
              style = {{ backgroundImage: "url(" + header_bg + ")" }}>
        <div className = "usa-grid">
          <h1 className = "usa-width-one-third">
            <Logo siteTitle = { siteTitle } />
          </h1>
        </div>
      </header>
    )
};

export default Header
