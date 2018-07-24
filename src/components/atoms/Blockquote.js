import React from 'react'
import PropTypes from 'prop-types';

const Blockquote = ({
  quote,
  quote_source,
  quote_class,
  quote_image
  }) => {

  let quoteClass = `blockquote__wrapper ${ quote_class }`;
  let image;

  if(quote_image) {
    image = <div class = "blockquote__image"><img src = { quote_image } alt = { quote_source } /></div>
  }

  return (
    <div className = { quoteClass }>
      { image }
      <blockquote class = "blockquote__text">
        <p>{ quote }</p>
        <cite> { quote_source } </cite>
      </blockquote>
    </div>
  )
}

export default Blockquote;

Blockquote.propTypes = {
  quote: PropTypes.string, //
  quote_class: PropTypes.string, // The blockquote class
  quote_image: PropTypes.string,
  quote_source: PropTypes.string
};