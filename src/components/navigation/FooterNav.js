import React from "react";
import Link from "gatsby-link";


const FooterNav = () => {

    return (
        <nav className = "usa-footer-nav usa-width-two-thirds">
            <ul className = "usa-unstyled-list usa-width-one-fourth usa-footer-primary-content">
                <li className = "usa-footer-primary-link">
                    <h4>About</h4>
                </li>
                <li className = "usa-footer-secondary-link">
                    <Link to = '/values' activeClassName = "usa-current"> Our Values </Link>
                </li>
                <li className = "usa-footer-secondary-link">
                    <Link to = '/team' activeClassName = "usa-current"> Our Team </Link>
                </li>
                <li className = "usa-footer-secondary-link">
                    <Link to = '/communities' activeClassName = "usa-current"> Our Communities  </Link>
                </li>
                <li className = "usa-footer-secondary-link">
                    <Link to = '/press' activeClassName = "usa-current"> Press </Link>
                </li>
            </ul>
            <ul className = "usa-unstyled-list usa-width-one-fourth usa-footer-primary-content">
                <li className = "usa-footer-primary-link">
                    <h4>Work</h4>
                </li>
                <li className = "usa-footer-secondary-link">
                    <Link to = '/approach' activeClassName = "usa-current"> Our Approach </Link>
                </li>
                <li className = "usa-footer-secondary-link">
                    <Link to = '/case-study' activeClassName = "usa-current"> Case Studies </Link>
                </li>
                <li className = "usa-footer-secondary-link">
                    <Link to = '/capabilities' activeClassName = "usa-current"> Contracting and Capabilities </Link>
                </li>
                <li className = "usa-footer-secondary-link">
                    <Link to = '/dkan' activeClassName = "usa-current"> DKAN and Open Data </Link>
                </li>
            </ul>
            <ul className = "usa-unstyled-list usa-width-one-fourth usa-footer-primary-content">
                <li className = "usa-footer-primary-link">
                    <h4>Connect</h4>
                </li>
                <li className = "usa-footer-secondary-link">
                    <a href="https://medium.com/civicactions" className = "usa-nav-link"><span>Blog</span></a>
                </li>
                <li className = "usa-footer-secondary-link">
                    <Link to = '/careers' activeClassName = "usa-current"> Careers </Link>
                </li>
                <li className = "usa-footer-secondary-link">
                    <Link to = '/contact' activeClassName = "usa-current"> Contact </Link>
                </li>
            </ul>
            <ul className = "usa-unstyled-list usa-width-one-fourth usa-footer-primary-content">
                <li className = "usa-footer-primary-link">
                    <h4>Details</h4>
                </li>
                {/*<li className = "usa-footer-secondary-link">*/}
                    {/*<Link to = '/privacy' activeClassName = "usa-current"> Privacy </Link>*/}
                {/*</li>*/}
                <li className = "usa-footer-secondary-link">
                   <Link to = '/licensing-policy' activeClassName = "usa-current"> Licensing Policy</Link>
                </li>
                <li className = "usa-footer-secondary-link">
                    <a href = "https://creativecommons.org/licenses/by-sa/3.0/" className = "external-link usa-nav-link"> <span>Creative Commons </span> </a>
                </li>
            </ul>
        </nav>
    )
};

export default FooterNav;
