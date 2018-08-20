import React from "react";
import Link from "gatsby-link";
import closeIcon from "./../../files/icons/close-primary.svg";
import Logo from './../atoms/logo/Logo';


const TopNav = ({pages}) => {
    return (
            <nav role = "navigation" className = "usa-nav">
                <div className = "usa-grid mobile-nav--logo">
                    <div className = "mobile-nav--logo-container">
                        <Logo siteTitle = "CivicActions" />
                    </div>
                    <div className = "mobile-nav--close--container">
                        <button className = "usa-nav-close">
                            Menu <img src = { closeIcon } alt = "close menu" />
                        </button>
                    </div>
                </div>
                <ul className ="usa-nav-primary usa-accordion">
                    {/* For looping through pages pulled from the query */}
                    {/*{ pages.edges.map(({ node }) => (*/}
                        {/*<li className = "menu-item">*/}
                            {/*<Link to = { node.path } > { node.path } </Link>*/}
                        {/*</li>*/}
                    {/*))}*/}
                    <li className = "menu-item">
                        <button className = "usa-accordion-button usa-nav-link" aria-expanded = "false" aria-controls = "basic-nav-section-one">
                            <span>About</span>
                        </button>
                        <ul id = "basic-nav-section-one" className = "usa-nav-submenu" aria-hidden = "true">
                            <li>
                                <Link to = '/values/' activeClassName = "usa-current"> Our Values </Link>
                            </li>
                            <li>
                                <Link to = '/team/' activeClassName = "usa-current"> Our People </Link>
                            </li>
                            <li>
                                <Link to = '/communities' activeClassName = "usa-current"> Our Community  </Link>
                            </li>
                            <li>
                                <Link to = '/press' activeClassName = "usa-current"> Press </Link>
                            </li>
                        </ul>
                    </li>
                    <li className = "menu-item">
                        <button className = "usa-accordion-button usa-nav-link" aria-expanded = "false" aria-controls = "basic-nav-section-two">
                            <span>Work</span>
                        </button>
                        <ul id = "basic-nav-section-two" className = "usa-nav-submenu" aria-hidden = "true">
                            <li>
                                <Link to = '/approach' activeClassName = "usa-current"> Our Approach </Link>
                            </li>
                            <li>
                                <Link to = '/case-study' activeClassName = "usa-current"> Case Studies </Link>
                            </li>
                        </ul>
                    </li>
                    <li className = "menu-item">
                        <a href="https://medium.com/civicactions" className = "usa-nav-link"><span>Blog</span></a>
                    </li>
                    <li className = "menu-item">
                        <button className = "usa-accordion-button usa-nav-link" aria-expanded = "false" aria-controls = "basic-nav-section-three">
                            <span>Connect</span>
                        </button>
                        <ul id = "basic-nav-section-three" className = "usa-nav-submenu" aria-hidden = "true">
                            <li>
                                <Link to = '/careers' activeClassName = "usa-current"> Careers </Link>
                            </li>
                            <li>
                                <Link to = '/contact' activeClassName = "usa-current"> Contact </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
    )
};

export default TopNav;