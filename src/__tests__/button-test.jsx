import React from "react";
import TestRenderer from "react-test-renderer";

import Button from "../components/atoms/Buttons";


const testRenderer = TestRenderer.create(
  <Button
    button_text = "Button text"
    link = "http://www.civicactions.com"
    isExternal = { true }
  />
);




describe("Button", () =>
  it("renders button text", () => {
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(Button).props.button_text).toBe('Button text');
  }))
