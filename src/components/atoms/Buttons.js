import React from 'react';
import PropTypes from 'prop-types';

const Button = ({type, button_text, link}) => {
  const buttonClass =
    (type === 'secondary') ? 'usa-button-secondary':
    (type === 'dark') ? 'usa-button-secondary-inverse':
      'usa-button';

  return (
    <button className = { buttonClass }>
      <a href = { link }>{ button_text } </a>
    </button>
  );

};

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  button_text: PropTypes.string,
  link: PropTypes.string
};