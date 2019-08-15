import React from 'react'
import Teaser from '../Teaser'

//This displays a single medium teaser
export default function MediumSinglePost({ single }) {
  let mediumLink = `https://medium.com/civicactions/${single.uniqueSlug}`
  let mediumDate = single.createdAt
  let mediumTitle = single.title

  return (
    <Teaser
      teaserDate={mediumDate}
      teaserTitle={mediumTitle}
      teaserLink={mediumLink}
    />
  )
}
