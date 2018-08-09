import React from "react";
import Img from "gatsby-image";
import StackGrid from "react-stack-grid";
import sizeMe from 'react-sizeme';

import image1 from './../../files/image-band/IMG_20170919_085448.jpg';
import image2 from './../../files/image-band/IMG_20170918_123826.jpg';
import image3 from './../../files/image-band/IMG_20170920_191202.jpg';
import image4 from './../../files/image-band/sacramento.jpg';
import image5 from './../../files/image-band/rachel-presentation.jpg';
import image6 from './../../files/image-band/20170919_174032_HDR.jpg';
import image7 from './../../files/image-band/IMG_20170918_182447.jpg';
import image8 from './../../files/image-band/IMG_20180713_130136.jpg';
import image9 from './../../files/image-band/IMG_0577.jpg';
import image10 from './../../files/image-band/IMG_20170918_122218.jpg';


// @todo this solution might be unneccessarily complex. consider refactoring to use CSS column-count instead.

const ImageBand = ({size}) => {
  // The { size } props is passed from the react-sizeme plugin. It measures the width of the
  // image band and fires on resize so the image band can adjust to match the browser width.

  const imageArray = [ image1, image2, image3, image4, image5, image6, image7, image8, image9, image10 ];
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