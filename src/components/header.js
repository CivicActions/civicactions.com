import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header>
    <div class = "usa-grid">
      <h1 class = "usa-width-one-whole">
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
