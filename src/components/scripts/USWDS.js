import React, { Component } from "react"

class USWDS extends Component {
  static loadUSWDS() {
    return require(`uswds`)
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
