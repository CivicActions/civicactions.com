import React from "react";

import SubFooterCta from "./SubFooterCta";

const SubFooter = ({ hide }) => {

  let hideClass = hide === true ? 'hidden': 'visible';
    return (
      <div className= {`section__subfooter--wrapper ${ hideClass }`}>
        <section className="section__subfooter subfooter usa-grid">
          <div className="subfooter__col">
            <SubFooterCta title="Like what you see?" link_text="Join Our Team" link_url="/careers"/>
          </div>
          <div className="subfooter__col ">
            <SubFooterCta title="Make an impact" link_text="Hire Us" link_url="/contact"/>
          </div>
        </section>
    </div>);

};

export default SubFooter;
