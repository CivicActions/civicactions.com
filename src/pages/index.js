import React from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import MediumPostList from '../components/medium-components/mediumPostList';
import Button from '../components/atoms/Buttons'
import Blockquote from '../components/atoms/Blockquote'

// Host Google Fonts locally
require('typeface-ubuntu');
require('typeface-lato');

const IndexPage = ({data}) => {

  const { allMediumPost, markdownRemark } = data;
  const { group } = allMediumPost;
  const { html, frontmatter } = markdownRemark;

  let mediumCaPosts = _.first(group, (edges) => {
     return edges;
  });

  let mediumPosts = _.map(mediumCaPosts, (post, index) => {
    return <MediumPostList key = {{ index }} posts = {{ post }} />
  });

  return (
    <Layout>
      <section className = "home__content usa-grid">
        { /* The Text and Blockquote content in the Home Content section is pulled from '/content/home.md' */}
        <h3 className = "home__content--text" dangerouslySetInnerHTML = {{ __html: html}} />
        <Blockquote content = {frontmatter} quote_class = "home__content--quote " />
      </section>
      <section>{ mediumPosts }</section>
      <Link to = "/page-2/" >Go to page 2</Link>
    </Layout>
  );

}

export default IndexPage

export const mediumQuery = graphql `
    query mediumPosts($path: String!) {
    allMediumPost(limit: 3) {
      group(field: homeCollectionId ) {
        edges {
          node {
            id
            title
            createdAt
            uniqueSlug
          }
        }
      }
    }

     markdownRemark(frontmatter: { path: { eq: $path } } ) {
      html
      frontmatter {
        path
        title
        subtitle
        cta_text
        cta_link
        quote
        quote_source
        banner_image {
          childImageSharp {
            resize(width: 980) {
              src
            }
          }
        }
      }
    }
  }
`;
