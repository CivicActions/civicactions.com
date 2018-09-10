import React from "react";

import {filterPostsByTitle} from "../helpers";

const allPosts = [
  {
    title: "title to include 1",
    path: "path 1"
  },
  {
    title: "title to include 2",
    path: "path 2"
  },
  {
    title: "title to exclude 1",
    path: "path 1"
  },
  {
    title: "title to exclude 2",
    path: "path 2"
  }
];

const nodesFromTitles = (posts, titles, filterFun) => {
  return filterFun(posts, titles);
}

describe("Related studies by title", () => {

  it("Should get a list of nodes from title", () => {
    expect(nodesFromTitles(
      allPosts,
      ['title to include 1', 'title to include 2'],
      filterPostsByTitle,
    ).length).toEqual(2);
  })});
