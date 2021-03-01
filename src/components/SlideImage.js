import React from "react"
import Img from "gatsby-image"

const SlideImage = ({ url, caption, alt }) => (
  <div className="slide__item">
    <img src={url} alt={alt} />
    <div className="slide__caption"> {caption}</div>
  </div>
)

export default SlideImage
