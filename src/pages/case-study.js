import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GeneralLayout from "./../components/layouts/GeneralLayout"
import FeaturedClients from "./../components/organisms/FeaturedClients"
import FilteredCaseStudies from "./../components/FilteredCaseStudies"
import GlobalQuoteSlider from "./../components/organisms/GlobalQuoteSlider"
import SectionTitle from "./../components/atoms/SectionTitle"
import CaseStudyTeaser from "./../components/CaseStudyTeaser"
import Img from "gatsby-image"

const CaseStudies = props => {
  const data = useStaticQuery(query)
  const { quotes, quotes_title } = data.markdownRemark.frontmatter
  return (
    <GeneralLayout
      heroTitle="Case Studies"
      heroSubtitle="We help organizations provide better outcomes for people. Our years of experience with government and nonprofit clients have taught us how to manage the complexities of big projects and create partnerships that result in lasting success."
      urlObject={props.location}
    >
      <section className="section usa-grid section__case-studies">
        {data.allStrapiCaseStudy.nodes.map((node, i) => {
          const image =
            node.Old_Style !== null
              ? node.Old_Style.Preview_Image.childImageSharp.fixed
              : node.New_Style.Preview_Image.childImageSharp.fixed
          return (
            <CaseStudyTeaser
              title={node.Title}
              image={image}
              client_name={node.Client_Name}
              link={node.Path}
              key={i}
            />
          )
        })}
      </section>
      <section className="section section__triple-quotes neutral-hex-bg">
        <div className="usa-grid">
          <div className="absolute">
            <SectionTitle title={quotes_title} />
            <div className="blockquotes__list">
              <GlobalQuoteSlider quotes={quotes} />
            </div>
          </div>
        </div>
      </section>
      <FeaturedClients />
    </GeneralLayout>
  )
}

export default CaseStudies

export const query = graphql`
  query allCaseStudyNodes {
    markdownRemark(frontmatter: { title: { eq: "Case Studies" } }) {
      frontmatter {
        quotes_title
        quotes {
          author
          image {
            childImageSharp {
              fixed(width: 134, height: 134) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
          text
        }
      }
    }
    allStrapiCaseStudy(filter: { Featured: { eq: "True" } }) {
      nodes {
        id
        Path
        Style
        Title
        Client_Name
        New_Style {
          Preview_Image {
            childImageSharp {
              fixed(height: 150, width: 150) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
        }
        Old_Style {
          Preview_Image {
            childImageSharp {
              fixed(height: 300, width: 300) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`
