import React from 'react';

import GeneralLayout from './../components/layouts/GeneralLayout';
import ReachUs from './../components/organisms/ReachUs';
import SectionTitle from './../components/atoms/SectionTitle';

import thank_you_image from './../files/images/thanky-you-cat.gif';

const ThankYou = () => {
  return (
    <GeneralLayout
      heroTitle = "Hire Us"
      heroSubtitle = "Let’s create a public success story together. Tell us about your challenge or idea, and we’ll get in touch to discuss a plan of action. "
    >
      <section className = "section section__thankyou">
        <section className = "usa-grid text-container">
          <h3>We'll be in touch soon!</h3>
          <img src = { thank_you_image} alt = "Cat saying Thank you!" />
        </section>
      </section>

      <section className = "section section__contact-options neutral-hex-bg">
        <section className = "usa-grid">
          <SectionTitle title = "More Ways to Reach Us" />
          <div className = "section__benefits--intro-text">Feel free to connect with us about work opportunities, speaking engagements, potential partnerships, or just to say hi.</div>
          <ReachUs />
        </section>
      </section>
    </GeneralLayout>
  );
};

export default ThankYou;