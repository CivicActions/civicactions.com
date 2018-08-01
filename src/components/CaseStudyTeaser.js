import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import PropTypes from 'prop-types';

const CaseStudyTeaser = ({image, title, link, client_name}) => {

  let preview_image = image ? <div className = "teaser--case-study__image"><Img sizes = { image } /></div> : null;

  return (
    <Link to = { link } className = "teaser--case-study--wrapper">
      <div className = "teaser--case-study">
        { preview_image }
        <div className = "teaser--case-study__text">
          <span className = "teaser--case-study__client">{ client_name }</span>
          <h4 className = "teaser--case-study__title">{ title }</h4>
        </div>
      </div>
    </Link>
  )
}

export default CaseStudyTeaser;

CaseStudyTeaser.propTypes = {
  image: PropTypes.object, // returns and image object that uses childImageSharp.
  title: PropTypes.string, // The Case study post title
  link: PropTypes.string, // Link to the case study post
  client_name: PropTypes.string // The Case Study Client Name
};