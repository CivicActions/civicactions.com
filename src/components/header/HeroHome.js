import React from 'react'
import Img from "gatsby-image";

import Button from "../atoms/Buttons"

const HeroHome = ({info}) => {
  const{title, subtitle, banner_image, cta_text, cta_link} = info;
  const image = banner_image ? banner_image.childImageSharp.resize: null;

  let BannerImage = image === null ? '' :
    <div className = "hero__image--wrapper">
      <Img sizes = {image} />
    </div>;

  return(
    <section className = "hero usa-grid hero--home">
      <div className = "hero__text">
        <h1 className = "hero__title">{ title }</h1>
        <div className = "hero__intro-text">{ subtitle }</div>
        <Button type = 'hero' button_text = { cta_text } link = { cta_link } />
      </div>
      { BannerImage}
    </section>
  );
}

export default HeroHome;