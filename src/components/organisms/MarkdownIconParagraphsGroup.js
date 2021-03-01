import React from "react"
import PropTypes from "prop-types"

import MarkdownIconParagraph from "./../atoms/MarkdownIconParagraph"

const MarkdownIconParagraphsGroup = ({ outcomes }) => {
  const outcomesList = outcomes.map((outcome, index) => {
    const image = outcome.Icon
      ? "https://strapi.prod.civicactions.dev" + outcome.Icon[0].url
      : ``
    const { Title, Caption } = outcome

    return (
      <MarkdownIconParagraph
        key={index}
        icon={image}
        icon_heading={Title}
        icon_text={Caption}
      />
    )
  })

  return <div className="iconparagraphs__group">{outcomesList}</div>
}

export default MarkdownIconParagraphsGroup

MarkdownIconParagraph.propTypes = {
  icons: PropTypes.object,
}
