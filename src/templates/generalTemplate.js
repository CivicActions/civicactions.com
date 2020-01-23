// Template for displaying general pages

import React from "react"
import { graphql } from "gatsby"

import GeneralLayout from "./../components/layouts/GeneralLayout"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <GeneralLayout
      heroTitle={frontmatter.title}
      heroSubtitle={frontmatter.subtitle}
      pageTitle={`CivicActions | ${frontmatter.title}`}
      heroCTAText={frontmatter.cta_text}
      heroCTALink={frontmatter.cta_link}
      urlObject={location}
    >
      <div className="text-container section">
        <div dangerouslySetInnerHTML={{ __html: html }} />
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
        title
        subtitle
        cta_text
        cta_link
      }
    }
  }
`
