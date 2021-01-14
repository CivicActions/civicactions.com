import React from "react"
import PropTypes from "prop-types"

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
      <div
        className="iconparagraph__text"
        dangerouslySetInnerHTML={{ __html: icon_text }}
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
