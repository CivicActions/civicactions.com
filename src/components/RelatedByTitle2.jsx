import React from "react"
import PropTypes from "prop-types"

import { existy, filterPostsByTitle } from "../helpers"
import CaseStudyTeaser from "./../components/CaseStudyTeaser"
import SectionTitle from "./../components/atoms/SectionTitle"

const RelatedByTitle2 = ({ posts, customClasses }) => {
  const classes = customClasses
    ? customClasses
    : `section__related-content neutral-hex-bg`
  const relatedContent = posts.splice(0, 3).map((post, index) => {
    const { Title, Old_Style, Client_Name, Path } = post

    const image =
      Old_Style !== null ? Old_Style.Preview_Image.childImageSharp.fixed : null
    return (
      <CaseStudyTeaser
        title={Title}
        image={image}
        client_name={Client_Name}
        link={Path}
        key={index}
      />
    )
  })

  if (relatedContent.length > 0) {
    return (
      <div className={`section ${classes}`}>
        <section className="usa-grid">
          <SectionTitle title="Related case studies" />
          <div className="related-content__list">{relatedContent}</div>
        </section>
      </div>
    )
  } else {
    return null
  }
}
export default RelatedByTitle2

RelatedByTitle2.Proptypes = {
  posts: PropTypes.object,
  titles: PropTypes.array,
}
