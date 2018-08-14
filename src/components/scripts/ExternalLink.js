import React, { Component } from "react"

class ExternalLink extends Component {
    static addExternalClass() {
        if(document) {
            document.onreadystatechange = () => {
                if (document.readyState === 'complete') {
                    // document ready
                    let anchors = document.querySelectorAll('a:not(.fa):not([href^="/"])');

                    for (let i = 0; i < anchors.length; i++) {
                        if (anchors[i].host !== window.location.hostname) {
                            anchors[i].setAttribute('class', 'external-link');
                        }

                    }
                }
            };
        }

        return null;
    }

    render() {
        return (
            ExternalLink.addExternalClass()
        )
    }
}

export default ExternalLink;