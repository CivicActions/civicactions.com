import React, { Component } from "react"

class USWDS extends Component {
    static loadUSWDS () {
        return require('uswds');
    }

    componentDidMount() {
        let anchors = document.querySelectorAll('a:not(.fa):not([href^="/"])');

        for (let i = 0; i < anchors.length; i++) {
            if (anchors[i].host !== window.location.hostname) {
                anchors[i].classList.add('external-link');
            }

        }

        USWDS.loadUSWDS()
    }

    componentWillUnmount() {
        USWDS.loadUSWDS('destroy')
    }

    render() {
        return <div ref={el => this.el = el} />;
    }
}

export default USWDS;