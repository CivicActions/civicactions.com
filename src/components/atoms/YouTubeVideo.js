import React from "react"
import Link from "../scripts/Link"
import YouTube from "react-youtube"

class YouTubeVideo extends React.Component {
  state = {
    show: false,
  }

  onClick = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }))
  }

  render() {
    const { show } = this.state
    const {
      youTubeID,
      related_link,
      related_link_title,
      cover_image,
    } = this.props.video
    const opts = {
      height: "100%",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    }
    const vid = (
      <div className="teaser-grid iframe-container">
        <YouTube videoId={youTubeID} opts={opts} />
      </div>
    )
    const image = (
      <div className="teaser-grid vid-image-preview" onClick={this.onClick}>
        <img
          src={cover_image.childImageSharp.fixed.src}
          alt={`${related_link_title} video`}
        />
      </div>
    )
    return (
      <div className="teaser--youtube-video">
        {show ? vid : image}
        <div className="youtube_video_text">
          <h3 className="teaser__title">
            <Link to={related_link}>{related_link_title}</Link>
          </h3>
        </div>
      </div>
    )
  }
}

export default YouTubeVideo
