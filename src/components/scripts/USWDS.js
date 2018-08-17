import React, { Component } from "react"

class USWDS extends Component {
    static loadUSWDS () {
        return require('uswds');
    }
    componentDidMount() {
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