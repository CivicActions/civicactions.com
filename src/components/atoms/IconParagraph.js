import React from 'react'
import PropTypes from 'prop-types';

const IconParagraph = ({
    icon,
    icon_class,
    icon_heading,
    icon_text,
    icon_text2,
    icon_text3
    }) => {

    let iconClass = `iconparagraph__wrapper ${ icon_class }`;
    let image;


    if(icon) {
        image = <div className = "iconparagraph__icon"><img src = { icon } alt = { icon_heading } /></div>
    }

    return (

        <div className = { iconClass }>
            { image }
            <p className = "iconparagraph__heading"> { icon_heading } </p>
            <p className = "iconparagraph__text"> { icon_text }<br/>{ icon_text2}<br />{ icon_text3} </p>
        </div>
    )

};

export default IconParagraph;

IconParagraph.propTypes = {
    icon_class: PropTypes.string,
    icon_heading: PropTypes.string,
    icon_text: PropTypes.string,
};