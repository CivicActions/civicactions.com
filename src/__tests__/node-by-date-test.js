import React from "react"
import { allNodes } from "../__fixtures__/all-nodes.js"

describe(`Nodes with dates`, () => {
  const pressNodes = allNodes.data.allMarkdownRemark.edges.filter(
    ({ node }) => node.frontmatter.type === `press`
  )

  const sortedDates = pressNodes.map(node => node.node.frontmatter.date)

  it(`should list nodes with dates in dates order`, () => {
    expect(sortedDates).toEqual([
      `2018-10-22`,
      `2018-10-01`,
      `2018-06-12`,
      `2018-06-05`,
      `2018-03-27`,
      `2018-01-10`,
      `2017-12-05`,
      `2017-11-01`,
    ])
  })
})
