// Template for displaying individual case-study content

import React from 'react';
import _ from 'lodash'
import { graphql } from 'gatsby';

import GeneralLayout from './../components/layouts/GeneralLayout';
import ImageSlider from './../components/organisms/ImageSlider';

export default function Template({data}) {
  const{ markdownRemark } = data;
  const{ frontmatter, html } = markdownRemark;
  const{ specs, tags, images } = frontmatter;

  let specsList = _.map(specs, (spec, index) => {
    return <li className = "study__item" key = { index }> { spec }</li>
  });

  let tagsList = tags.map((tag, index) => {
    return <span className = "tags" key = { index }>{ tag }</span>
  });

  return (
    <GeneralLayout
      heroTitle = {frontmatter.title}
      pageTitle = { `CivicActions | ${frontmatter.title}` }
      clientName = { frontmatter.client_name }
      heroCTALink = { frontmatter.website }
      heroCTAText = "Visit Website"
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
        <div dangerouslySetInnerHTML = {{ __html: html }} />
        { tagsList }
      </div>

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
  }
`;