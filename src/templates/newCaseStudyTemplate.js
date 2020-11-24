// Template for displaying individual case-study content

import React from "react"
import _ from "lodash"
import { graphql } from "gatsby"

import GeneralLayout from "./../components/layouts/GeneralLayout"
import ImageSlider from "./../components/organisms/ImageSlider"
import RelatedByTitle from "./../components/RelatedByTitle"
import Blockquote from "./../components/atoms/Blockquote"

export default function Template({ data, location }) {
  const { markdownRemark, allMarkdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { related_titles, specs, tags, images } = frontmatter
  const { edges } = allMarkdownRemark

  const specsList = _.map(specs, (spec, index) => (
    <li className="study__item" key={index}>
      {` `}
      {spec}
    </li>
  ))

  const tagsList = tags.map((tag, index) => (
    <button className="tags" key={index}>
      {tag}
    </button>
  ))

  return (
    <GeneralLayout
      heroTitle={frontmatter.title}
      pageTitle={`CivicActions | ${frontmatter.title}`}
      clientName={frontmatter.client_name}
      heroCTALink={frontmatter.website}
      heroCTAText="Visit Website"
      heroClass="case-study-hero"
      heroIsExternal={true}
      path={frontmatter.path}
      urlObject={location}
    >
      <div className="section__specs section">

        <section className="usa-grid study text-container">
          <Blockquote quote={frontmatter.quote} quote_source={frontmatter.quote_source}/>
        </section>

      </div>
      <div className="text-container section">
        <h3>Background</h3>
        <h4> {frontmatter.background_section_title} </h4>
        <p>{frontmatter.background_section} </p>
        <p> {frontmatter.background_section_second} </p>
      </div>
      <ImageSlider images={images} />
      <div className="text-container section">
        <div
          className="case-study-text"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      {related_titles ? (
        <RelatedByTitle posts={edges} titles={related_titles} />
      ) : null}
    </GeneralLayout>
  )
}

// Query case study content
export const newStudyQuery = graphql`
  query NewStudyByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        quote
        quote_source
        client_name
        partner
        project
        website
        background_section_title
        background_section
        background_section_second
        related_titles
        tags
        specs
        images {
          caption
          alt
          url {
            childImageSharp {
              fixed(width: 1400, height: 788) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
        }
      }
    }

    allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "new-case-study" }, path: { ne: $path } }
      }
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
                fixed(width: 600, height: 600) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
