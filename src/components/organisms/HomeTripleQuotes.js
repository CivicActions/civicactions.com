import React from "react"

import Blockquote from "./../atoms/Blockquote";
import SectionTitle from "./../atoms/SectionTitle";

import image1 from "./128.jpg";

const HomeTripleQuotes = () => (
  <section class = "section section__triple-quotes usa-grid">
    <SectionTitle title = "Get to know us" />
    <Blockquote
      quote = "I love the openness, the collaborative atmosphere, the honesty, and the way CivicActions prioritizes the well-being of team members."
      quote_source = "Iris Ibekwe, Engineer"
      quote_image = { image1 }
    />
  </section>
)

export default HomeTripleQuotes;