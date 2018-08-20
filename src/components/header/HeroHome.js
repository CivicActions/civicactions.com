import React from 'react'

import home_image from './../../content/homepage.jpg';

import Button from "../atoms/Buttons"

const HeroHome = ({info}) => {
  const{title, subtitle, cta_text, cta_link} = info;

  let BannerImage = <div className = "hero__image--wrapper"><img src = { home_image } alt = "Digital Services that work for everyone" /></div>;

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