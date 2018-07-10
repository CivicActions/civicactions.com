// Template for displaying individual team-member content

import React from 'react';
import { graphql } from 'gatsby';

export default function Template({data}) {
  const{ markdownRemark } = data;
  const{ frontmatter, html } = markdownRemark;

  return (
    <div>
      <h1>{ frontmatter.name }</h1>
      <h3>This is the team member template. </h3>
      <p dangerouslySetInnerHTML = {{ __html: html}} />
    </div>
  );
};

// Query case study content
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