import React from 'react';
import PropTypes from 'prop-types';
import Link from "./../../components/scripts/Link";


const Button = ({type, button_text, link, isExternal}) => {
  let buttonURL = null;

  const buttonClass =
    (type === 'secondary') ? 'usa-button-secondary':
    (type === 'dark') ? 'usa-button-secondary-inverse':
    (type === 'hero') ? 'usa-button-navy':
      'usa-button';

  if (type === 'hero' && (link.charAt(0) === '/' && link.slice(-4) === '.pdf')) {
    buttonURL = <a href={link}>{button_text}</a>
  } else {
    buttonURL =  <Link
    to = { link }
    children = { button_text } />
  };

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
