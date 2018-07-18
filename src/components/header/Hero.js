import React from 'react'
import Img from "gatsby-image";

import Button from "../atoms/Buttons"

const Hero = (info) => {
  const title = info.info.title;
  const subtitle = info.info.subtitle;
  const image = info.info.banner_image.childImageSharp.resize;
  const ctaText = info.info.cta_text;
  const ctaLink = info.info.cta_link;

  return(
    <section className = "hero usa-grid">
      <div className = "hero__text">
        <h1 className = "hero__title">{ title }</h1>
        <div className = "hero__intro-text">{ subtitle }</div>
        <Button type = 'hero' button_text = { ctaText } link = { ctaLink } />
      </div>
      <div className = "hero__image--wrapper">
        <Img sizes = {image} />
      </div>
    </section>
  );
}

export default Hero;