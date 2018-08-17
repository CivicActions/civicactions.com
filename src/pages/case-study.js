import React from "react"
import { graphql } from "gatsby"

import GeneralLayout from "./../components/layouts/GeneralLayout"
import CaseStudyTripleQuotes from "./../components/organisms/CaseStudyTripleQuotes";
import FeaturedClients from "./../components/organisms/FeaturedClients";
import FilteredCaseStudies from "./../components/FilteredCaseStudies";

const CaseStudies = ({data}) => {
  const{allMarkdownRemark} = data;
  const{edges} = allMarkdownRemark;

  let allTags = [
    "All",
    "UX",
    "Open Data",
    "Security and Compliance",
    "Support",
    "Drupal",
    "DevOps",
    "Education Services",
    "Quality Assurance",
    "Innovation Lab"
  ];

  return(
    <GeneralLayout
      heroTitle = "Case Studies"
      heroSubtitle = "We help organizations provide better outcomes for people. Our years of experience with government and nonprofit clients have taught us how to manage the complexities of big projects and create partnerships that result in lasting success."
    >
      <FilteredCaseStudies posts = { edges } allTags = { allTags } />
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
          tags
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