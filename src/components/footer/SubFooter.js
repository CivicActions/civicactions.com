import React from "react";

import SubFooterCta from "./SubFooterCta";

const SubFooter = ({ hide }) => {
  // This conditional render is done in an "upside-down manner so that SubFooters in use elsewhere that
  // do not set this prop value will still get displayed.
  if (hide === true) {
    return null;

  } else {
    return (<div className="section__subfooter--wrapper">
      <section className="section__subfooter subfooter usa-grid">
        <div className="subfooter__col">
          <SubFooterCta title="Like what you see?" link_text="Join Our Team" link_url="/team"/>
        </div>
        <div className="subfooter__col ">
          <SubFooterCta title="Make an impact" link_text="Hire Us" link_url="/"/>
        </div>
      </section>
    </div>);
  }
};

export default SubFooter;
