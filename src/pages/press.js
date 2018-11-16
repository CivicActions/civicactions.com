import React from "react";
import { graphql } from "gatsby";
import Link from "gatsby-link";

import GeneralLayout from './../components/layouts/GeneralLayout';
import PressTeaser from './../components/PressTeaser';

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
  }
};

const Press = ({ data, pathContext }) => {

  // pagination. See gatsby node for loading of pathContext.
  const { group, index, first, last} = pathContext;
  const previousUrl = index - 1 === 1 ? "/press" : '/press/' + (index - 1).toString();
  const nextUrl = '/press/' + (index + 1).toString();

  const{ markdownRemark } = data;
  const{ frontmatter} = markdownRemark;
  const {title, subtitle} = frontmatter;

  let pressItems = group.map(({ node }, index) => {
    const{ frontmatter, html } = node;
    const { title, date, publication, link_text, website} = frontmatter;

    return (
      <PressTeaser
        publication = { publication}
        date = { date }
        key = { index }
        title = { title }
        text = { html }
        link_text = { link_text }
        website = { website }
      />
    );
  });

  return (
    <GeneralLayout
      heroTitle = {title}
      heroSubtitle = {subtitle}
    >
      <section className = "section">
       <div className = "usa-grid text-container">
         <ul className = "press__list">
           { pressItems }
         </ul>

         <div className="previousLink">
           <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
         </div>
         <div className="nextLink">
           <NavLink test={last} url={nextUrl} text="Go to Next Page" />
         </div>
       </div>
      </section>
    </GeneralLayout>
  )

}
export default Press;

export const pressQuery = graphql `
query pressPage {
  markdownRemark(frontmatter: { title: { eq: "Press" } } ) {
    frontmatter {
      title
      subtitle
    }
  }
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
