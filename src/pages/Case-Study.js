import React from "react"
import { graphql } from "gatsby"

import GeneralLayout from "./../components/layouts/GeneralLayout"
import CaseStudyTeaser from "./../components/CaseStudyTeaser"
import CaseStudyTripleQuotes from "./../components/organisms/CaseStudyTripleQuotes";
import FeaturedClients from "./../components/organisms/FeaturedClients";

const CaseStudies = ({data}) => {
  const{allMarkdownRemark} = data;
  const{edges} = allMarkdownRemark;

  let studyTeasers = edges.map((item, index) => {
    const { title, client_name, preview_image, path } = item.node.frontmatter;
    let image = preview_image !== null ? preview_image.childImageSharp.resize : null;

    return (
      <CaseStudyTeaser
        title = { title }
        image = { image }
        client_name = { client_name }
        link = { path }
        key = { index }
      />
    )
  });

  return(
    <GeneralLayout
      heroTitle = "Case Studies"
      heroSubtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac."
    >
      <section className = "section section__case-studies usa-grid">
        { studyTeasers }
      </section>
      <CaseStudyTripleQuotes />
      <FeaturedClients />
    </GeneralLayout>
  )

};

export default CaseStudies;

export const allCaseStudies = graphql `
  query allCaseStudyNodes {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "case-study"}}}) {
    totalCount
    edges {
      node {
        frontmatter {
          client_name
          title
          path
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