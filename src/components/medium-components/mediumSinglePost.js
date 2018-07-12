import React from 'react';

//This displays a single medium teaser
export default function MediumSinglePost({single}) {

  let mediumLink = `https://medium.com/civicactions/${single.uniqueSlug}`;
  let mediumDate = single.createdAt;
  let mediumTitle = single.title;

  return (
    <li key = { single.id }>
      <div className = "medium--teaser__date"> { mediumDate } </div>
      <h3 className = "medium--teaser__title"> { mediumTitle } </h3>
      <div className = "medium--teaser__link"> <a href = { mediumLink }>Read More</a> </div>
    </li>
  );

}