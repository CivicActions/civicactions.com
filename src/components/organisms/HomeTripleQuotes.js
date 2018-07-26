import React from "react"

import Blockquote from "./../atoms/Blockquote";
import SectionTitle from "./../atoms/SectionTitle";

import image1 from "./../../files/images/127.jpg";
import image2 from "./../../files/images/128.jpg";
import image3 from "./../../files/images/129.jpg";

const HomeTripleQuotes = () => (
  <section
    className = "section section__triple-quotes usa-grid">
    <SectionTitle title = "Get to know us" />
    <div
      className = "blockquotes__list">
      <Blockquote
        quote = "I love the openness, the collaborative atmosphere, the honesty, and the way CivicActions prioritizes the well-being of team members."
        quote_source = "Iris Ibekwe, Engineer"
        quote_image = { image1 }
      />
      <Blockquote
        quote = "I love digging into the challenges of improving communication and process within organizations doing good."
        quote_source = "Jeff Maher, Engineer"
        quote_image = { image2 }
      />
      <Blockquote
        quote = "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.."
        quote_source = "First Last, Title"
        quote_image = { image3 }
      />
    </div>
  </section>
)

export default HomeTripleQuotes;