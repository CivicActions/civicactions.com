import React from 'react'

import home_image from './../../content/home.jpg';
import Link from "./../scripts/Link";

const HeroHome = ({info}) => {
  const{title, subtitle, cta_text, cta_link} = info;

  let BannerImage = <div className = "hero__image--wrapper"><img src = { home_image } alt = "Digital Services that work for everyone" /></div>;

  return(
    <section className = "hero usa-grid hero--home">
      <div className = "hero__text">
        <h1 className = "hero__title">{ title }</h1>
        <div className = "hero__intro-text">{ subtitle }</div>
        <Link
          to = { cta_link }
          children = { cta_text }
          className = 'link-button usa-button-navy'
        />
      </div>
      { BannerImage}
    </section>
  );
}

export default HeroHome;
