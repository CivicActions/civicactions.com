import React, { Component } from "react"
import Slider from "react-slick"

import Blockquote from "./../atoms/Blockquote";
import SectionTitle from "./../atoms/SectionTitle";

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


    const blockQuotes = this.props.quotes.map((item, index) => {
      const quoteImage = item.image ?  item.image.childImageSharp.fixed.src: null;
      return (
        <Blockquote
          key = {index}
          quote = {item.text}
          quote_source = {item.author}
          quote_image = {quoteImage}
        />
      )
    });

    return (
      <section className = "section section__triple-quotes neutral-hex-bg team">
        <div className = "usa-grid">
          <SectionTitle title = "Our Perspectives" />
          <div
            className = "blockquotes__list">
            <Slider {...settings}>
              {blockQuotes}
            </Slider>
          </div>
        </div>
      </section>
    )
  }

}

export default OurPerspectives;
