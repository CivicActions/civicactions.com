import React from "react";
import image1 from './../../files/images/lights.jpeg';
import image2 from './../../files/images/mac.jpg';

import Teaser from './../Teaser';
import SectionTitle from '../atoms/SectionTitle';

const GovernmentServices = () => (
  <section className = "section section__government-services neutral-hex-bg">
    <div className = "usa-grid">
      <SectionTitle title = "Modernizing Government Services" />
      <Teaser
        teaserTitle = "Contracting and capabilities"
        teaserImage = { image1 }
        teaserText = "Years of work in the public sector have taught us how to meet the needs of today’s government"
        teaserLink = "/capabilities"
        teaserClass = "teaser__contracting teaser__halves"
      />
      <Teaser
        teaserTitle = "DKAN and Open Data"
        teaserImage = { image2 }
        teaserText = "We help agencies comply with open data mandates by providing full-scale DKAN services and support."
        teaserLink = "/"
        teaserClass = "teaser__dkan teaser__halves"
      />
    </div>
  </section>
);

export default GovernmentServices;