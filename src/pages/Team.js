import React from "react"
//import { graphql } from "gatsby"

import GeneralLayout from "./../components/layouts/GeneralLayout"

import OurPerspectives from '../components/organisms/OurPerspectives';

const Team = ({data}) => {

    const{ allMarkdownRemark } = data;
    const team = allMarkdownRemark.edges;

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
