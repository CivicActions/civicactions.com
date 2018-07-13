import React from 'react';
import { Link } from 'gatsby'

import logo from './logo-civicactions.png';
import logo2x from './logo-civicactions2x.png';

const Logo = ({siteTitle}) => {

  let srcset = `${logo} 1x, ${logo2x} 2x`;

  return(
    <Link to="/" className = "logo">
      <img src= { logo }
           srcset= { srcset }
           alt= { siteTitle }
           retina_logo_url= { logo2x }
           class="logo__image"
      />
    </Link>
  );
};

export default Logo;
