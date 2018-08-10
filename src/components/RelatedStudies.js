import React from "react";
import PropTypes from 'prop-types';


import CaseStudyTeaser from "./../components/CaseStudyTeaser";
import SectionTitle from './../components/atoms/SectionTitle';


const RelatedStudies = ({posts, tags}) => {
  let relatedStudiesCounter = 0;

  const relatedContent = (posts.map((post, index) => {
    const{ node } = post;
    const{ frontmatter } = node;
    const{ title, preview_image, client_name, path } = frontmatter;

    let image = preview_image !== null ? preview_image.childImageSharp.resize : null;
    let relatedTags = post.node.frontmatter.tags;
    // This compares the tags in the current page with the tags in the related case studies.
    // It only returns true if the current and related case studies have any tags in common.
    let isRelated = tags.some(v => relatedTags.includes(v));

    if(isRelated) {
      relatedStudiesCounter ++;

      return (
        <CaseStudyTeaser
          title = { title }
          image = { image }
          client_name = { client_name }
          link = { path }
          key = { index }
        />
      )
    } else {
      return null;
    }
  }));

  if(relatedStudiesCounter > 0) {
    return (
      <div className = "section section__related-content">
        <section className = "usa-grid">
          <SectionTitle title = "Related Case Studies"/>
            <div className = "related-content__list">
              { relatedContent }
            </div>
        </section>
      </div>);
  } else {
    return null;
  }

};

export default RelatedStudies;

RelatedStudies.Proptypes = {
  tags: PropTypes.array,
  posts: PropTypes.object
}