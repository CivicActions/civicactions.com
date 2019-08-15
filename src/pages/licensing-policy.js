import React from 'react'
import { graphql } from 'gatsby'

import GeneralLayout from '../components/layouts/GeneralLayout'

const LicensingPolicy = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { subtitle, title } = frontmatter

  return (
    <GeneralLayout heroTitle={title} heroSubtitle={subtitle}>
      <section className="section">
        <div className="usa-grid">
          <div
            className="text-container"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>
    </GeneralLayout>
  )
}

export default LicensingPolicy

export const licensingPolicyQuery = graphql`
  query licensingPolicy {
    markdownRemark(frontmatter: { title: { eq: "Licensing Policy" } }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`
