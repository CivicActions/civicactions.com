import React, { Component } from "react"
import Slider from "react-slick"

import SlideImage from './../SlideImage';

import prevArrow from './../../files/icons/prev-arrow-white.svg';
import nextArrow from './../../files/icons/right-arrow-white.svg';

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const { images } = this.props;
    let settings = '';
    let slideImages;


    if(images !== null) {
      let slideCount = images.length;
       settings = {
        customPaging: (i) => {
          return <div className="slide__custom-dots">{i + 1}/{slideCount}</div>
        },
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        focusOnSelect: true
      };

      slideImages = this.props.images.map((image, index) => {
          if(image.url !== null) {
              return (
                  <SlideImage key={ index } image={ image.url.childImageSharp.fixed } alt={ image.alt } caption={ image.caption }/>
              );
          } else {
              return null;
          }
      });

      let multipleImages =
        <span>
          <Slider ref={c => (this.slider = c)} {...settings}>
            { slideImages }
          </Slider>
          <div className = "slide__arrows">
            <div style = {{backgroundImage: "url(" + prevArrow + ")" }} className="slide__previous" onClick={this.previous}>
              <span className = "visually-hidden">Previous</span>
            </div>
            <div style = {{backgroundImage: "url(" + nextArrow + ")" }} className="slide__next" onClick={this.next}>
              <span className = "visually-hidden">Next</span>
            </div>
          </div>
        </span>;

      let renderedImages =
        slideCount === 1 ? slideImages:
        slideCount > 1   ? multipleImages:
        null;


      return (
        <section className="section section__image-slider usa-grid">
          <div className="slide-images">
            { renderedImages }
          </div>

        </section>
      )
    } else {
      return null;
    }

  }
}

export default ImageSlider
