import React, { Component } from "react"
import Slider from "react-slick"

import Blockquote from "./../atoms/Blockquote";
import SectionTitle from "./../atoms/SectionTitle";

import image1 from "./../../content/team-members/images/iris-ibekwe.jpg";
import image2 from "./../../content/team-members/images/jeff-maher.jpg";
import image3 from "./../../content/team-members/images/kim-davidson.jpg";

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

    let first_image = image1 ? image1 : null;
    let second_image = image2 ? image2 : null;
    let third_image = image3 ? image3 : null;

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
              quote_image = { first_image }
            />
            <Blockquote
              quote = "I enjoy digging into the challenges of improving communication and process within organizations doing good."
              quote_source = "Jeff Maher, Engineer"
              quote_image = { second_image }
            />
            <Blockquote
              quote = "We constantly figure out how to do what needs to be done, so we automatically grow. Then we share our learnings with others."
              quote_source = "Kim Davidson"
              quote_image = { third_image }
            />
          </Slider>
        </div>
      </section>
    )
  }

}

export default OurPerspectives;
