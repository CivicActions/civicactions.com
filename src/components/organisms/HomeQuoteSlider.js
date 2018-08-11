import React, { Component } from "react"
import Slider from "react-slick"

import Blockquote from "./../atoms/Blockquote";
import SectionTitle from "./../atoms/SectionTitle";
import Button from "../atoms/Buttons"

import image1 from "./../../content/team-members/Karen-Johnson.jpg";
import image2 from "./../../content/team-members/Steve-Wirt.jpg";
import image3 from "./../../content/team-members/Steve-Curtis.jpg";

class HomeQuoteSlider extends Component {

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
      <section className = "section section__triple-quotes">
        <div className = "usa-grid">
          <SectionTitle title = "Get to know us" />
          <div
            className = "blockquotes__list">
            <Slider {...settings}>
              <Blockquote
                quote = "The emphasis on balance and constant learning make CivicActions an incredibly fun and engaging community."
                quote_source = "Karen Johnson, Systems Administrator"
                quote_image = { image1 }
              />
              <Blockquote
                quote = "We build trust by giving clients insight into the people we are, so they relate to us as humans rather than just contractors."
                quote_source = "Steve Wirt,  Engineer"
                quote_image = { image2 }
              />
              <Blockquote
                quote = "We are each in charge of how we approach our own work, yet we’re accountable to each other. So we have to remain clear, focused, and transparent."
                quote_source = "Steve Curtis, Project Manager"
                quote_image = { image3 }
              />
            </Slider>
          </div>
          <div class = "align-right">
            <Button
              button_text = "Meet Our Team"
              link = "/team"
            />
          </div>
        </div>
      </section>
    )
  }

}

export default HomeQuoteSlider;