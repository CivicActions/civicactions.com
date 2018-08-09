import React from "react"
import _ from 'lodash'
import { graphql } from "gatsby"

import GeneralLayout from "./../components/layouts/GeneralLayout"
import Benefits from '../components/organisms/Benefits';
import ImageBand from './../components/organisms/ImageBand'

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
  const{ allJob } = data;
  const { edges } = allJob;
  const imageArray = [ image1, image2, image3, image4, image5, image6, image7, image8, image9, image10 ];


  const jobs = _.map(edges, (job, index) => {

    let url = `http://civicactions.applytojob.com/apply/${job.node.board_code}`;

    return (
        <li key = { job.node.id }>
          <h4>{ job.node.title }</h4>
          <p>Location: { job.node.city}, { job.node.state }</p>
          <p>Type: { job.node.type }</p>
          <a href = {url} > View Details</a>
        </li>
      )
  });

  return(
    <GeneralLayout
      heroTitle = "Careers"
      heroSubtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      hideSubFooter =  {true}
    >
      <ul>
        {jobs}
      </ul>

     <Benefits/>
      <section className = "feed__image--wrapper">
        <ImageBand imageArray = { imageArray }/>
      </section>

    </GeneralLayout>
  )
};

export default Careers;


export const jobsQuery = graphql `
  query jobsQuery {
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
