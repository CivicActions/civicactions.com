// Template for displaying general pages

import PropTypes from "prop-types"

import React from "react"
import { graphql } from "gatsby"

import GeneralLayout from "./../components/layouts/GeneralLayout"
import Link from "./../components/scripts/Link"

export default function Template({ data, location }) {
  const { markdownRemark, allMarkdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { supplemental, cta_text, cta_link } = frontmatter
  console.log(frontmatter)

  return (
    <GeneralLayout
      heroTitle={frontmatter.title}
      heroSubtitle={frontmatter.subtitle}
      pageTitle={`CivicActions | ${frontmatter.title}`}
      heroCTAText={cta_text}
      heroCTALink={cta_link}
      heroClass={supplemental ? "has-supplement-hero" : null}
      urlObject={location}
    >
      {supplemental ? (
        <div className="section__supplemental section">
          <section className="usa-grid supplemental__grid">
            {supplemental.map(column => (
              <div
                key={column.label}
                className="supplemental supplemental--col"
              >
                <h4>{column.label}</h4>
                <p>{column.content}</p>
              </div>
            ))}
          </section>
        </div>
      ) : null}
      <div className="text-container section">
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {cta_link ? (
          <div style={{textAlign: 'center', marginTop: '2em'}}>
          <Link
            to={frontmatter.cta_link}
            children={frontmatter.cta_text}
            className="link-button usa-button-navy"
          />
          </div>
        ) : null}
      </div>
    </GeneralLayout>
  )
}

// Query uncategorized markdown content
export const generalPageQuery = graphql`
  query GeneralPageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        redirect_from
        title
        subtitle
        supplemental {
          label
          content
        }
        cta_text
        cta_link
      }
    }
  }
`
