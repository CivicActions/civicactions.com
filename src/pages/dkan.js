 import React from 'react'
import { graphql } from "gatsby"

import IconParagraphsGroup from '../components/organisms/IconParagraphsGroup'
import GeneralLayout from '../components/layouts/GeneralLayout';
import SectionTitle from '../components/atoms/SectionTitle';
import Button from "../components/atoms/Buttons";
import RelatedStudies from '../components/RelatedStudies'; 

const Dkan = ({data}) => {
  const{ markdownRemark, allMarkdownRemark} = data;
  const{edges} = allMarkdownRemark;
  const{ frontmatter, html} = markdownRemark;
  const{
    features,
    features_title,
    tags,
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

     <section className = "section section_features neutral-hex-bg">
       <section className = "usa-grid">
         <SectionTitle title = { features_title }/>
         <div className = "section__features--intro-text">DKAN comes out-of-the-box with comprehensive public-facing engagement and administrative site management tools.</div>
         <IconParagraphsGroup icons = { features } />
       </section>
     </section>

     { (tags && edges) ? (
       <RelatedStudies
         posts={ edges }
         tags={ tags }
         customClasses='section__related-content--no-bg'
       />
     ) : null}

    </GeneralLayout>
 );

};

export default Dkan;

export const dkanOpenDataQuery = graphql`
query dkan {
  markdownRemark(frontmatter: { title: { eq: "DKAN and Open Data" } } ) {
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
      tags
    }
  }

  allMarkdownRemark(
    filter: {frontmatter: {type: {eq: "case-study"}}}
    limit: 3
  ) {
    totalCount
    edges {
      node {
        frontmatter {
          client_name
          title
          path
          tags
          preview_image {
            childImageSharp {
              resize(width: 300, height: 300) {
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
