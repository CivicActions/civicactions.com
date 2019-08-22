import React from "react"
import { graphql } from "gatsby"

import IconParagraphsGroup from "../components/organisms/IconParagraphsGroup"
import GeneralLayout from "../components/layouts/GeneralLayout"
import SectionTitle from "../components/atoms/SectionTitle"
import Link from "./../components/scripts/Link"
import RelatedByTitle from "../components/RelatedByTitle"

const Dkan = ({ data }) => {
  const { markdownRemark, allMarkdownRemark } = data
  const { edges } = allMarkdownRemark
  const { frontmatter, html } = markdownRemark
  const {
    features,
    features_title,
    title,
    related_titles,
    subtitle,
  } = frontmatter

  return (
    <GeneralLayout heroTitle={title} heroSubtitle={subtitle}>
      <section className="section">
        <div className="usa-grid">
          <div
            className="text-container"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <div className="align-center">
            <Link
              to="http://getdkan.org"
              children="Visit getDKAN.org"
              className="link-button external-link"
            />
          </div>
        </div>
      </section>

      <section className="section section_features neutral-hex-bg">
        <section className="usa-grid">
          <SectionTitle title={features_title} />
          <div className="section__features--intro-text">
            DKAN comes out-of-the-box with comprehensive public-facing
            engagement and administrative site management tools.
          </div>
          <IconParagraphsGroup icons={features} />
        </section>
      </section>

      {related_titles && edges ? (
        <RelatedByTitle
          posts={edges}
          titles={related_titles}
          customClasses="section__related-content--no-bg"
        />
      ) : null}
    </GeneralLayout>
  )
}

export default Dkan

export const dkanOpenDataQuery = graphql`
  query dkan {
    markdownRemark(frontmatter: { title: { eq: "DKAN and Open Data" } }) {
      html
      frontmatter {
        title
        subtitle
        features_title
        features {
          title
          caption
          alt
          icon {
            publicURL
          }
        }
        related_titles
      }
    }

    allMarkdownRemark(filter: { frontmatter: { type: { eq: "case-study" } } }) {
      totalCount
      edges {
        node {
          frontmatter {
            client_name
            title
            path
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
