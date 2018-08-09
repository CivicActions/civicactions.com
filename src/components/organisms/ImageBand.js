import React from "react";
import Img from "gatsby-image";
import StackGrid from "react-stack-grid";
import sizeMe from 'react-sizeme';

// @todo this solution might be unneccessarily complex. consider refactoring to use CSS column-count instead.

const ImageBand = ({size, imageArray}) => {
  // The { size } props is passed from the react-sizeme plugin. It measures the width of the
  // image band and fires on resize so the image band can adjust to match the browser width.

  const bandWidth = size.width;

  let imageFeedWidth = "20%";

  switch(true) {
    case(bandWidth <= 480):
      imageFeedWidth = "50%";
      break;
    case(bandWidth <= 640):
      imageFeedWidth = "33%";
      break;
    case(bandWidth <= 960):
      imageFeedWidth = "25%";
      break;
    default:
      imageFeedWidth = "20%";
  }

  let imageList = imageArray.map((image, index) => {
    return <img className = "feed__image" src = {image} key = {index} />
  });

  return (
    <div>
      {/* Image feed plugin options: https://github.com/tsuyoshiwada/react-stack-grid */}
      <StackGrid
        columnWidth = { imageFeedWidth }
        gutterWidth = { 39.2 }
        gutterHeight = { 39.2 }
        monitorImagesLoaded = { true }
      >
        { imageList }
      </StackGrid>
    </div>

  );
}

export default sizeMe()(ImageBand);