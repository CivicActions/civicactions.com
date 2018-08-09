// Template for displaying individual case-study content

import React from 'react';
import _ from 'lodash'
import { graphql } from 'gatsby';

import GeneralLayout from './../components/layouts/GeneralLayout';
import ImageSlider from './../components/organisms/ImageSlider';
import RelatedStudies from './../components/RelatedStudies';

export default function Template({data}) {
  const{ markdownRemark, allMarkdownRemark } = data;
  const{ frontmatter, html } = markdownRemark;
  const{ specs, tags, images } = frontmatter;
  const{edges} = allMarkdownRemark;

  let specsList = _.map(specs, (spec, index) => {
    return <li className = "study__item" key = { index }> { spec }</li>
  });

  let tagsList = tags.map((tag, index) => {
    return <button className = "tags" key = { index }>{ tag }</button>
  });

  return (
    <GeneralLayout
      heroTitle = {frontmatter.title}
      pageTitle = { `CivicActions | ${frontmatter.title}` }
      clientName = { frontmatter.client_name }
      heroCTALink = { frontmatter.website }
      heroCTAText = "Visit Website"
      heroClass = "case-study-hero"
    >
      <div className = "section__specs section">
        <section className = "usa-grid study">
          <div className = "study__project study--col">
            <h3>Project</h3>
            <div className = "study__project__title">{ frontmatter.project }</div>
          </div>
          <div className = "study__tech-specs study--col">
            <h3> Tech Specs </h3>
            <ul>{ specsList }</ul>
          </div>
        </section>
      </div>
      <div className = "text-container section">
        <h3>Background</h3>
        <h4> { frontmatter.background_section_title } </h4>
        <p>{ frontmatter.background_section } </p>
      </div>
      <ImageSlider images = { images } />
      <div className = "text-container section">
        <p className = "case-study-text" dangerouslySetInnerHTML = {{ __html: html }} />
        { tagsList }
      </div>
      <RelatedStudies posts = { edges } tags = { tags } />

    </GeneralLayout>
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
        client_name
        project
        website
        background_section_title
        background_section
        tags
        specs
        images {
          caption
          alt
          url {
          childImageSharp {
            resize(width: 1400, height: 860) {
              src
            }
          }
        }
         }
      }
    }

    allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "case-study"}, path: {ne: $path}}}
      limit: 3
    ) {
    totalCount
    edges {
      node {
        frontmatter {
          client_name
          title
          path
          tags
          preview_image {
            childImageSharp {
              resize(width: 300, height: 300) {
                src
              }
            }
          }
        }
      }
    }
  }
  }
`;