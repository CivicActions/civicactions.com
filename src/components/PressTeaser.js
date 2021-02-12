import React from "react"
import PropTypes from "prop-types"
import Markdown from "react-markdown";

const PressTeaser = ({
  publication,
  date,
  title,
  body,
  link_text,
  link,
}) => (
  <li className="press__item">
    <div className="press">
      <div className="press__meta">
        <span className="press__publication">{publication}</span>
        <span className="press__date">{date}</span>
      </div>
      <h3 className="press__title">{title}</h3>
      <div className="press__text">
        <Markdown source={body} escapeHtml={false}/>
      </div>
      <div className="press__link">
        <span>Full Story: </span>
        <a href={link}>{link_text}</a>
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
