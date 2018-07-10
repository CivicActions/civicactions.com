import React from 'react';
import Helmet from 'react-helmet';

export default function Template({data}) {
  console.log(data);
  const{markdownRemark} = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: html }} />
    </div>
  )
}

export const postQuery = graphql `
  query BlogPostByPath($path: String!) {
    markdownRemark(
    frontmatter: {path: { eq: $path } }

    ) {
      html
      frontmatter {
        path
        title
        post_type
      }
    }
  }
`;


