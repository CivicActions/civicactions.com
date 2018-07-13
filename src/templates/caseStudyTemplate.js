// Template for displaying individual case-study content

import React from 'react';
import Helmet from 'react-helmet'
import { graphql } from 'gatsby';

import Header from './../components/header/Header'

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
      <Header siteTitle = "Civicactions" />
      <h1>{ frontmatter.title }</h1>
      <p dangerouslySetInnerHTML = {{ __html: html}} />
    </div>
  );
};

// Query case study content
export const studyQuery = graphql `
  query StudyByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } } ) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;