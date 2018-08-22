import React, { Component } from "react"

class USWDS extends Component {
    static loadUSWDS () {
        return require('uswds');
    }

    componentDidMount() {
        const isMobileDevice = navigator.userAgent.match(/iPad|iPhone|iPod/i) != null;

        document.body.classList.add('fade');

        let anchors = document.querySelectorAll('a:not(.fa):not([href^="/"])');

        for (let i = 0; i < anchors.length; i++) {
            if (anchors[i].host !== window.location.hostname) {
                anchors[i].classList.add('external-link');
            }

        }

        if(isMobileDevice) {
            let topLinks = document.querySelectorAll('.usa-accordion-button');
            for (let j = 0; j < topLinks.length; j++) {
                if(topLinks[j].getAttribute('aria-expanded') !== true) {
                    topLinks[j].setAttribute('aria-expanded', 'true');
                }
            }
        }

        // const script = document.createElement('script');
        // script.type = 'text/javascript';
        // script.text = "document.body.classList.remove('fade')";
        // document.body.appendChild(script);


        USWDS.loadUSWDS();
    }

    componentWillUnmount() {
        USWDS.loadUSWDS('destroy')
    }

    render() {
        return <div ref={el => this.el = el} />;
    }
}

export default USWDS;