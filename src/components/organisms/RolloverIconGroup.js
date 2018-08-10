import React from 'react'
import PropTypes from 'prop-types';

import RolloverIcon from './../atoms/RolloverIcon';

const RolloverIconGroup = ({ technologies }) => {

  let iconList = technologies.map((item, index) => {
    const { title, url } = item;
    let image = item.icon ? item.icon.publicURL : '';

    return (
      <RolloverIcon
        icon = { image }
        icon_rollover_text = { title }
        icon_url = { url }
      />
    )
  });

  return (
    <div className = "rollovericon__group">
      { iconList }
    </div>
  )

};

export default RolloverIconGroup;