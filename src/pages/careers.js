import React from "react"
import _ from 'lodash'
import { graphql } from "gatsby"

import SectionTitle from "./../components/atoms/SectionTitle"
import GeneralLayout from "./../components/layouts/GeneralLayout"
import Benefits from '../components/organisms/Benefits';
import ImageBand from './../components/organisms/ImageBand'
import ImageSlider from './../components/organisms/ImageSlider';
import GlobalQuoteSlider from './../components/organisms/GlobalQuoteSlider';

// Image band Images
import image1 from './../files/image-band/IMG_20170919_085448.jpg'
import image2 from './../files/image-band/IMG_20170918_123826.jpg';
import image3 from './../files/image-band/IMG_20170920_191202.jpg';
import image4 from './../files/image-band/sacramento.jpg';
import image5 from './../files/image-band/rachel-presentation.jpg';
import image6 from './../files/image-band/20170919_174032_HDR.jpg';
import image7 from './../files/image-band/IMG_20170918_182447.jpg';
import image8 from './../files/image-band/IMG_20180713_130136.jpg';
import image9 from './../files/image-band/IMG_0577.jpg';
import image10 from './../files/image-band/IMG_20170918_122218.jpg';

const Careers = ({data}) => {
  const { allJob, markdownRemark } = data;
  const { html,frontmatter } = markdownRemark;
    const {
        benefits_title,
        images,
         quotes,
         quotes_title,
         openings_subtitle,
         openings_title,
         title,
         subtitle,
        } = frontmatter;
  const { edges } = allJob;
  const imageArray = [ image1, image2, image3, image4, image5, image6, image7, image8, image9, image10 ];

  const jobs = _.map(edges, (job, index) => {

    let url = `http://civicactions.applytojob.com/apply/${job.node.board_code}`;

    return (
      <li key = { job.node.id } className = "teaser__item">
        <h4 className =  "teaser__title">{ job.node.title }</h4>
        <div className = "teaser__text">Location: { job.node.city}, { job.node.state }</div>
        <div className = "teaser__text">Type: { job.node.type }</div>
        <div className = "teaser__link"><a href = {url}> View Details</a></div>
      </li>
    )
  });

  return(
    <GeneralLayout
      heroTitle = { title }
      heroSubtitle = { subtitle }
      hideSubFooter =  {true}
    >

      <ImageSlider images = { images } />

      <section className = "section">
        <div className = "usa-grid">
          <div className = "text-container" dangerouslySetInnerHTML = {{ __html: html }} />
        </div>
      </section>

      <section className = "section section__triple-quotes neutral-hex-bg">
        <div className = "usa-grid">
          <SectionTitle title = { quotes_title } />
          <div className = "blockquotes__list">
            <GlobalQuoteSlider quotes = {quotes} />
          </div>
        </div>
      </section>

      <Benefits title={benefits_title} />

      <section className = "section section__recent-posts neutral">
        <div className = "usa-grid">
          <SectionTitle
            title = {openings_title}
            subtitle = {openings_subtitle}
          />
          <ul className = "teaser--wrapper">
            {jobs}
          </ul>
        </div>
      </section>
      <section className = "feed__image--wrapper">
        <ImageBand imageArray = { imageArray }/>
      </section>

    </GeneralLayout>
  )
};

export default Careers;

export const jobsQuery = graphql `
query jobsQuery {
    markdownRemark(frontmatter: { title: { eq: "Careers" } } ) {
    html
    frontmatter {
        images {
          caption
          alt
          url {
          childImageSharp {
            resize(width: 1400, height: 860) {
              src
             }
           }
         }
       }
        benefits_title
        openings_title
        openings_subtitle
        title
        subtitle
        quotes_title
        quotes {
          image {
            childImageSharp{
              fixed(width:264, height: 264) {
              ...GatsbyImageSharpFixed_noBase64
              }
            }
          }
          text
          author
        }
      }
    }
  allJob {
    edges {
      node {
        id,
        title,
        city,
        state,
        type,
        board_code
      }
    }
  }
}
`;
