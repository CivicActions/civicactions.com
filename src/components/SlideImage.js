import React from "react";
import Img from "gatsby-image";

const SlideImage = ({image, caption, alt}) => (

  <div className = "slide__item">
    <Img sizes = { image } alt = { alt } />
    <div className = "slide__caption"> { caption }</div>
  </div>

);

export default SlideImage;