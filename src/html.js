import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script
              key = "external-links"
              dangerouslySetInnerHTML = {{
                  __html: `
          if(document) {
            document.onreadystatechange = () => {
                if (document.readyState === 'complete') {
                    // document ready
                    let anchors = document.querySelectorAll('a:not(.fa):not([href^="/"])');

                    for (let i = 0; i < anchors.length; i++) {
                        if (anchors[i].host !== window.location.hostname) {
                            anchors[i].classList.add('external-link');
                        }

                    }
                }
            };
        }`
              }}
          />
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
