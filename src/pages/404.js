import React from "react"
import PropTypes from "prop-types"
import NotFoundLayout from "../components/layouts/NotFoundLayout"
import PersonNotFoundLayout from "../components/layouts/PersonNotFoundLayout"

class NotFoundPage extends React.Component {
  static propTypes = {
    location: PropTypes.object,
  }

  render() {
    const {pathname} = this.props.location
    return pathname.includes('/team/') ? <PersonNotFoundLayout/> : <NotFoundLayout/>
  }
}

export default NotFoundPage
