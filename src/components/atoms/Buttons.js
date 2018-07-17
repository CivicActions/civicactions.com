import React from 'react';
import PropTypes from 'prop-types';

const Button = ({type, button_text, link}) => {
  const buttonClass =
    (type === 'secondary') ? 'usa-button-secondary':
    (type === 'dark') ? 'usa-button-secondary-inverse':
    (type === 'hero') ? 'usa-button-navy':
      'usa-button';

  return (
    <button className = { buttonClass }>
      <a alt = { button_text } href = { link }>{ button_text } </a>
    </button>
  );

};

export default Button;

Button.propTypes = {
  type: PropTypes.string, // can be 'primary', 'secondary' or 'dark'
  button_text: PropTypes.string, // Text that the button should display
  link: PropTypes.string // Link for the button text
};