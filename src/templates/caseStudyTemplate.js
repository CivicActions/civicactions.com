// Template for displaying individual case-study content

import React from 'react';
import { graphql } from 'gatsby';

export default function Template({data}) {
  const{ markdownRemark } = data;
  const{ frontmatter, html } = markdownRemark;

  return (
    <div>
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