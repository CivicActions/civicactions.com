import React, { Component } from "react"
import Slider from "react-slick"

import Blockquote from "./../atoms/Blockquote";
import SectionTitle from "./../atoms/SectionTitle";

import image1 from "./../../files/client-logos/msf.png";
import image2 from "./../../files/client-logos/deptdefense.png";
import image3 from "./../../files/client-logos/SF.png";

class CaseStudyTripleQuotes extends Component {

  render() {

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };

    return (
      <section className = "section section__triple-quotes neutral-hex-bg">
        <div className = "usa-grid">
          <div className = "absolute">
          <SectionTitle title = "From Our Clients" />
          <div className = "blockquotes__list">
            <Slider {...settings}>
              <Blockquote
                quote = "CivicActions did a great job of understanding our priorities. It was truly a pleasure working with this creative, organized, and committed team."
                quote_source = "Kelly Smith-Holbourn, Web Manager, MSF USA"
                quote_image = { image1 }
              />
              <Blockquote
                quote = "CivicActions’ experience with government clients and agile processes helped us reach our user base with a product that met their needs."
                quote_source = "Lisa Berry, Senior GlobalNET Liaison Officer, DSCA"
                quote_image = { image2 }
              />
              <Blockquote
                quote = "I’ve gotten very positive and impressed feedback since the site’s launch. The CivicActions team members are superstars!"
                quote_source = "Tiana Wertheim, Senior Analyst, San Francisco HSA"
                quote_image = { image3 }
              />
            </Slider>
          </div>
            </div>
        </div>
      </section>
    )
  }

}

export default CaseStudyTripleQuotes;