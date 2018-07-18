import React from "react";

const Teaser = ({teaserDate, teaserTitle, teaserLink}) => {

  return (
    <div className = "teaser">
      <div className = "teaser__date"> { teaserDate } </div>
      <h3 className =  "teaser__title"> { teaserTitle } </h3>
      <div className = "teaser__link"> <a href = { teaserLink }>Read More</a> </div>
    </div>
  );
};

export default Teaser;