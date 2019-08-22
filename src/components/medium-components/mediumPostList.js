import React from "react"
import _ from "lodash"

import MediumPosts from "./mediumPosts"

const MediumPostList = ({ posts }) =>
  // Iterate through the first level of the medium posts objects;
  _.map(posts, (article, index) => (
    <ul key={index} className="medium--teasers teaser--wrapper">
      <MediumPosts data={{ article }} />
    </ul>
  ))

export default MediumPostList
