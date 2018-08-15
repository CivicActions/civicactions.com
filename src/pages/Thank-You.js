import React from 'react';

import GeneralLayout from './../components/layouts/GeneralLayout';

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

      <section className = "section section__contact-options">
        <section className = "usa-grid">
          <h2>options</h2>
        </section>
      </section>
    </GeneralLayout>
  );
};

export default ThankYou;