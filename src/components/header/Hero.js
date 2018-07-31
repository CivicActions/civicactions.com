import React from 'react'
import PropTypes from 'prop-types';

import Button from "../atoms/Buttons"

const Hero = ({client_name, title, subtitle, cta_text, cta_link}) => {

  // The button gets displayed only if the Button text is set.
  const button = cta_text ? <Button type = 'hero' button_text = { cta_text } link = { cta_link } /> : '';

  return(
    <section className = "hero usa-grid">
      <div className = "hero__text">
        <div className = "hero__client-name">{ client_name }</div>
        <h1 className = "hero__title">{ title }</h1>
        <div className = "hero__intro-text">{ subtitle }</div>
        {button}
      </div>
    </section>
  );
}

export default Hero;

Hero.propTypes = {
  title: PropTypes.string, // The Hero title
  subtitle: PropTypes.string, // The Hero subtitle
  cta_text: PropTypes.string, // Text that the button should display
  cta_link: PropTypes.string // Link for the button text
};