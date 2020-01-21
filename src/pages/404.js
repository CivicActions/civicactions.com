import React from "react"
import PropTypes from "prop-types"
import NotFoundLayout from "../components/layouts/NotFoundLayout"

class NotFoundPage extends React.Component {
  static propTypes = {
    location: PropTypes.object,
  }

  render() {
    const { pathname } = this.props.location
    const heroTitle = "Whoops!"
    const heroIntroText = pathname.includes("/team/")
      ? "This person no longer works at CivicActions. We're so grateful for their contributions and wish them the best in their current endeavors! Meanwhile, you may wish to:"
      : "The page you're looking for no longer exists. You could:"

    return (
      <NotFoundLayout heroTitle={heroTitle} heroIntroText={heroIntroText} />
    )
  }
}

export default NotFoundPage
