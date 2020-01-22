import React from "react"
import { graphql } from "gatsby"

import GeneralLayout from "./../components/layouts/GeneralLayout"
import FeaturedClients from "./../components/organisms/FeaturedClients"
import FilteredCaseStudies from "./../components/FilteredCaseStudies"
import GlobalQuoteSlider from "./../components/organisms/GlobalQuoteSlider"
import SectionTitle from "./../components/atoms/SectionTitle"

const CaseStudies = ({ data }) => {
  const { markdownRemark, allMarkdownRemark } = data
  const { edges } = allMarkdownRemark
  const { quotes, quotes_title } = markdownRemark.frontmatter

  const allTags = [
    `All`,
    `UX`,
    `Open Data`,
    `Security and Compliance`,
    `Support`,
    `Drupal`,
    `DevOps`,
    `Education Services`,
    `Quality Assurance`,
    `Innovation Lab`,
  ]

  return (
    <GeneralLayout
      heroTitle="Case Studies"
      heroSubtitle="We help organizations provide better outcomes for people. Our years of experience with government and nonprofit clients have taught us how to manage the complexities of big projects and create partnerships that result in lasting success."
    >
      <FilteredCaseStudies posts={edges} allTags={allTags} />

      <section className="section section__triple-quotes neutral-hex-bg">
        <div className="usa-grid">
          <div className="absolute">
            <SectionTitle title={quotes_title} />
            <div className="blockquotes__list">
              <GlobalQuoteSlider quotes={quotes} />
            </div>
          </div>
        </div>
      </section>
      <FeaturedClients />
    </GeneralLayout>
  )
}

export default CaseStudies

export const allCaseStudies = graphql`
  query allCaseStudyNodes {
    markdownRemark(frontmatter: { title: { eq: "Case Studies" } }) {
      frontmatter {
        quotes_title
        quotes {
          author
          image {
            childImageSharp {
              fixed(width: 134, height: 134) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
          text
        }
      }
    }

    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "case-study" } } }
      sort: { fields: [frontmatter___weight], order: ASC }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            client_name
            title
            path
            tags
            weight
            preview_image {
              childImageSharp {
                fixed(width: 600, height: 600) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`
