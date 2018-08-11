import React, { Component } from "react"
import Slider from "react-slick"

import Blockquote from "./../atoms/Blockquote";
import SectionTitle from "./../atoms/SectionTitle";

class GlobalQuoteSlider extends Component {
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

    const{ quotes} = this.props;

    let quoteItems = quotes.map((item, index) => {
      let { author, text, image } = item;
      let quoteImage = image.childImageSharp.resize.src;

      return(
        <Blockquote
          quote = { text }
          quote_source = { author }
          quote_image = { quoteImage }
        />
      )
    });

    return(
      <Slider {...settings}>
        { quoteItems }
      </Slider>
    );
  }
}

export default GlobalQuoteSlider;