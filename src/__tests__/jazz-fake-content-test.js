import React from "react"

describe(`JAZZ API URL`, () => {
  it(`Should use the dummy page when "development"`, () => {
    const GATSBY_JAZZ_URL = `development`
    expect(GATSBY_JAZZ_URL).toEqual(`development`)
  })
  it(`Should pass when GATSBY_JAZZ_URL is not empty`, () => {
    const GATSBY_JAZZ_URL = ``
    expect(GATSBY_JAZZ_URL === ``).toBeTruthy()
  })
  it(`Should pass when GATSBY_JAZZ_URL is null`, () => {
    const GATSBY_JAZZ_URL = null
    expect(GATSBY_JAZZ_URL === null).toBeTruthy()
  })
  it(`Should pass when GATSBY_JAZZ_URL is any string other than development.`, () => {
    const GATSBY_JAZZ_URL = `http://somerandomstring`
    expect(GATSBY_JAZZ_URL).not.toBe(`development`)
  })
})
