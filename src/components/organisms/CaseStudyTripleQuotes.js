import React, { Component } from "react"
import Slider from "react-slick"

import Blockquote from "./../atoms/Blockquote";
import SectionTitle from "./../atoms/SectionTitle";

import image1 from "./../../files/client-logos/MTA.png";
import image2 from "./../../files/client-logos/deptdefense.png";
import image3 from "./../../files/client-logos/denverlibrary.png";

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
      <section
        className = "section section__triple-quotes usa-grid">
        <SectionTitle title = "From Our Clients" />
        <div
          className = "blockquotes__list">
          <Slider {...settings}>
            <Blockquote
              quote = "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum."
              quote_source = "Client1"
              quote_image = { image1 }
            />
            <Blockquote
              quote = "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
              quote_source = "Client 2"
              quote_image = { image2 }
            />
            <Blockquote
              quote = "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.."
              quote_source = "Client 3"
              quote_image = { image3 }
            />
          </Slider>
        </div>
      </section>
    )
  }

}

export default CaseStudyTripleQuotes;