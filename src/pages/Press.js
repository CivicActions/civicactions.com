import React from "react";
import { graphql } from "gatsby";

import GeneralLayout from './../components/layouts/GeneralLayout';
import PressTeaser from './../components/PressTeaser';

const Press = ({ data }) => {
  const{ allMarkdownRemark } = data;
  const{ edges } = allMarkdownRemark;

  let pressItems = edges.map((item, index) => {
    const{ node } = item;
    const{ frontmatter, html } = node;
    const { title, date, publication, link_text, website} = frontmatter;

    return (
      <PressTeaser
        publication = { publication}
        date = { date }
        title = { title }
        text = { html }
        link_text = { link_text }
        website = { website }
      />
    )

  });

  return (
    <GeneralLayout
      heroTitle = "Press"
      heroSubtitle = "CivicActions in the news"
    >
      <section className = "section">
       <div className = "usa-grid text-container">
         <ul className = "press__list">
           { pressItems }
         </ul>
       </div>
      </section>
    </GeneralLayout>
  )

}
export default Press;

export const pressQuery = graphql `
  query pressPage {
    allMarkdownRemark(
    sort: {fields: [frontmatter___date], order: DESC},
    filter: {frontmatter: {type: {eq: "press"}}}) {
    edges {
      node {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          publication
          link_text
          website
        }
        html
      }
    }
  }
  }
`;

