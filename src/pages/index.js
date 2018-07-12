import React from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import MediumPostList from '../components/medium-components/mediumPostList';

const IndexPage = ({data}) => {

  const { allMediumPost } = data;
  const { group } = allMediumPost;

  let mediumCaPosts = _.first(group, (edges) => {
     return edges;
  });

  let mediumPosts = _.map(mediumCaPosts, (post, index) => {
    return <MediumPostList key = {{ index }} posts = {{ post }} />
  });

  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to = "/page-2/" >Go to page 2</Link>

      { mediumPosts }
    </Layout>
  );

}

export default IndexPage

export const mediumQuery = graphql `
    query mediumPosts {
    allMediumPost {
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
  }
`;