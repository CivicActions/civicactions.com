import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header>
    <div className = "usa-grid">
      <h1 className = "usa-width-one-whole">
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

export default Header
