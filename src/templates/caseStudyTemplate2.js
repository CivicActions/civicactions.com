// Template for displaying individual case-study content

import React from "react"
import _ from "lodash"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import GeneralLayout from "./../components/layouts/GeneralLayout"
import RelatedByTitle2 from "./../components/RelatedByTitle2"
import Blockquote from "./../components/atoms/Blockquote"
import MarkdownIconParagraphsGroup from "./../components/organisms/MarkdownIconParagraphsGroup"
import Markdown from "react-markdown"

export default function Template({ _, location }) {
  const data = useStaticQuery(query)
  let caseStudy = {}
  data.allStrapiCaseStudy.nodes.map((node, i) => {
    if (node.Path == "/case-study/" + location.href.split("/")[4]) {
      caseStudy = node
    }
  })

  const figuresList = caseStudy.New_Style.Impact_Stat.map((stat, i) => (
    <div key={i}>
      <header>{stat.Header}</header>
      <Markdown source={stat.Text} escapeHtml={false} />
    </div>
  ))

  const technologiesList = caseStudy.New_Style.Technology.map(
    (technology, i) => <li key={i}>{technology.Text}</li>
  )

  const clientGoalBullets = caseStudy.New_Style.Client_Goal_Bullet.map(
    (bullet, i) => <li key={i}>{bullet.Text}</li>
  )

  const expertiseBullets = caseStudy.New_Style.Expertise.map((bullet, i) => (
    <li key={i}>{bullet.Text}</li>
  ))

  const approachSection = caseStudy.New_Style.Approach_Section.map(
    (section, index) => (
      <div className="approach-row" key={index}>
        <div className="one-twelfth"></div>

        <div className="four-twelfths">
          <h5>{section.Title}</h5>
          <Markdown source={section.Text} escapeHtml={false} />
        </div>

        <div className="six-twelfths hero__image">
          <img src={section.Image.publicURL}></img>
          {/* TODO: Caption not Getting Displayed */}
          <div className="slide__caption">{""}</div>
        </div>

        <div className="one-twelfth"></div>
      </div>
    )
  )
  return (
    <GeneralLayout
      heroTitle={caseStudy.Title}
      pageTitle={`CivicActions | ${caseStudy.Title}`}
      clientName={caseStudy.Client_Name}
      heroCTALink={caseStudy.Website}
      heroCTAText="Visit Website"
      heroClass="case-study-hero"
      heroIsExternal={true}
      path={caseStudy.Path}
      urlObject={location}
    >
      <div className="section__specs-small section">
        <section className="usa-grid study text-container">
          <Blockquote
            quote={caseStudy.New_Style.Quote.Quote}
            quote_source={caseStudy.New_Style.Quote.Source}
            quote_class="new-blockquote"
          />
        </section>
        <section className="usa-grid wide-container">
          <figure>{figuresList}</figure>
        </section>
      </div>

      <div className="text-container section">
        <h3>The Challenge</h3>
        <Markdown
          source={caseStudy.New_Style.Challenge_Text}
          escapeHtml={false}
        />
        <h5>Client Goal</h5>
        <Markdown
          source={caseStudy.New_Style.Client_Goal_Text}
          escapeHtml={false}
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
          <img src={caseStudy.New_Style.Approach_Image.publicURL}></img>
          {/* TODO: Caption not Getting Displayed */}
          <div className="slide__caption">
            {caseStudy.New_Style.Approach_Image.caption}
          </div>
        </div>
        <Markdown
          source={caseStudy.New_Style.Approach_Text}
          escapeHtml={false}
        />
      </div>

      <div className="wide-container">
        <section className="usa-grid fluid approach-section">
          {approachSection}
        </section>
      </div>

      <div class="off-color outcomes-section wide-container">
        <h3>Key Outcomes</h3>
        <section className="wide-container usa-grid">
          <MarkdownIconParagraphsGroup outcomes={caseStudy.New_Style.Outcome} />
        </section>
      </div>

      <div className="text-container section">
        <Markdown source={caseStudy.New_Style.Explore} escapeHtml={false} />
      </div>
      {caseStudy.Related_Case_Studies ? (
        <RelatedByTitle2 posts={caseStudy.Related_Case_Studies} />
      ) : null}
    </GeneralLayout>
  )
}

// Query case study content
export const query = graphql`
  {
    allStrapiCaseStudy {
      nodes {
        id
        Path
        Style
        Title
        Client_Name
        Related_Case_Studies {
          Client_Name
          Path
          Title
          Old_Style {
            Preview_Image {
              childImageSharp {
                fixed(height: 150, width: 150) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
            }
          }
        }
        New_Style {
          Title
          Path
          Outcome_Text
          Explore
          Client_Name
          Client_Goal_Text
          Challenge_Text
          Approach_Text
          Approach_Image {
            publicURL
            name
            internal {
              description
            }
          }
          Approach_Section {
            Text
            Title
            Image {
              publicURL
            }
          }
          Client_Goal_Bullet {
            Text
          }
          Expertise {
            Text
          }
          Impact_Stat {
            Header
            Text
          }
          Outcome {
            Caption
            Title
            Icon {
              url
            }
          }
          Preview_Image {
            childImageSharp {
              fixed(height: 150, width: 150) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
          Quote {
            Quote
            Source
          }
          Technology {
            Text
          }
        }
        Old_Style {
          Approach
          Project
          Website
          Background {
            Section_One
            Section_Two
            Title
          }
          Images {
            alternativeText
            caption
            url
          }
          Preview_Image {
            childImageSharp {
              fixed(height: 300, width: 300) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
          Specs {
            Text
          }
        }
      }
    }
  }
`
