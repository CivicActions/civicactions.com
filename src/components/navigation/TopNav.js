import React from "react"
import Link from "gatsby-link"
import closeIcon from "./../../files/icons/close-primary.svg"
import Logo from "./../atoms/logo/Logo"

class TopNav extends React.Component {
  state = {
    activeParent: "",
  }

  constructor(props) {
    super(props)
    this.menuRef = []
  }

  fetchActiveParent(menu, pathname) {
    const items = Object.entries(menu)
    let found = false
    for (const item of items) {
      if (item[1].innerHTML.includes("usa-current")) {
        found = true
        this.setState({ activeParent: item[0] })
      }
    }
    if (!found && pathname) {
      if (pathname.includes("/team/")) {
        this.setState({ activeParent: "about" })
      } else if (pathname.includes("/press/")) {
        this.setState({ activeParent: "about" })
      } else if (pathname.includes("/case-study/")) {
        this.setState({ activeParent: "work" })
      }
    }
  }

  componentDidMount() {
    this.fetchActiveParent(
      this.menuRef,
      this.props.path ? this.props.path : false
    )
  }

  render() {
    // const {pages} = this.props
    const { activeParent } = this.state

    return (
      <nav role="navigation" className="usa-nav">
        <div className="usa-grid mobile-nav--logo">
          <div className="mobile-nav--logo-container">
            <Logo siteTitle="CivicActions" />
          </div>
          <div className="mobile-nav--close--container">
            <button className="usa-nav-close">
              Menu <img src={closeIcon} alt="close menu" />
            </button>
          </div>
        </div>
        <ul className="usa-nav-primary usa-accordion">
          {/* For looping through pages pulled from the query */}
          {/* { pages.edges.map(({ node }) => (*/}
          {/* <li className = "menu-item">*/}
          {/* <Link to = { node.path } > { node.path } </Link>*/}
          {/* </li>*/}
          {/* ))}*/}
          <li
            className={[
              activeParent === "about" ? "usa-current" : "",
              "menu-item",
            ].join(" ")}
            ref={ref => {
              this.menuRef["about"] = ref
              return true
            }}
          >
            <button
              className="usa-accordion-button usa-nav-link"
              aria-expanded="false"
              aria-controls="basic-nav-section-one"
            >
              <span>About</span>
            </button>
            <ul
              id="basic-nav-section-one"
              className="usa-nav-submenu"
              aria-hidden="true"
            >
              <li>
                <Link to="/values" activeClassName="usa-current">
                  {` `}
                  Our Values{` `}
                </Link>
              </li>
              <li>
                <Link to="/team" activeClassName="usa-current">
                  {` `}
                  Our Team{` `}
                </Link>
              </li>
              <li>
                <Link to="/communities" activeClassName="usa-current">
                  {` `}
                  Our Communities{` `}
                </Link>
              </li>
              <li>
                <Link to="/press" activeClassName="usa-current">
                  {` `}
                  Press{` `}
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={[
              activeParent === "work" ? "usa-current" : "",
              "menu-item",
            ].join(" ")}
            ref={ref => {
              this.menuRef["work"] = ref
              return true
            }}
          >
            <button
              className="usa-accordion-button usa-nav-link"
              aria-expanded="false"
              aria-controls="basic-nav-section-two"
            >
              <span>Work</span>
            </button>
            <ul
              id="basic-nav-section-two"
              className="usa-nav-submenu"
              aria-hidden="true"
            >
              <li>
                <Link to="/approach" activeClassName="usa-current">
                  {` `}
                  Our Approach{` `}
                </Link>
              </li>
              <li>
                <Link to="/case-study" activeClassName="usa-current">
                  {` `}
                  Case Studies{` `}
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={[
              activeParent === "ideas" ? "usa-current" : "",
              "menu-item",
            ].join(" ")}
            ref={ref => {
              this.menuRef["ideas"] = ref
              return true
            }}
          >
            <button
              className="usa-accordion-button usa-nav-link"
              aria-expanded="false"
              aria-controls="basic-nav-section-three"
            >
              <span>Ideas</span>
            </button>
            <ul
              id="basic-nav-section-three"
              className="usa-nav-submenu"
              aria-hidden="true"
            >
              <li>
                <a
                  href="https://medium.com/civicactions"
                  className="usa-nav-link"
                >
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <Link to="/talks" activeClassName="usa-current">
                  {` `}
                  Talks{` `}
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={[
              activeParent === "connect" ? "usa-current" : "",
              "menu-item",
            ].join(" ")}
            ref={ref => {
              this.menuRef["connect"] = ref
              return true
            }}
          >
            <button
              className="usa-accordion-button usa-nav-link"
              aria-expanded="false"
              aria-controls="basic-nav-section-four"
            >
              <span>Connect</span>
            </button>
            <ul
              id="basic-nav-section-four"
              className="usa-nav-submenu"
              aria-hidden="true"
            >
              <li>
                <Link to="/careers" activeClassName="usa-current">
                  {` `}
                  Careers{` `}
                </Link>
              </li>
              <li>
                <Link to="/contact" activeClassName="usa-current">
                  {` `}
                  Contact{` `}
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }
}
export default TopNav
