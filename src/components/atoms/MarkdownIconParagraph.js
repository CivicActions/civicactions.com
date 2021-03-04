import React from "react"
import PropTypes from "prop-types"
import Markdown from "react-markdown"
const MarkdownIconParagraph = ({
  icon,
  icon_class,
  icon_heading,
  icon_text,
}) => {
  const iconClass = `iconparagraph__wrapper ${icon_class}`
  let image

  if (icon) {
    image = (
      <div className="iconparagraph__icon">
        <img src={icon} alt={icon_heading} />
      </div>
    )
  }

  return (
    <div className={iconClass}>
      {image}
      <p className="iconparagraph__heading"> {icon_heading} </p>
      <Markdown
        className="iconparagraph__text"
        source={icon_text}
        escapeHtml={false}
      />
    </div>
  )
}

export default MarkdownIconParagraph

MarkdownIconParagraph.propTypes = {
  icon_class: PropTypes.string,
  icon_heading: PropTypes.string,
  icon_text: PropTypes.string,
}
