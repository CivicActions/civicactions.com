import React from "react"
import Link from "gatsby-link";
import SocialLinks from "./../organisms/SocialLinks";
import Logo from "./../atoms/logo/Logo"
import USWDS from "./../scripts/USWDS";
import FooterNav from "./../navigation/FooterNav";

const Footer = ({email, phone, address, address_line_2, city}) => {
  let email_link = `/mailto:${email}`;

  return(
    <div className = "footer__wrapper">
      <footer className = "footer usa-grid">
        <Logo />
        <div className = "footer__address">
          <Link to = {email_link}> { email } </Link>
          <div className = "footer__phone">{ phone }</div>
          <div>{ address }</div>
          <div> { address_line_2 }</div>
           <div> { city } </div>
        </div>
        <div className = "footer__social_links">
          <SocialLinks/>
        </div>
      </footer>
      <USWDS/>
    </div>
  )
};
export default Footer;