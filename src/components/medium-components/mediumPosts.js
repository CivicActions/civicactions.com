import React from "react"
import _ from "lodash"

import MediumSinglePost from "./mediumSinglePost"

const MediumPosts = ({ data }) =>
  // Iterate over the second & third levels of Medium posts.
  _.map(data, single =>
    _.map(single, (last, index) => (
      <li key={index} className="medium--teaser__item teaser__item">
        <MediumSinglePost key={index} single={last.node} />
      </li>
    ))
  )

export default MediumPosts
