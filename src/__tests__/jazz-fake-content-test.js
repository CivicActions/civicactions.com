import React from "react";

describe('Gatsby fake content', () => {
  it('Should know which type of develpment environment we are using.', () => {
    expect(process.env.NODE_ENV
    ).toEqual('test');
  });
});
