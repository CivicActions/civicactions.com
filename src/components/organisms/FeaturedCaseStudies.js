import React from 'react'

import CaseStudyTeaser from './../../components/CaseStudyTeaser'

const FeaturedCaseStudies = ({ posts }) => {
  let caseStudies = posts.map((post, index) => {
    const { node } = post
    const { frontmatter } = node
    const { title, client_name, preview_image, path } = frontmatter

    let image = preview_image.childImageSharp.fixed

    return (
      <CaseStudyTeaser
        title={title}
        image={image}
        client_name={client_name}
        link={path}
        key={index}
      />
    )
  })

  return <div className="related-content__list">{caseStudies}</div>
}

export default FeaturedCaseStudies
