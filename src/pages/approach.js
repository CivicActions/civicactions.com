import React from 'react'
import { graphql } from "gatsby"

import GeneralLayout from '../components/layouts/GeneralLayout'
import SectionTitle from '../components/atoms/SectionTitle'
import IconParagraphsGroup from '../components/organisms/IconParagraphsGroup'
import RolloverIconGroup from '../components/organisms/RolloverIconGroup'

const Approach = ({data}) => {
  const{ markdownRemark } = data;
  const{ frontmatter, html } = markdownRemark;
  const{
    title,
    subtitle,
    services_title,
    services_subtitle,
    services,
    technologies_title,
    technologies_subtitle,
    technologies } = frontmatter;

 return(
   <GeneralLayout
     heroTitle = { title }
     heroSubtitle = { subtitle }
     >
     <section className = "section">
       <div className = "usa-grid">
         <p className = "text-container" dangerouslySetInnerHTML = {{ __html: html }} />
       </div>
     </section>

     <section className = "section section_benefits usa-grid">
       <SectionTitle title = { services_title }/>
       <div className = "section__benefits--intro-text">{ services_subtitle }</div>
       <IconParagraphsGroup icons = { services } />
     </section>

     <section
       className = "section section__featured_clients usa-grid">

       <div className = "section__featured_clients--intro_wrapper">
         <SectionTitle title = { technologies_title }/>
         <div className = "section__featured_clients--intro-text">
           { technologies_subtitle}
         </div>
       </div>

       <RolloverIconGroup technologies = { technologies} />
     </section>

   </GeneralLayout>
 );

};

export default Approach

export const approachQuery = graphql`
  query approachPage {
    markdownRemark(frontmatter: { type: { eq: "approach" } } ) {
    html
    frontmatter {
      title
      subtitle
      services_title
      services_subtitle
      technologies_title
      technologies_subtitle
      services {
        title
        caption
        alt
        icon {
          publicURL
        }
      }
      technologies {
        icon {
          publicURL
        }
        title
        url
      }
    }
  }
  }
`;