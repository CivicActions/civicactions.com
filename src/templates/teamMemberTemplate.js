// Template for displaying individual team-member content

import React from 'react';
import { graphql } from 'gatsby';

import GeneralLayout from './../components/layouts/GeneralLayout';

export default function Template({data}) {
  const{ markdownRemark } = data;
  const{ frontmatter, html } = markdownRemark;

  return (
    <GeneralLayout
      heroTitle = {frontmatter.name}
      heroSubtitle = {frontmatter.role}
      pageTitle = { `CivicActions | ${frontmatter.name}` }
    >
      <p dangerouslySetInnerHTML = {{ __html: html}} />
    </GeneralLayout>
  );
};

// Query for team member markdown content. This rarely needs to be changed
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