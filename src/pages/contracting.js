import React from "react"
import { graphql } from "gatsby"

import GeneralLayout from "./../components/layouts/GeneralLayout"

import gsaSchedule from "./../content/docs/GSA-Schedule.pdf"
import cmasSchedule from "./../content/docs/CMAS-Schedule.pdf"
import Link from "./../components/scripts/Link"

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
            <div class="text-container">
              <ul>
                <li>
                  <a href={gsaSchedule}>GSA Schedule 70 (PDF)</a>
                </li>
                <li>
                  <a href={cmasSchedule}>CMAS Schedule 3-16-70-3298A (PDF)</a>
                </li>
              </ul>
            </div>
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
