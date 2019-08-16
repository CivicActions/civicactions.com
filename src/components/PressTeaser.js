import React from "react"
import PropTypes from "prop-types"

const PressTeaser = ({
  publication,
  date,
  title,
  text,
  link_text,
  website,
}) => (
  <li className="press__item">
    <div className="press">
      <div className="press__meta">
        <span className="press__publication">{publication}</span>
        <span className="press__date">{date}</span>
      </div>
      <h3 className="press__title">{title}</h3>
      <div className="press__text" dangerouslySetInnerHTML={{ __html: text }} />
      <div className="press__link">
        <span>Full Story: </span>
        <a href={website}>{link_text}</a>
      </div>
    </div>
  </li>
)

export default PressTeaser

PressTeaser.propTypes = {
  publication: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  website: PropTypes.string,
}
