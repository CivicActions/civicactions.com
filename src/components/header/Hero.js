import React from 'react'
import PropTypes from 'prop-types';
import Img from "gatsby-image";

import ditapFile from "./../../content/docs/CivicActions-DITAP.pdf"
import Link from "./../scripts/Link";

const Hero = ({
  client_name,
  title,
  subtitle,
  cta_text,
  cta_link,
  cta_is_external,
  hero_class,
  image,
  location,
  personal_pronouns,
  social
  }) => {

    const team_image = image ? <div className = "hero__image"><Img fluid = {image.childImageSharp.fluid} alt={`Image of ${title}`} /></div>: '';

    // Load the CTA link from an imported file when we need to load
    // a URL from the file system and we don't know the public URL that
    // gatsby-remark-copy-linked-files would have used.
    // Otherwise use the ctaLink argument.
    function getCtaLink(ctaLink) {
        if  (ctaLink === "INTERNAL_DITAP_FILE") {
          return ditapFile;
        }
      return ctaLink;
    }

    // Hero links get button styling with the "btn" class.
    // The link button gets displayed only if the cta link is set.
    const linkButton = cta_link ?
          <Link
            to = { getCtaLink(cta_link) }
            children = { cta_text }
            className = 'link-button usa-button-navy'
          /> : null;

  const memberLocation = location ? <div className = "hero__location">{ location } </div> : '';
  const memberPersonalPronouns = personal_pronouns ?
        <div className = "hero__personal_pronouns">{ personal_pronouns } </div> : null;
  let socialLinks;
  let memberSocial;

  if(social) {
    socialLinks = social.map((link, index) => {
      return <a className = "hero__social--link" key={index} href = { link.url }> { link.name } </a>
    });
    memberSocial = <div className = "hero__social">{ socialLinks } </div>;
  }


  return(
    <section className = {"hero usa-grid " + hero_class}>
      { team_image }
      <div className = "hero__text">
        <div className = "hero__client-name">{ client_name }</div>
        <h1 className = {"hero__title" + (memberPersonalPronouns ? " no-space-underneath" : "") }>{ title }</h1>
        { memberPersonalPronouns }
        <div className = "hero__intro-text">{ subtitle }</div>
        { memberLocation }
        { memberSocial }
        {linkButton}
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
