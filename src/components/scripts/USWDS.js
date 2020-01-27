import React, { Component } from "react"

class USWDS extends Component {
  static loadUSWDS() {
    return require(`uswds`)
  }

  static isOpen() {
    const topLinks = document.querySelectorAll(`.usa-accordion-button`)
    for (let j = 0; j < topLinks.length; j++) {
      if (topLinks[j].getAttribute(`aria-expanded`) === "true") {
        return true
      }
    }
    return false
  }

  static closeAll() {
    const topLinks = document.querySelectorAll(`.usa-accordion-button`)
    for (let j = 0; j < topLinks.length; j++) {
      topLinks[j].setAttribute(`aria-expanded`, `false`)
    }
    const subMenus = document.querySelectorAll(`.usa-nav-submenu`)
    for (let j = 0; j < subMenus.length; j++) {
      subMenus[j].setAttribute(`aria-hidden`, `true`)
    }
  }

  componentDidMount() {
    const isMobileDevice =
      navigator.userAgent.match(/iPad|iPhone|iPod/i) != null

    const anchors = document.querySelectorAll(`a:not(.fa):not([href^="/"])`)

    for (let i = 0; i < anchors.length; i++) {
      if (anchors[i].host !== window.location.hostname) {
        // Add a class to external links and force them to open in a new
        // tab/window.
        anchors[i].classList.add(`external-link`)
        anchors[i].setAttribute(`target`, `_blank`)
      }
    }

    document.addEventListener(
      "click",
      function(event) {
        // Bail out if no submenus are open.
        if (!USWDS.isOpen()) return

        // If the click isn't in a drop-down, close all drop-downs.
        if (!event.target.parentNode.matches(".usa-accordion-button")) {
          USWDS.closeAll()
        }
      },
      false
    )

    if (isMobileDevice) {
      const topLinks = document.querySelectorAll(`.usa-accordion-button`)
      for (let j = 0; j < topLinks.length; j++) {
        if (topLinks[j].getAttribute(`aria-expanded`) !== true) {
          topLinks[j].setAttribute(`aria-expanded`, `true`)
        }
      }
    }

    USWDS.loadUSWDS()
  }

  componentWillUnmount() {
    USWDS.loadUSWDS(`destroy`)
  }

  render() {
    return <div ref={el => (this.el = el)} />
  }
}

export default USWDS
