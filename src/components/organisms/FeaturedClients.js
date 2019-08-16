import React from "react"
import SectionTitle from "../atoms/SectionTitle"
import RolloverIcon from "../atoms/RolloverIcon"

import cadmv from "./../../files/client-logos/cadmv.png"
import cdt from "./../../files/client-logos/cdt.png"
import cityofboston from "./../../files/client-logos/cityofboston.png"
import cityofla from "./../../files/client-logos/cityofla.png"
import cwds from "./../../files/client-logos/cwds.png"
import DEA from "./../../files/client-logos/DEA.png"
import denverlibrary from "./../../files/client-logos/denverlibrary.png"
import deptdefense from "./../../files/client-logos/deptdefense.png"
import deptofed from "./../../files/client-logos/deptofed.png"
import fcc from "./../../files/client-logos/fcc.png"
import foia from "./../../files/client-logos/FOIA.png"
import gatechauthority from "./../../files/client-logos/GAtechauthority.png"
import georgiascholastic from "./../../files/client-logos/georgiascholastic.png"
import healthandhumanservices from "./../../files/client-logos/healthandhumanservices.png"
import houseofreps from "./../../files/client-logos/houseofreps.png"
import louisville from "./../../files/client-logos/louisville.png"
import marinescotland from "./../../files/client-logos/marinescotland.png"
import MTA from "./../../files/client-logos/MTA.png"
import natlcommunityservice from "./../../files/client-logos/natlcommunityservice.png"
import northdakota from "./../../files/client-logos/northdakota.png"
import nuclearfac from "./../../files/client-logos/nuclearfac.png"
import officeofpres from "./../../files/client-logos/officeofpres.png"
import osi from "./../../files/client-logos/osi.png"
import rhodeisland from "./../../files/client-logos/rhodeisland.png"
import rpa from "./../../files/client-logos/rpa.png"
import sentencingcommissions from "./../../files/client-logos/sentencingcommissions.png"
import sfenvironment from "./../../files/client-logos/sfenvironment.png"
import smithsonian from "./../../files/client-logos/smithsonian.png"
import stateofgeorgia from "./../../files/client-logos/stateofgeorgia.png"
import stluciajamaica from "./../../files/client-logos/stluciajamaica.png"
import usda from "./../../files/client-logos/usda.png"
import veteransaffairs from "./../../files/client-logos/veteransaffairs.png"

const FeaturedClients = () => (
  <section className="section section__featured_clients usa-grid">
    <div className="section__featured_clients--intro_wrapper">
      <SectionTitle title="Organizations We Serve" />
      <div className="section__featured_clients--intro-text">
        <p>
          We partner with all levels of government, NGOs, and nonprofits to
          build a better future.
        </p>
      </div>
    </div>
    <div className="rollovericon__group">
      <RolloverIcon
        icon={cadmv}
        icon_rollover_text="California DMV"
        icon_class="icon__cadmv"
      />
      <RolloverIcon
        icon={cdt}
        icon_rollover_text="California Department of Technology"
        icon_class="icon_cdt"
      />
      <RolloverIcon
        icon={cityofboston}
        icon_rollover_text="City of Boston"
        icon_class="icon_cityofboston"
      />
      <RolloverIcon
        icon={cityofla}
        icon_rollover_text="City of Los Angeles"
        icon_class="icon_cityofla"
      />
      <RolloverIcon
        icon={cwds}
        icon_rollover_text="California Child Welfare Digital Services"
        icon_class="icon_cwds"
      />
      <RolloverIcon
        icon={DEA}
        icon_rollover_text="US Drug Enforcement Administration"
        icon_class="icon_dea"
      />
      <RolloverIcon
        icon={denverlibrary}
        icon_rollover_text="Denver Public Library"
        icon_class="icon_denverlibrary"
      />
      <RolloverIcon
        icon={deptdefense}
        icon_rollover_text="US Department of Defense"
        icon_class="icon_dod"
      />
      <RolloverIcon
        icon={deptofed}
        icon_rollover_text="US Department of Education"
        icon_class="icon_deptofed"
      />
      <RolloverIcon
        icon={fcc}
        icon_rollover_text="US Federal Communication Commission"
        icon_class="icon_fcc"
      />
      <RolloverIcon
        icon={foia}
        icon_rollover_text="FOIA"
        icon_class="icon_foia"
      />
      <RolloverIcon
        icon={gatechauthority}
        icon_rollover_text="State of Georgia Technical Authority"
        icon_class="icon_gatechauthority"
      />
      <RolloverIcon
        icon={georgiascholastic}
        icon_rollover_text="State of Georgie Office of Scholastic Achievement"
        icon_class="icon_georgiascholastic"
      />
      <RolloverIcon
        icon={healthandhumanservices}
        icon_rollover_text="US Department of Health & Human Services"
        icon_class="icon_hhs"
      />
      <RolloverIcon
        icon={houseofreps}
        icon_rollover_text="US House of Representatives"
        icon_class="icon_houseofreps"
      />
      <RolloverIcon
        icon={louisville}
        icon_rollover_text="City of Louisville, KY"
        icon_class="icon_louisville"
      />
      <RolloverIcon
        icon={marinescotland}
        icon_rollover_text="Marine Scotland"
        icon_class="icon_marinescotland"
      />
      <RolloverIcon
        icon={MTA}
        icon_rollover_text="New York MTA"
        icon_class="icon_mta"
      />
      <RolloverIcon
        icon={natlcommunityservice}
        icon_rollover_text="Corporation for National & Community Service"
        icon_class="icon_natlcommunityservice"
      />
      <RolloverIcon
        icon={northdakota}
        icon_rollover_text="North Dakota"
        icon_class="icon_northdakota"
      />
      <RolloverIcon
        icon={nuclearfac}
        icon_rollover_text="Defense Nuclear Facilities Safety Board"
        icon_class="icon_nuclearfac"
      />
      <RolloverIcon
        icon={officeofpres}
        icon_rollover_text="US Executive Office of the President"
        icon_class="icon_officeofpres"
      />
      <RolloverIcon
        icon={osi}
        icon_rollover_text="California Office System Integration (OSI)"
        icon_class="icon_osi"
      />
      <RolloverIcon
        icon={rhodeisland}
        icon_rollover_text="State of Rhode Island"
        icon_class="icon_rhodeisland"
      />
      <RolloverIcon
        icon={rpa}
        icon_rollover_text="Regional Planning Association"
        icon_class="icon_rpa"
      />
      <RolloverIcon
        icon={sentencingcommissions}
        icon_rollover_text="US Sentencing Commission"
        icon_class="icon_sentencingcommissions"
      />
      <RolloverIcon
        icon={sfenvironment}
        icon_rollover_text="SF Environment.org"
        icon_class="icon_sfenvironment"
      />
      <RolloverIcon
        icon={smithsonian}
        icon_rollover_text="Smithsonian National Museum of History"
        icon_class="icon_smithsonian"
      />
      <RolloverIcon
        icon={stateofgeorgia}
        icon_rollover_text="State of Georgia"
        icon_class="icon_stateofgeorgia"
      />
      <RolloverIcon
        icon={stluciajamaica}
        icon_rollover_text="St. Lucia and Jamaica"
        icon_class="icon_stluciajamaica"
      />
      <RolloverIcon
        icon={usda}
        icon_rollover_text="US Department of Agriculture"
        icon_class="icon_usda"
      />
      <RolloverIcon
        icon={veteransaffairs}
        icon_rollover_text="US Veterans Affairs"
        icon_class="icon_veteransaffairs"
      />
    </div>
  </section>
)

export default FeaturedClients
