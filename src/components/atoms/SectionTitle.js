import React from "react";

const SectionTitle = ({title, subtitle}) => {
  const sectionSubtitle = subtitle ? <p className = "section__subtitle">{ subtitle }</p>: '';

  return(
    <div className = "section__title--wrapper">
      <h2 className = "section__title">{ title }</h2>
      { sectionSubtitle }
    </div>
  );

};

export default SectionTitle;