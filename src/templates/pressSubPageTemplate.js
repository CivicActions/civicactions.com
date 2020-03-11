// Template for displaying press sub-page content.

import React from "react"
import { graphql } from "gatsby"

import GeneralLayout from "./../components/layouts/GeneralLayout"

export default function Template({ data, location }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title } = frontmatter

  return (
    <GeneralLayout
      heroTitle={title}
      heroClass="press-sub-page__hero"
      pageTitle={`88888CivicActions | ${title}`}
      path={frontmatter.path}
      urlObject={location}
    >
      <div className="text-container section">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </GeneralLayout>
  )
}

// Query for team member markdown content. This rarely needs to be changed
export const pressSubPageQuery = graphql`
  query PressByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
