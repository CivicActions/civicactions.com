import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby";

const Button = ({type, button_text, link}) => {
  const buttonClass =
    (type === 'secondary') ? 'usa-button-secondary':
    (type === 'dark') ? 'usa-button-secondary-inverse':
    (type === 'hero') ? 'usa-button-navy':
      'usa-button';

  return (
    <button className = { buttonClass }>
      <Link alt = { button_text } to = { link }>{ button_text } </Link>
    </button>
  );

};

export default Button;

Button.propTypes = {
  type: PropTypes.string, // can be 'hero', 'secondary' or 'dark'
  button_text: PropTypes.string, // Text that the button should display
  link: PropTypes.string // Link for the button text
};