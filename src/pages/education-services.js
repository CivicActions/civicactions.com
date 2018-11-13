import React from 'react';
import { graphql } from "gatsby";

import GeneralLayout from '../components/layouts/GeneralLayout';
import SectionTitle from '../components/atoms/SectionTitle';

const EducationServices = ({data}) => {
  const{ markdownRemark} = data;
  const{ frontmatter, html} = markdownRemark;
  const{
    title,
    subtitle
  } = frontmatter;

  return (
    <GeneralLayout
      heroTitle = { title }
      heroSubtitle = { subtitle } >
      
      <section className = "section">
        <div className = "usa-grid">
          <div className = "text-container"
               dangerouslySetInnerHTML = {{ __html: html }} />
        </div>
      </section>

      {/* This is a placeholder for features content. See pages/dkan.js */}
      {/* for how this can be used. */}
      {/* <section className = "section section_features neutral-hex-bg"> */}
      {/*   <section className = "usa-grid"> */}
      {/*     <SectionTitle title = { features_title }/> */}
      {/*     <div className = "section__features--intro-text">Lorem ipsum</div> */}
      {/*     <IconParagraphsGroup icons = { features } /> */}
      {/*   </section> */}
      {/* </section> */}
      
      {/* This is a placeholder for related titles content. see pages/ */}
      {/* dkan.js for how the graphql query can be added. */}
      {/* { (related_titles && edges) ? */}
      {/*   <RelatedByTitle */}
      {/*     posts = { edges } */}
      {/*     titles = { related_titles } */}
      {/*     customClasses='section__related-content--no-bg' */}
      {/*   /> */}
      {/*   : null */}
      {/* } */}
   
    </GeneralLayout>
  );

};

export default EducationServices;

export const educationServicesQuery = graphql`
query educactionServices {
  markdownRemark(frontmatter: { title: { eq: "Digital Information Technology Acquisitions Professional (DITAP) Training" } } ) {
    html
    frontmatter {
      title
      subtitle
    }
  }
}
`;
