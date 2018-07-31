import React from "react";

const SlideImage = ({image, caption, alt}) => (

    <div className = "slide__item">
      <img src= { image } alt = { alt } />
      <div className = "slide__caption"> { caption }</div>
    </div>

);

export default SlideImage;