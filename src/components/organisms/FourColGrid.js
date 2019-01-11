import React from "react";
import PropTypes from 'prop-types';

const FourColGrid = ({ items }) => {
  const gridItems = items.map((item, index) => {
    const{ title, image } = item;
    let imageUrl = image ? image.childImageSharp.resize.src : '';

    return(
      <div className = "four-col--item">
        <img src = { imageUrl } alt = { title } />
      </div>
    )
  });

  return (
    <div className = "four-col--grid">
      { gridItems }
    </div>
  );
};

export default FourColGrid;

FourColGrid.propTypes = {
  items: PropTypes.object
}
