import React from "react";
import PropTypes from 'prop-types';

import {existy, filterPostsByTitle} from "../helpers";
import CaseStudyTeaser from "./../components/CaseStudyTeaser";
import SectionTitle from './../components/atoms/SectionTitle';


const RelatedByTitle = ({posts, titles}) => {

  const relatedContent = (filterPostsByTitle(
    posts.map((p) => {return (existy(p) && existy(p.node) && existy(p.node.frontmatter) ? p.node.frontmatter : null)}), titles).splice(0,3).map((post, index) => {
      const{ title, preview_image, client_name, path } = post;

      let image = preview_image !== null ? preview_image.childImageSharp.resize : null;
      return (
        <CaseStudyTeaser
          title = { title }
          image = { image }
          client_name = { client_name }
          link = { path }
          key = { index }
        />
      );
    }));


  if(relatedContent) {
    return (
      <div className = "section section__related-content neutral-hex-bg">
        <section className = "usa-grid">
          <SectionTitle title = "Related Case Studies"/>
          <div className = "related-content__list">
            {relatedContent}
            </div>
        </section>
      </div>);
  } else {
    return null;
  }

};

export default RelatedByTitle;

RelatedByTitle.Proptypes = {
  posts: PropTypes.object,
  titles: PropTypes.array
}
