import React from "react";

const Teaser = ({
  teaserDate,
  teaserImage,
  teaserTitle,
  teaserText,
  teaserLink,
  teaserClass,
  teaserType
  }) => {

  let teaser_class = 'teaser';
  let image_wrapper = '';

  if(teaserClass) {
    teaser_class = `teaser ${teaserClass}`;
  }

  if(teaserImage) {
    image_wrapper = <div className = "teaser__image--wrapper">
      <img src = {teaserImage} alt = { teaserTitle } />
    </div>
  }

  return (
    <div className = { teaser_class }>
      { image_wrapper }
      <div className = "teaser__date"> { teaserDate } </div>
      <h3 className =  "teaser__title"> { teaserTitle } </h3>
      <p className = "teaser__text"> { teaserText } </p>
      <div className = "teaser__link"> <a href = { teaserLink }>Read More</a> </div>
    </div>
  );
};

export default Teaser;