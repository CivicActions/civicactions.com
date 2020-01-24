import React from "react"
import { graphql } from "gatsby"

import GeneralLayout from "./../components/layouts/GeneralLayout"

class Contracting extends React.Component {
  render() {
    const { markdownRemark } = this.props.data
    const { frontmatter, html } = markdownRemark
    const { subtitle, title } = frontmatter

    return (
      <GeneralLayout
        heroTitle={title}
        heroSubtitle={subtitle}
        urlObject={this.props.location}
      >
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
}

export default Contracting

export const contractingQuery = graphql`
  query contracting {
    markdownRemark(frontmatter: { title: { eq: "Contracting" } }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`
