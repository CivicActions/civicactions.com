import React from "react";
import Link from "./../components/scripts/Link";

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
  let teaser_text;

  if(teaserClass) {
    teaser_class = `teaser ${teaserClass}`;
  }

  if(teaserImage) {
    image_wrapper = <div className = "teaser__image--wrapper">
      <img src = {teaserImage} alt = { teaserTitle } />
    </div>
  }

  if(teaserText) {
    teaser_text = <p className = "teaser__text"> { teaserText } </p>
  }

  return (
    <div className = { teaser_class }>
      { image_wrapper }
      <div className = "teaser__date"> { teaserDate } </div>
      <h3 className =  "teaser__title"> { teaserTitle } </h3>
      { teaser_text}
      <div className = "teaser__link">
        <Link
            to = { teaserLink }
            children = 'Read More'
        />
      </div>
    </div>
  );
};

export default Teaser;