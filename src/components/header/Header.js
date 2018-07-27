import React from 'react'

import Logo from './../atoms/logo/Logo';

const Header = ({ data, siteTitle }) => {

  return(
    <div className = "usa-grid ">
      <h1 className = "usa-width-one-third header__inner">
        <Logo siteTitle = { siteTitle } />
      </h1>
    </div>
  )
};

export default Header
