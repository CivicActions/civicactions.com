import React from "react";
import image1 from './../../files/images/lights.jpeg';
import image2 from './../../files/images/mac.jpg';

import Teaser from './../Teaser';
import SectionTitle from '../atoms/SectionTitle';

const GovernmentServices = () => (
  <section className = "section section__government-services usa-grid">
    <SectionTitle title = "Modernizing Government Services" />
    <Teaser
      teaserTitle = "Contracting and capabilities"
      teaserImage = { image1 }
      teaserText = "We've worked for years in the public sector and understand how to meet the needs of today's government."
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
  </section>
);

export default GovernmentServices;