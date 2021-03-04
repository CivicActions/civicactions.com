// Template for displaying individual case-study content

import React from "react"
import _ from "lodash"
import { graphql, useStaticQuery } from "gatsby"
import GeneralLayout from "./../components/layouts/GeneralLayout"
import Markdown from "react-markdown"
import ImageSlider from "./../components/organisms/ImageSlider"
import RelatedByTitle2 from "./../components/RelatedByTitle2"

export default function Template({ _, location }) {
  const data = useStaticQuery(query)
  data.allStrapiCaseStudy.nodes.map((node, i) => {
    if (node.Path == "/case-study/" + location.href.split("/")[4]) {
      caseStudy = node
    }
  })
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
      <div className="section__specs section">
        <section className="usa-grid study">
          <div className="study__project study--col">
            <h3>Project</h3>
            <div className="study__project__title">
              {caseStudy.Old_Style.Project}
            </div>
          </div>
          <div className="study__tech-specs study--col">
            <h3> Tech Specs </h3>
            <ul>
              {caseStudy.Old_Style.Specs.map((spec, i) => {
                return (
                  <li className="study__item" key={i}>
                    {` `}
                    {spec.Text}
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      </div>
      <div className="text-container section">
        <h3>Background</h3>
        <h4> {caseStudy.Old_Style.Background.Title} </h4>
        <p>{caseStudy.Old_Style.Background.Section_One} </p>
        <p> {caseStudy.Old_Style.Background.Section_Two} </p>
      </div>
      <ImageSlider images={caseStudy.Old_Style.Images} />
      <div className="text-container section">
        <div className="case-study-text">
          <Markdown source={caseStudy.Old_Style.Approach} escapeHtml={false} />
        </div>
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
            childImageSharp {
              fixed(height: 150, width: 150) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
          Approach_Section {
            Text
            Title
            Image {
              childImageSharp {
                fixed(height: 150, width: 150) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
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
