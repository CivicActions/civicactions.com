import React from "react"
import { wrapYouTubeUrl } from "../../helpers"
import Link from "../scripts/Link"

const YouTubeVideo = props => {
  const { url, related_link, related_link_title } = props.video
  return (
    <div className="teaser--youtube-video">
      <div className="teaser-grid iframe-container">
        <iframe
          src={url}
          width="100%"
          frameBorder="0"
          height="100%"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allow="fullscreen "
        ></iframe>
      </div>
      <div className="youtube_video_text">
        <h3 className="teaser__title">
          <Link to={related_link}>{related_link_title}</Link>
        </h3>
      </div>
    </div>
  )
}

export default YouTubeVideo
