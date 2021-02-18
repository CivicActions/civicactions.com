import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import GeneralLayout from "./../components/layouts/GeneralLayout"
import TeaserGrid from "./../components/TeaserGrid"
import GlobalQuotesSlider from "./../components/organisms/GlobalQuoteSlider"
import ImageBand from "./../components/organisms/ImageBand"
import SectionTitle from "./../components/atoms/SectionTitle"

const Team = props => {
  const data = useStaticQuery(query)
  console.log(data)
  const { markdownRemark, allMarkdownRemark } = data
  const {
    image_band,
    quotes,
    quotes_title,
    title,
    subtitle,
  } = markdownRemark.frontmatter
  const teamTeasers = data.allStrapiStaffProfile.nodes.map((node, i) => {
    return (
      <TeaserGrid
        image={node.Image}
        name={node.Name}
        link={node.Path}
        published={node.Path}
        title={node.Role}
      />
    )
  })
  return (
    <GeneralLayout
      heroTitle="Our Team"
      heroSubtitle="We are a fun loving, open-hearted group of civic technology professionals committed to making life better for our clients and each other."
      urlObject={props.location}
    >
      <section className="section usa-grid section__teaser-grid">
        {teamTeasers}
      </section>
      <section className="section section__triple-quotes neutral-hex-bg team">
        <div className="usa-grid">
          <SectionTitle title={quotes_title} />
          <div className="blockquotes__list">
            <GlobalQuotesSlider quotes={quotes} />
          </div>
        </div>
      </section>

      <section className="feed__image--wrapper">
        <ImageBand imageArray={image_band} />
      </section>
    </GeneralLayout>
  )
}

export default Team

export const query = graphql`
  {
    markdownRemark(frontmatter: { title: { eq: "Our Team" } }) {
      frontmatter {
        image_band {
          childImageSharp {
            resize(quality: 50) {
              src
            }
          }
        }
        subtitle
        title
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
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "team" } } }
      sort: { fields: [frontmatter___manager, frontmatter___name], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            name
            image {
              childImageSharp {
                fixed(width: 250, height: 250) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
            }
            path
            published
            manager
            role
            title
          }
        }
      }
    }
    allStrapiStaffProfile {
      nodes {
        id
        Name
        Pronunciation
        Personal_Pronouns
        Role
        Path
        Location
        Quote
        Social {
          Title
          Url
        }
        Specialty {
          Specialty
          id
        }
        Body
        Image {
          childImageSharp {
            fixed(height: 150, width: 150) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        Audio {
          publicURL
        }
      }
    }
  }
`
