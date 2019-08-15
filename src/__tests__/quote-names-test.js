import React from 'react'
import { getFirstName } from '../helpers'

describe('Names for quotes', () => {
  it('Should look look up a name via a first name field if possible.', () => {
    expect(getFirstName('May Lyn', 'May Lyn Medina')).toEqual('May Lyn')
  })
  it('If no first name then use first name in the full name field', () => {
    expect(getFirstName(null, 'Kristian')).toEqual('Kristian')
  })
})
