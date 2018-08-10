import React  from "react";
import Img from "gatsby-image";

const TeaserGrid = ({image, name, title}) => {

    let i = image ? image.childImageSharp.resize: null;
    let previewImage = i ? <div className = "teaser-grid--__image"><Img sizes = { i } /></div> : "NO_IMAGE";

    return (<div>
            <p>{previewImage}</p>
            <p>{name}</p>
            <p>{title}</p>
            </div>
           );
}

export default TeaserGrid;
