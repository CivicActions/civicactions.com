import React from 'react'
import { graphql } from 'gatsby'

import Logo from './../atoms/logo/Logo';

const Header = ({ data, siteTitle }) => {

  console.log(data);

  return(
    <div className = "usa-grid">
      <h1 className = "usa-width-one-third">
        <Logo siteTitle = { siteTitle } />
      </h1>
    </div>
  )
};

export default Header

export const headerTitleQuery = graphql `
  query TitleQuery {
        site {
          siteMetadata {
            title
          }
        }
   }
`
