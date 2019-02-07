import React from 'react';
import PropTypes from 'prop-types';
import Link from "./../../components/scripts/Link";


// Warning. links in buttons do not work in firefox.
// Avoid using this component and instead use the Link component
// with a .link-button class.

const Button = ({type, button_text, link, isExternal}) => {
  const buttonClass =
    (type === 'secondary') ? 'usa-button-secondary':
    (type === 'dark') ? 'usa-button-secondary-inverse':
    (type === 'hero') ? 'usa-button-navy':
      'usa-button';

  const buttonURL =  <Link
      to = { link }
      children = { button_text }
  />

  return (
    <button className = { buttonClass }>
      {buttonURL}
    </button>
  );

};

export default Button;

Button.propTypes = {
  type: PropTypes.string, // can be 'hero', 'secondary' or 'dark'
  button_text: PropTypes.string, // Text that the button should display
  link: PropTypes.string, // Link for the button text
  isExternal: PropTypes.bool
};
