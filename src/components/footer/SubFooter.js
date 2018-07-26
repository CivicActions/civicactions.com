import React from "react";

import SubFooterCta from "./SubFooterCta";

const SubFooter = () => (
  <div className = "section__subfooter--wrapper">
    <section class = "section__subfooter subfooter usa-grid">
      <div className = "subfooter__col">
        <SubFooterCta
          title = "Like what you see?"
          link_text = "Join Our Team"
          link_url = "/team" />
      </div>
      <div className = "subfooter__col ">
        <SubFooterCta
          title = "Make an impact"
          link_text = "Hire Us"
          link_url = "/" />
      </div>
    </section>
  </div>

)

export default SubFooter;
