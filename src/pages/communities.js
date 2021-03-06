import React from "react"
import _ from "lodash"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SectionTitle from "../components/atoms/SectionTitle"
import Link from "./../components/scripts/Link"
import GeneralLayout from "./../components/layouts/GeneralLayout"

class Communities extends React.Component {
  render() {
    const { markdownRemark } = this.props.data
    const { frontmatter, html } = markdownRemark

    return (
      <GeneralLayout
        heroTitle={frontmatter.title}
        heroSubtitle={frontmatter.subtitle}
        urlObject={this.props.location}
      >
        <section className="section section__communities">
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

export default Communities

export const communitiesQuery = graphql`
  query communityPosts {
    markdownRemark(frontmatter: { title: { eq: "Our Communities" } }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`
