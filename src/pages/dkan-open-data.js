 import React from 'react'
import { graphql } from "gatsby"

import IconParagraphsGroup from '../components/organisms/IconParagraphsGroup'
import GeneralLayout from '../components/layouts/GeneralLayout';
import SectionTitle from '../components/atoms/SectionTitle';
import Button from "../components/atoms/Buttons";

const Dkan = ({data}) => {
  const{ markdownRemark } = data;
  const{ frontmatter, html } = markdownRemark;
  const{
    features,
    features_title,
    title,
    subtitle
  } = frontmatter;


 return(
   <GeneralLayout
     heroTitle = { title }
     heroSubtitle = { subtitle }
     >
     <section className = "section">
       <div className = "usa-grid">
         <div className = "text-container" dangerouslySetInnerHTML = {{ __html: html }} />

         <div class = "align-center">
           <Button
             button_text = "Visit getDKAN.org"
             link = "http://getdkan.org"
             />
         </div>

       </div>
     </section>

     <section className = "section section_features usa-grid neutral-hex-bg">
       <SectionTitle title = { features_title }/>
     <div className = "section__features--intro-text">DKAN comes out-of-the-box with comprehensive public-facing engagement and administrative site management tools.</div>
       <IconParagraphsGroup icons = { features } />

     </section>
    </GeneralLayout>


 );

};

export default Dkan;

export const dkanOpenDataQuery = graphql`
  query dkan {
    markdownRemark(frontmatter: { title: { eq: "Dkan and Open Data" } } ) {
    html
    frontmatter {
      title
      subtitle
      features_title
      features {
        title
        caption
        alt
        icon {
          publicURL
        }
      }
    }
  }
  }
`;
