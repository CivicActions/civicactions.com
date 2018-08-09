import React from "react";

const SectionTitle = ({title, subtitle}) => (
  <div className = "section__title--wrapper">
    <h2 className = "section__title">{ title }</h2>
    <p className = "section__subtitle">{ subtitle }</p>
  </div>
);

export default SectionTitle;