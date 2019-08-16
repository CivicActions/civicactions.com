import React, { Component } from "react"
import Slider from "react-slick"

import Blockquote from "./../atoms/Blockquote"

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
          },
        },
      ],
    }

    const { quotes } = this.props

    const quoteItems = quotes.map((item, index) => {
      const { author, text, image } = item
      const quoteImage = image ? image.childImageSharp.fixed.src : null

      return (
        <Blockquote
          quote={text}
          quote_source={author}
          quote_image={quoteImage}
        />
      )
    })

    return <Slider {...settings}>{quoteItems}</Slider>
  }
}

export default GlobalQuoteSlider
