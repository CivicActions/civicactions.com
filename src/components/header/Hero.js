import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import ditapFile from "./../../content/docs/CivicActions-DITAP.pdf"
import Link from "./../scripts/Link"

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
  social,
  audioFile,
  pronunciation,
}) => {
  const team_image = image ? (
    <div className="hero__image">
      <Img fluid={image.childImageSharp.fluid} alt={`Image of ${title}`} />
    </div>
  ) : (
    ``
  )

  // Load the CTA link from an imported file when we need to load
  // a URL from the file system and we don't know the public URL that
  // gatsby-remark-copy-linked-files would have used.
  // Otherwise use the ctaLink argument.
  function getCtaLink(ctaLink) {
    if (ctaLink === `INTERNAL_DITAP_FILE`) {
      return ditapFile
    }
    return ctaLink
  }

  function getPronoun(personal_pronouns, pronunciation, audioFile) {
    if (personal_pronouns && pronunciation && audioFile) {
      const mp3 = audioFile ? (
        <div class="audio-wrapper">
          <audio
            src={audioFile["publicURL"]}
            class="audio-file-link"
            id="audio-player"
          />
          <div class="button-wrapper">
            <svg
              id="play-button"
              width="18px"
              height="16px"
              viewBox="0 0 18 16"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="icons/misc/audio"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <path
                  d="M12.436942,15.0770089 C12.5288318,15.0770089 12.6207217,15.0593378 12.7126116,15.0239955 C14.2040551,14.3807664 15.3986235,13.3788132 16.296317,12.0181362 C17.1940104,10.6574591 17.6428571,9.16424851 17.6428571,7.53850446 C17.6428571,5.91276042 17.1940104,4.42131696 16.296317,3.06417411 C15.3986235,1.6999628 14.2040551,0.69624256 12.7126116,0.0530133929 C12.6207217,0.017671131 12.5288318,-3.97903932e-13 12.436942,-3.97903932e-13 C12.2531622,-3.97903932e-13 12.094122,0.0671502976 11.9598214,0.201450893 C11.8255208,0.335751488 11.7583705,0.494791667 11.7583705,0.678571429 C11.7583705,0.933035714 11.8962054,1.14155506 12.171875,1.30412946 C12.2213542,1.33240327 12.3008743,1.36951265 12.4104353,1.41545759 C12.5199963,1.46140253 12.5995164,1.4985119 12.6489955,1.52678571 C12.9741443,1.70349702 13.2639509,1.88374256 13.5184152,2.06752232 C14.3878348,2.71075149 15.0664062,3.51302083 15.5541295,4.47433036 C16.0418527,5.43563988 16.2857143,6.45703125 16.2857143,7.53850446 C16.2857143,8.61997768 16.0418527,9.64136905 15.5541295,10.6026786 C15.0664062,11.5639881 14.3878348,12.3662574 13.5184152,13.0094866 C13.2639509,13.1932664 12.9741443,13.3735119 12.6489955,13.5502232 C12.5995164,13.578497 12.5199963,13.6156064 12.4104353,13.6615513 C12.3008743,13.7074963 12.2213542,13.7446057 12.171875,13.7728795 C11.8962054,13.9354539 11.7583705,14.1439732 11.7583705,14.3984375 C11.7583705,14.5822173 11.8255208,14.7412574 11.9598214,14.875558 C12.094122,15.0098586 12.2531622,15.0770089 12.436942,15.0770089 Z M7.46428571,13.984933 C7.64806548,13.984933 7.80710565,13.9177827 7.94140625,13.7834821 C8.07570685,13.6491815 8.14285714,13.4901414 8.14285714,13.3063616 L8.14285714,13.3063616 L8.14285714,1.77064732 C8.14285714,1.58686756 8.07570685,1.42782738 7.94140625,1.29352679 C7.80710565,1.15922619 7.64806548,1.09207589 7.46428571,1.09207589 C7.28050595,1.09207589 7.12146577,1.15922619 6.98716518,1.29352679 L6.98716518,1.29352679 L3.45647321,4.82421875 L0.678571429,4.82421875 C0.494791667,4.82421875 0.335751488,4.89136905 0.201450893,5.02566964 C0.0671502976,5.15997024 -1.13686838e-13,5.31901042 -1.13686838e-13,5.50279018 L-1.13686838e-13,5.50279018 L-1.13686838e-13,9.57421875 C-1.13686838e-13,9.75799851 0.0671502976,9.91703869 0.201450893,10.0513393 C0.335751488,10.1856399 0.494791667,10.2527902 0.678571429,10.2527902 L0.678571429,10.2527902 L3.45647321,10.2527902 L6.98716518,13.7834821 C7.12146577,13.9177827 7.28050595,13.984933 7.46428571,13.984933 Z M11.3766741,12.5853795 C11.4614955,12.5853795 11.5498512,12.5677083 11.6417411,12.5323661 C12.6313244,12.1153274 13.4265253,11.4491257 14.0273437,10.5337612 C14.6281622,9.61839658 14.9285714,8.61997768 14.9285714,7.53850446 C14.9285714,6.45703125 14.6281622,5.46037946 14.0273437,4.54854911 C13.4265253,3.6296503 12.6313244,2.96168155 11.6417411,2.54464286 C11.5498512,2.5093006 11.4579613,2.49162946 11.3660714,2.49162946 C11.1822917,2.49162946 11.0232515,2.55877976 10.8889509,2.69308036 C10.7546503,2.82738095 10.6875,2.98642113 10.6875,3.17020089 C10.6875,3.44587054 10.8253348,3.65438988 11.1010045,3.79575893 C11.4968378,4.00074405 11.765439,4.15625 11.906808,4.26227679 C12.4298735,4.64397321 12.8380766,5.12286086 13.1314174,5.69893973 C13.4247582,6.2750186 13.5714286,6.88820685 13.5714286,7.53850446 C13.5714286,8.18880208 13.4247582,8.80199033 13.1314174,9.3780692 C12.8380766,9.95414807 12.4298735,10.4330357 11.906808,10.8147321 C11.765439,10.9207589 11.4968378,11.0762649 11.1010045,11.28125 C10.8253348,11.422619 10.6875,11.6311384 10.6875,11.906808 C10.6875,12.0905878 10.7546503,12.249628 10.8889509,12.3839286 C11.0232515,12.5182292 11.1858259,12.5853795 11.3766741,12.5853795 Z M10.3058036,10.0831473 C10.4118304,10.0831473 10.500186,10.0654762 10.5708705,10.0301339 C11.0656622,9.83221726 11.4632626,9.50176711 11.7636719,9.03878348 C12.0640811,8.57579985 12.2142857,8.07570685 12.2142857,7.53850446 C12.2142857,7.00130208 12.062314,6.49944196 11.7583705,6.03292411 C11.4614955,5.56640625 11.0656622,5.23772321 10.5708705,5.046875 C10.500186,5.01153274 10.4118304,4.99386161 10.3058036,4.99386161 C10.1220238,4.99386161 9.96298363,5.05924479 9.82868304,5.19001116 C9.69438244,5.32077753 9.62723214,5.48158482 9.62723214,5.67243304 C9.62723214,5.82087054 9.66964286,5.94633557 9.75446429,6.04882812 C9.83928571,6.15132068 9.94177827,6.23967634 10.061942,6.31389509 C10.1821057,6.38811384 10.3022693,6.46940104 10.422433,6.5577567 C10.5425967,6.64611235 10.6450893,6.77157738 10.7299107,6.93415179 C10.8147321,7.09672619 10.8571429,7.29817708 10.8571429,7.53850446 C10.8571429,7.77883185 10.8147321,7.98028274 10.7299107,8.14285714 C10.6450893,8.30543155 10.5425967,8.43089658 10.422433,8.51925223 C10.3022693,8.60760789 10.1821057,8.68889509 10.061942,8.76311384 C9.94177827,8.83733259 9.83928571,8.92568824 9.75446429,9.0281808 C9.66964286,9.13067336 9.62723214,9.25613839 9.62723214,9.40457589 C9.62723214,9.59542411 9.69438244,9.7562314 9.82868304,9.88699777 C9.96298363,10.0177641 10.1220238,10.0831473 10.3058036,10.0831473 Z"
                  id=""
                  fill="#ffffff"
                  fill-rule="nonzero"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      ) : null

      return (
        <div className="hero__personal_pronouns">
          <span class="text">
            {personal_pronouns}, [{pronunciation}]
          </span>{" "}
          {mp3}
        </div>
      )
    } else if (personal_pronouns && pronunciation) {
      return (
        <div className="hero__personal_pronouns">
          {personal_pronouns}, [{pronunciation}]
        </div>
      )
    } else if (personal_pronouns) {
      return <div className="hero__personal_pronouns">{personal_pronouns} </div>
    } else if (pronunciation) {
      return <div className="hero__personal_pronouns">[{pronunciation}]</div>
    }
  }

  // Hero links get button styling with the "btn" class.
  // The link button gets displayed only if the cta link is set.
  const linkButton = cta_link ? (
    <Link
      to={getCtaLink(cta_link)}
      children={cta_text}
      className="link-button usa-button-navy"
    />
  ) : null

  const memberLocation = location ? (
    <div className="hero__location">{location} </div>
  ) : (
    ``
  )

  const memberPersonalPronouns = getPronoun(
    personal_pronouns,
    pronunciation,
    audioFile
  )

  let socialLinks
  let memberSocial

  if (social) {
    socialLinks = social.map((link, index) => (
      <a className="hero__social--link" key={index} href={link.url}>
        {` `}
        {link.name}
        {` `}
      </a>
    ))
    memberSocial = <div className="hero__social">{socialLinks} </div>
  }

  return (
    <section className={`hero usa-grid ` + hero_class}>
      {team_image}
      <div className="hero__text">
        <div className="hero__client-name">{client_name}</div>
        <h1
          className={
            `hero__title` +
            (memberPersonalPronouns ? ` no-space-underneath` : ``)
          }
        >
          {title}
        </h1>
        {memberPersonalPronouns}
        <div className="hero__intro-text">{subtitle}</div>
        {memberLocation}
        {memberSocial}
        {linkButton}
      </div>
    </section>
  )
}

export default Hero

Hero.propTypes = {
  title: PropTypes.string, // The Hero title
  subtitle: PropTypes.string, // The Hero subtitle
  cta_text: PropTypes.string, // Text that the button should display
  cta_link: PropTypes.string, // Link for the button text
}
