import React from 'react';
import _ from 'lodash'

import MediumPosts from './mediumPosts';

const MediumPostList = ({ posts }) => {

  // Iterate through the first level of the medium posts objects;
  return (
    _.map(posts, (article, index) => {
      return <MediumPosts key = {{ index }} data = {{ article }} />
    })
  )

};

export default MediumPostList;