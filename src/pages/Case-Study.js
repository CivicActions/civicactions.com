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
    "Devops",
    "Education Services",
    "Quality Assurance",
    "Innovation Lab"
  ];

  return(
    <GeneralLayout
      heroTitle = "Case Studies"
      heroSubtitle = "We help organizations provide better outcomes for citizens. From all levels of government to NGOs and nonprofits, we understand how to manage the complexities of big projects and partner with clients to create services and software that solve the most important problems."
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