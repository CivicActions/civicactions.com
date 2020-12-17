import React from "react"
import PropTypes from "prop-types"

import MarkdownIconParagraph from "./../atoms/MarkdownIconParagraph"

const MarkdownIconParagraphsGroup = ({ icons }) => {
  const iconList = icons.map((service, index) => {
    const image = service.icon ? service.icon.publicURL : ``
    const { title, caption } = service

    return (
      <MarkdownIconParagraph
        key={index}
        icon={image}
        icon_heading={title}
        icon_text={caption}
      />
    )
  })

  return <div className="iconparagraphs__group">{iconList}</div>
}

export default MarkdownIconParagraphsGroup

MarkdownIconParagraph.propTypes = {
  icons: PropTypes.object,
}
