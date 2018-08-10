import React from "react";
import PropTypes from "prop-types";

const RolloverIcon = ({
    icon,
    icon_rollover_text,
    icon_class,
    icon_url
    }) => {

    let iconClass =  `rollovericon__wrapper ${ icon_class }`;
    let image;

    if(icon) {
        image = <div className = "rollovericon__icon"><img src = { icon } alt = { icon_rollover_text } /></div>
    }

    let iconWrapper = icon_url ?
      <a href = { icon_url }>
        <div className = { iconClass }>
          { image }
          <p className = "rollovericon__rollover_text"> { icon_rollover_text } </p>
        </div>
      </a>
      :
      <div className = { iconClass }>
          { image }
          <p className = "rollovericon__rollover_text"> { icon_rollover_text } </p>
      </div>;

    return iconWrapper

};

export default RolloverIcon;

RolloverIcon.propTypes = {
    icon_class: PropTypes.string,
    icon_rollover_text: PropTypes.string,
};