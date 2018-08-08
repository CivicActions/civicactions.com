import React from "react";
import Img from "gatsby-image";
import StackGrid from "react-stack-grid";

import image1 from './../../files/image-band/20170921_183040.jpg';
import image2 from './../../files/image-band/IMG_20160928_162857.jpg';
import image3 from './../../files/image-band/IMG_20160928_101410.jpg';
import image4 from './../../files/image-band/IMG_20170731_140737.jpg';
import image5 from './../../files/image-band/IMG_20170731_174740.jpg';
import image6 from './../../files/image-band/IMG_20170915_224222.jpg';

const SingleImage = (url) => (
  <img src = {url} />
);

const ImageBand = () => {
  const imageArray = [ image1, image2, image3, image4, image5, image6 ];

  let imageList = imageArray.map((image, index) => {
    return <img className = "feed__image" src = {image} />
  });

  return (
    <div class = "feed__image--wrapper">
      { imageList }
      </div>

  );
};




export default ImageBand;