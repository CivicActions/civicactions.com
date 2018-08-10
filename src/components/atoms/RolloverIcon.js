import React from "react";
import PropTypes from "prop-types";

const RolloverIcon = ({
    icon,
    icon_rollover_text,
    icon_class
    }) => {

    let iconClass =  `rollovericon__wrapper ${ icon_class }`;
    let image;

    if(icon) {
        image = <div className = "rollovericon__icon"><img src = { icon } alt = { icon_rollover_text } /></div>
    }

    return (
        <div className = { iconClass }>
            { image }
            <p className = "rollovericon__rollover_text"> { icon_rollover_text } </p>
        </div>
    )

};

export default RolloverIcon;

RolloverIcon.propTypes = {
    icon_class: PropTypes.string,
    icon_rollover_text: PropTypes.string,
};