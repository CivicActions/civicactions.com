import React from "react"
import { graphql } from "gatsby"

import GeneralLayout from "./../components/layouts/GeneralLayout"
import GlobalQuoteSlider from "./../components/organisms/GlobalQuoteSlider"
import SectionTitle from "./../components/atoms/SectionTitle"
import FourColGrid from "./../components/organisms/FourColGrid"

class Values extends React.Component {
  render() {
    const { markdownRemark } = this.props.data
    const { frontmatter, html } = markdownRemark
    const {
      title,
      subtitle,
      thankyou_text,
      thankyou_images,
      quotes,
      quotes_title,
    } = frontmatter

    return (
      <GeneralLayout
        heroTitle={title}
        heroSubtitle={subtitle}
        urlObject={this.props.location}
      >
        <section className="section section__values">
          <div className="usa-grid">
            <div
              className="text-container"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </section>

        <section className="section section__triple-quotes neutral-hex-bg">
          <div className="usa-grid">
            <SectionTitle title={quotes_title} />
            <div className="blockquotes__list">
              <GlobalQuoteSlider quotes={quotes} />
            </div>
          </div>
        </section>

        <section className="section section_benefits usa-grid">
          <SectionTitle title="Thanks" />
          <div className="section__benefits--intro-text">{thankyou_text}</div>
          <FourColGrid items={thankyou_images} />
        </section>
      </GeneralLayout>
    )
  }
}

export default Values

export const valuesQuery = graphql`
  query valuesPage {
    markdownRemark(frontmatter: { title: { eq: "Our Values" } }) {
      html
      frontmatter {
        title
        subtitle
        thankyou_text
        thankyou_images {
          text
          image {
            childImageSharp {
              resize(width: 516) {
                src
              }
            }
          }
        }
        quotes_title
        quotes {
          image {
            childImageSharp {
              fixed(width: 264, height: 264) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
          text
          author
        }
      }
    }
  }
`
