import React from "react"
import { graphql } from "gatsby"

import GeneralLayout from "./../components/layouts/GeneralLayout"
import TeaserGrid from './../components/TeaserGrid';
import GlobalQuotesSlider from './../components/organisms/GlobalQuoteSlider';
import ImageBand from './../components/organisms/ImageBand';
import SectionTitle from "./../components/atoms/SectionTitle";

// Image band Images
//@todo pull these images dynamically from a file source.
import image1 from './../files/image-band/IMG_20170918_154333.jpg'
import image2 from './../files/image-band/IMG_20170920_204528.jpg';
import image3 from './../files/image-band/IMG_20170918_123609.jpg';
import image4 from './../files/image-band/IMG_20170731_140737.jpg';
import image5 from './../files/image-band/IMG_20170919_110610.jpg';
import image6 from './../files/image-band/IMG_20170919_152538.jpg';
import image7 from './../files/image-band/IMG_20160928_101410.jpg';
import image8 from './../files/image-band/IMG_20170916_214353.jpg';
import image9 from './../files/image-band/IMG_20170915_224222.jpg';
import image10 from './../files/image-band/IMG_20170918_122841.jpg';

const Team = ({data}) => {

  const{ markdownRemark, allMarkdownRemark } = data;
  const team = allMarkdownRemark.edges;
  const imageArray = [ image1, image2, image3, image4, image5, image6, image7, image8, image9, image10 ];
  const {title, subtitle, quotes, quotes_title} = markdownRemark.frontmatter;

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
        <ImageBand imageArray = { imageArray }/>
      </section>
    </GeneralLayout>
  )
};

export default Team;


export const t = graphql `
{
  markdownRemark(frontmatter: { title: { eq: "Our Team" } } ) {
    frontmatter {
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
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "team"}}}) {
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
          role
          title
        }
      }
    }
  }
}
`;

