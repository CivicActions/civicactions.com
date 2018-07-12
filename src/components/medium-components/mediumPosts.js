import React from 'react';
import _ from 'lodash'

import MediumSinglePost from './mediumSinglePost';

const MediumPosts = ({data}) => {
// Iterate over the second & third levels of Medium posts.
  return(
    _.map(data, (single) => {
     return _.map(single, (last, index) => {
        return (
          <ul  key = { index } className = "medium--teaser">
            <MediumSinglePost key = { index } single = {last.node} />
          </ul>
        );
      })
    })
  )
};

export default MediumPosts;

