// Template for displaying individual case-study content

import React from "react"
import _ from "lodash"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import GeneralLayout from "./../components/layouts/GeneralLayout"
import RelatedByTitle from "./../components/RelatedByTitle"
import Blockquote from "./../components/atoms/Blockquote"
import MarkdownIconParagraphsGroup from "./../components/organisms/MarkdownIconParagraphsGroup"

export default function Template({ data, location }) {
  const { markdownRemark, allMarkdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const {
    figures,
    client_goal_bullets,
    expertise,
    client_technologies,
    approach_text,
    related_titles,
    specs,
    tags,
    approach_image,
    approach_sections,
    approach_index,
    outcome_text,
    outcomes,
  } = frontmatter
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

  const figuresList = figures.map(figure => (
    <div>
      <header>{figure.header}</header>
      <p dangerouslySetInnerHTML={{ __html: figure.text }} />
    </div>
  ))

  const technologiesList = client_technologies.map(technology => (
    <li>{technology}</li>
  ))

  const clientGoalBullets = client_goal_bullets.map(bullet => <li>{bullet}</li>)

  const expertiseBullets = expertise.map(bullet => <li>{bullet}</li>)

  const approachSection = approach_sections.map((section, index) => (
    <div className="approach-row">
      <div className="one-twelfth"></div>

      <div className="four-twelfths">
        {approach_index && <h3>0{index + 1}</h3>}
        <h5>{section.title}</h5>
        <div dangerouslySetInnerHTML={{ __html: section.text }} />
      </div>

      <div className="six-twelfths hero__image">
        <Img
          sizes={section.image.url.childImageSharp.fluid}
          alt={section.image.alt}
          title={section.image.alt}
        />
        <div className="slide__caption">{section.image.caption}</div>
      </div>

      <div className="one-twelfth"></div>
    </div>
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
      <div className="section__specs-small section">
        <section className="usa-grid study text-container">
          <Blockquote
            quote={frontmatter.quote}
            quote_source={frontmatter.quote_source}
            quote_class="new-blockquote"
          />
        </section>
        <section className="usa-grid wide-container">
          <figure>{figuresList}</figure>
        </section>
      </div>

      <div className="text-container section">
        <h3>The Challenge</h3>
        <div dangerouslySetInnerHTML={{ __html: frontmatter.challenge_text }} />
        <h5>Client Goal</h5>
        <div
          dangerouslySetInnerHTML={{ __html: frontmatter.client_goal_text }}
        />
        <ul>{clientGoalBullets}</ul>
      </div>

      <div className="wide-container">
        <section className="usa-grid grid-section">
          <div className="one-half off-color list-box">
            <h5>Expertise</h5>
            <ul>{expertiseBullets}</ul>
          </div>

          <div className="one-half off-color list-box">
            <h5>Tools & Technologies</h5>
            <ul>{technologiesList}</ul>
          </div>
        </section>
      </div>

      <div className="text-container">
        <h3>Our Approach</h3>
        <div className="hero__image study-hero">
          <Img
            sizes={approach_image.url.childImageSharp.fluid}
            alt={approach_image.alt}
            title={approach_image.alt}
          />
          <div className="slide__caption">{approach_image.caption}</div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: approach_text }} />
      </div>

      <div className="wide-container">
        <section className="usa-grid fluid approach-section">
          {approachSection}
        </section>
      </div>

      <div class="off-color outcomes-section wide-container">
        <h3>Key Outcomes</h3>
        <section className="wide-container usa-grid">
          <MarkdownIconParagraphsGroup icons={outcomes} />
        </section>
      </div>

      <div className="text-container section">
        <div dangerouslySetInnerHTML={{ __html: html }} />
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
        figures {
          header
          text
        }
        client_name
        website
        challenge_text
        client_goal_text
        client_goal_bullets
        expertise
        client_technologies
        related_titles
        tags
        specs
        approach_text
        approach_image {
          caption
          alt
          url {
            childImageSharp {
              fluid(maxHeight: 1400) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        approach_sections {
          title
          text
          image {
            caption
            alt
            url {
              childImageSharp {
                fluid(maxHeight: 1400) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
        approach_index
        outcome_text
        outcomes {
          title
          caption
          icon {
            publicURL
          }
        }
      }
    }

    allMarkdownRemark(
      filter: {
        frontmatter: {
          type: { in: ["case-study", "new-case-study"] }
          path: { ne: $path }
        }
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
