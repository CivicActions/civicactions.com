import React from "react"

import RolloverIcon from "./../atoms/RolloverIcon"

const RolloverIconGroup = ({ technologies }) => {
  const iconList = technologies.map((item, index) => {
    const { title, url } = item
    const image = item.icon ? item.icon.publicURL : ``

    return (
      <RolloverIcon icon={image} icon_rollover_text={title} icon_url={url} />
    )
  })

  return <div className="rollovericon__group">{iconList}</div>
}

export default RolloverIconGroup
