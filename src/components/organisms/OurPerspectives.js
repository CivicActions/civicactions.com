import React, { Component } from "react"
import Slider from "react-slick"

import Blockquote from "./../atoms/Blockquote";
import SectionTitle from "./../atoms/SectionTitle";

import image1 from "./../../content/team-members/images/Iris-Ibekwe.jpg";
import image2 from "./../../content/team-members/images/Jeff-Maher.jpg";
import image3 from "./../../content/team-members/images/Kim-Davidson.jpg";

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
              quote = "I love the honest, collaborative atmosphere and the way CivicActions prioritizes the well-being of team members."
              quote_source = "Iris Ibekwe, Engineer"
              quote_image = { image1 }
            />
            <Blockquote
              quote = "I enjoy digging into the challenges of improving communication and process within organizations doing good."
              quote_source = "Jeff Maher, Engineer"
              quote_image = { image2 }
            />
            <Blockquote
              quote = "We constantly figure out how to do what needs to be done, so we automatically grow. Then we share our learnings with others."
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
