import React from "react"
import _ from "lodash"
import { graphql } from "gatsby"

// Components
import HomeLayout from "../components/layouts/HomeLayout"
import Teaser from "./../components/Teaser"
import GlobalQuoteSlider from "./../components/organisms/GlobalQuoteSlider"
import FeaturedCaseStudies from "../components/organisms/FeaturedCaseStudies"
// Atoms
import SectionTitle from "../components/atoms/SectionTitle"
import Link from "./../components/scripts/Link"

const IndexPage = ({ data }) => {
  const { markdownRemark, allMarkdownRemark } = data
  const { html, frontmatter } = markdownRemark
  const { edges } = allMarkdownRemark
  const {
    government_services_title,
    quotes,
    quotes_title,
    government_services,
    medium_teasers,
  } = frontmatter

  const mediumTeasers = _.map(medium_teasers, (item, index) => {
    const { title, link, date } = item
    return (
      <li className="medium--teaser__item teaser__item">
        <Teaser
          key={{ index }}
          teaserDate={date}
          teaserTitle={title}
          teaserLink={link}
        />
      </li>
    )
  })

  const governmentServices = _.map(government_services, (item, index) => {
    const { title, image, text, link } = item
    const img = image ? image.childImageSharp.fixed.src : null
    return (
      <Teaser
        key={{ index }}
        teaserTitle={title}
        teaserImage={img}
        teaserText={text}
        teaserLink={link}
      />
    )
  })

  return (
    <HomeLayout urlObject={location}>
      {/* The Home page content and blockquote section.
           The content in this section is pulled from '/content/home.md' */}
      <section className="section__home-intro section">
        <div className="usa-grid">
          <h3 className="section__home-intro--quote">{frontmatter.quote} </h3>
          <div
            className="section__home-intro--text"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>

      {/* The Featured Case Studies Section*/}
      <section className="section section__government-services neutral-hex-bg">
        <div className="usa-grid">
          <SectionTitle title="Work that matters" />
          <FeaturedCaseStudies posts={edges} />
        </div>
        <div className="usa-grid align-right">
          <Link
            children="See More Work"
            to="/case-study"
            className="link-button"
          />
        </div>
      </section>

      {/* The Recent Posts from Medium Section.*/}
      <section className="section section__recent-posts">
        <div className="usa-grid">
          <SectionTitle title="See what we've been up to" />
          <ul className="medium--teasers teaser--wrapper">{mediumTeasers}</ul>
        </div>
        <div className="usa-grid align-right">
          <Link
            children="Read Our Blog"
            to="https://medium.com/civicactions"
            className="link-button"
          />
        </div>
      </section>

      {/* ------ Modernizing Government Services Section--------*/}
      <section className="section section__government-services neutral-hex-bg">
        <div className="usa-grid columns columns--teaser">
          <SectionTitle title={government_services_title} />
          {governmentServices}
        </div>
      </section>

      {/* ----- Get to Know Us section -------- */}
      <section className="section section__triple-quotes">
        <div className="usa-grid">
          <SectionTitle title={quotes_title} />
          <div className="blockquotes__list">
            <GlobalQuoteSlider quotes={quotes} />
          </div>
        </div>
        {/* ----- Meet our team -------- */}
        <div className="usa-grid align-right top-space">
          <Link children="Meet Our Team" to="/team" className="link-button" />
        </div>
      </section>
    </HomeLayout>
  )
}

export default IndexPage

export const query = graphql`
  query content {
    markdownRemark(frontmatter: { type: { eq: "home" } }) {
      html
      frontmatter {
        path
        title
        subtitle
        cta_text
        cta_link
        quote
        quotes_title
        quotes {
          author
          image {
            childImageSharp {
              fixed(width: 264, height: 264) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
          text
        }
        medium_teasers {
          date
          title
          link
        }
        government_services_title
        government_services {
          link
          text
          title
          image {
            childImageSharp {
              fixed(width: 590, height: 300) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
        }
      }
    }

    allMarkdownRemark(
      limit: 3
      filter: { frontmatter: { promoted_to_front_page: { eq: "yes" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            client_name
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
