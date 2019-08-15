import React from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const TeaserGrid = ({ image, link, name, published, title }) => {
  const previewImage = image ? (
    <div className="teaser-grid__image">
      <Img sizes={image.childImageSharp.fixed} />
    </div>
  ) : null

  return (
    <div className="teaser-grid--wrapper">
      <div className="teaser-grid">
        {// Just show a link if the element fulfills the right criteria.
        published && link !== '/' ? (
          <Link to={link} title={`Link to ${name}'s profile page`}>
            {previewImage}
          </Link>
        ) : (
          previewImage
        )}
        <div className="teaser-grid__text">
          <div className="teaser-grid__name teaser__link">
            {// Just show a link if the element fulfills the right criteria.
            published && link !== '/' ? (
              <Link to={link} title={`Link to ${name}'s profile page`}>
                {name}
              </Link>
            ) : (
              name
            )}
          </div>
          <div className="teaser-grid__title">{title}</div>
        </div>
      </div>
    </div>
  )
}

export default TeaserGrid

TeaserGrid.propTypes = {
  image: PropTypes.object,
  link: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  published: PropTypes.number,
}
