import React from "react"
import Teaser from "../Teaser"

// This displays a single medium teaser
export default function MediumSinglePost({ single }) {
  const mediumLink = `https://medium.com/civicactions/${single.uniqueSlug}`
  const mediumDate = single.createdAt
  const mediumTitle = single.title

  return (
    <Teaser
      teaserDate={mediumDate}
      teaserTitle={mediumTitle}
      teaserLink={mediumLink}
    />
  )
}
