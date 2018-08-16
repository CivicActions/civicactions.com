import React from 'react'
import _ from 'lodash'
import { graphql } from 'gatsby'

//Components
import HomeLayout from '../components/layouts/HomeLayout'
import MediumPostList from '../components/medium-components/mediumPostList';
import GovernmentServices from '../components/organisms/GovernmentServices';
import HomeQuoteSlider from '../components/organisms/HomeQuoteSlider';
import FeaturedCaseStudies from '../components/organisms/FeaturedCaseStudies';

// Atoms
import SectionTitle from '../components/atoms/SectionTitle'
import Button from '../components/atoms/Buttons'

// Host Google Fonts locally
require('typeface-ubuntu');
require('typeface-lato');

const IndexPage = ({data}) => {

  const { allMediumPost, markdownRemark, allMarkdownRemark } = data;
  const { group } = allMediumPost;
  const { html, frontmatter } = markdownRemark;
  const { edges } = allMarkdownRemark;

  let mediumCaPosts = _.first(group, (edges) => {
     return edges;
  });

  let mediumPosts = _.map(mediumCaPosts, (post, index) => {
    return <MediumPostList key = {{ index }} posts = {{ post }} />
  });

  return (
    <HomeLayout>

      { /* The Home page content and blockquote section.
           The content in this section is pulled from '/content/home.md' */
      }
      <section className = "section__home-intro section">
        <div className = "usa-grid">
          <h3 className = "section__home-intro--quote">{ frontmatter.quote} </h3>
          <div className = "section__home-intro--text" dangerouslySetInnerHTML = {{ __html: html}} />
        </div>
      </section>

      {/* The Featured Case Studies Section*/}
      <section className = "section section__government-services neutral-hex-bg">
        <div className = "usa-grid">
          <SectionTitle title = "Work That Matters" />
          <FeaturedCaseStudies posts = { edges } />
        </div>
        <div className = "usa-grid align-right">
          <Button
            button_text = "See More Work"
            link = "/case-study"
          />
        </div>
      </section>

      {/* The Recent Posts from Medium Section.*/}
      <section className = "section section__recent-posts">
        <div className = "usa-grid">
          <SectionTitle title = "See what we've been up to" />
          { mediumPosts }
        </div>
      </section>

      {/*------ Modernizing Government Services Section--------*/}
      <GovernmentServices />

      {/*----- Get to Know Us section -------- */}
      <HomeQuoteSlider />
    </HomeLayout>
  );

}

export default IndexPage

export const mediumQuery = graphql `
    query mediumPosts {
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

     markdownRemark(frontmatter: { type: { eq: "home" } } ) {
      html
      frontmatter {
        path
        title
        subtitle
        cta_text
        cta_link
        quote
        quote_source
      }
    }

    allMarkdownRemark(limit: 3,filter: {frontmatter: { promoted_to_front_page: {eq: "yes"}}}) {
    edges {
      node {
        frontmatter {
          title
          client_name
          path
          preview_image {
            childImageSharp {
              fixed(width:600, height: 600) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }
        }
      }
    }
  }
  }
`;
