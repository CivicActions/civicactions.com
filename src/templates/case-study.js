import React from 'react';
import Helmet from 'react-helmet';

export default function Template({data}) {

  const{markdownRemark} = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div>
      <h1>This is the case study template. Title: {frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: html }} />
    </div>
  )
}


export const caseStudyQuery = graphql `
  query StudyByPath($path: String!) {
    markdownRemark(frontmatter: {path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        post_type
      }
    }
  }
`;
