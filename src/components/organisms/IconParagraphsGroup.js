import React from 'react'
import PropTypes from 'prop-types';

import IconParagraph from './../atoms/IconParagraph'

const IconParagraphsGroup = ({ icons }) => {
  let iconList = icons.map((service, index) => {
    let image = service.icon ? service.icon.publicURL : '';
    const { title, caption } = service;

    return (
      <IconParagraph
        key = { index }
        icon = { image }
        icon_heading = { title }
        icon_text = { caption }
      />
    )
  });

  return <div className = "iconparagraphs__group">{ iconList }</div>

};

export default IconParagraphsGroup;

IconParagraph.propTypes = {
  icons: PropTypes.object
};
