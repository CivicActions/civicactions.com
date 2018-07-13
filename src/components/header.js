import React from 'react'

import Logo from './atoms/logo/Logo';

const Header = ({ siteTitle }) => (
  <header class = "section header__main">
    <div className = "usa-grid">
      <h1 className = "usa-width-one-third">
        <Logo siteTitle = { siteTitle } />
      </h1>
    </div>
  </header>
);

export default Header
