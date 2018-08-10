import React from "react"
//import { graphql } from "gatsby"

import GeneralLayout from "./../components/layouts/GeneralLayout"
import OurPerspectives from '../components/organisms/OurPerspectives';
import ImageBand from './../components/organisms/ImageBand';

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

    const{ allMarkdownRemark } = data;
    const team = allMarkdownRemark.edges;
    const imageArray = [ image1, image2, image3, image4, image5, image6, image7, image8, image9, image10 ];


  const teamTeasers = team.map((item, index) => {
        const {image, name} = item.node.frontmatter;
        let memberImage = image ? image.childImageSharp.resize.src: '';
        // console.log('Member', memberImage);
        return (<div>{name}</div>);
    });


  return(
    <GeneralLayout
      heroTitle = "Our Team"
      heroSubtitle = "We are a fun loving, open hearted group of civic technology professionals committed to making life better for our clients and each other."
    >

      {teamTeasers}
      <p />

      <OurPerspectives />
      <section className = "feed__image--wrapper">
        <ImageBand imageArray = { imageArray }/>
      </section>
    </GeneralLayout>
  )
};

export default Team;


export const t = graphql `
 {
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "team"}}}) {
    edges {
      node {
        frontmatter {
          name
            image {
             	childImageSharp {resize(width:144, height:144) {
             	  src
             	}
            }
          }
        }
      }
    }
  }
}
`;
