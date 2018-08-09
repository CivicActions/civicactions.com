import React, { Component } from "react"
import Slider from "react-slick"

import Blockquote from "./../atoms/Blockquote";
import SectionTitle from "./../atoms/SectionTitle";

import image1 from "./../../content/team-members/placeholder.jpg";
import image2 from "./../../content/team-members/placeholder.jpg";
import image3 from "./../../content/team-members/placeholder.jpg";

class OurPerspectives extends Component {

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
      <section
        className = "section section__triple-quotes usa-grid">
        <SectionTitle title = "Our Perspectives" />
        <div
          className = "blockquotes__list">
          <Slider {...settings}>
            <Blockquote
              quote = "I love the openness,.. "
              quote_source = "Iris Ibekwe, Engineer"
              quote_image = { image1 }
            />
            <Blockquote
              quote = "I love digging into..."
              quote_source = "Jeff Maher, Engineer"
              quote_image = { image2 }
            />
            <Blockquote
              quote = "We constantly figure out how..."
              quote_source = "Kim Davidson"
              quote_image = { image3 }
            />
          </Slider>
        </div>
      </section>
    )
  }

}

export default OurPerspectives;
