// Template for displaying individual team-member content

import React from 'react';
import Helmet from 'react-helmet'
import { graphql } from 'gatsby';
import Header from './../components/header'

export default function Template({data}) {
  const{ markdownRemark } = data;
  const{ frontmatter, html } = markdownRemark;

  return (
    <div>
      { /* Helmet is used to set page title and meta.
           Details here: https://github.com/nfl/react-helmet */
      }
      <Helmet
        title= {`CivicActions | ${frontmatter.name}`}
        meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
      />
      <Header siteTitle = {frontmatter.name} />
      <p dangerouslySetInnerHTML = {{ __html: html}} />
    </div>
  );
};

// Query for case study content. This rarely needs to be changed
export const teamQuery = graphql `
  query TeamByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } } ) {
      html
      frontmatter {
        path
        name
        role
      }
    }
  }
`;