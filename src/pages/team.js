import React from "react"
import { graphql } from "gatsby"

import GeneralLayout from "./../components/layouts/GeneralLayout"
import TeaserGrid from './../components/TeaserGrid';
import GlobalQuotesSlider from './../components/organisms/GlobalQuoteSlider';
import ImageBand from './../components/organisms/ImageBand';
import SectionTitle from "./../components/atoms/SectionTitle";

const Team = ({data}) => {

  const{ markdownRemark, allMarkdownRemark } = data;
  const managers = allMarkdownRemark.group[0].edges;
  const nonmanagers = allMarkdownRemark.group[1].edges;
  const team = managers.concat(nonmanagers);

  const {
    image_band,
    quotes,
    quotes_title,
    title,
    subtitle } = markdownRemark.frontmatter;

  const teamTeasers = team.map((item, index) => {
      const {image, name, path, published, role} = item.node.frontmatter;
      return (
              <TeaserGrid
                image={image}
                name={name}
                link={path}
                published={published}
                title={role}
              />
      )
    });

  return(
    <GeneralLayout
      heroTitle = {title}
      heroSubtitle = {subtitle}
    >
      <section className = "section usa-grid section__teaser-grid">
        {teamTeasers}
      </section>

      <section className = "section section__triple-quotes neutral-hex-bg team">
        <div className = "usa-grid">
          <SectionTitle title={quotes_title} />
          <div
            className = "blockquotes__list">
            <GlobalQuotesSlider quotes={quotes} />
          </div>
        </div>
      </section> 

      <section className = "feed__image--wrapper">
        <ImageBand imageArray = { image_band }/> 
      </section>
    </GeneralLayout>
  )
};

export default Team;


export const t = graphql `
{
  markdownRemark(frontmatter: { title: { eq: "Our Team" } } ) {
    frontmatter {
      image_band {
        childImageSharp{
                 resize(quality: 50){
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
          childImageSharp{
            fixed(width:264, height: 264) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        text
      }
    }
  }
    allMarkdownRemark(
    filter: {
      frontmatter: {
        type: {
          eq: "team"
        }
      }
    }
    sort: {
      fields: frontmatter___name, 
      order: ASC
    }
  ) 
  {
    group (field: frontmatter___manager) {
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
  }
  
  
}
`;

