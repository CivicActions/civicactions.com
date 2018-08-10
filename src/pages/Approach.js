import React from 'react'
import { graphql } from "gatsby"

import GeneralLayout from '../components/layouts/GeneralLayout'

const Approach = ({data}) => {
  const{ markdownRemark } = data;
  const{ frontmatter, html } = markdownRemark;
  const{ title, subtitle } = frontmatter;


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
    }
  }
  }
`;