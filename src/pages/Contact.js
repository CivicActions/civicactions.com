import React from 'react';

import GeneralLayout from './../components/layouts/GeneralLayout';
import ReachUs from './../components/organisms/ReachUs';
import SectionTitle from './../components/atoms/SectionTitle';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      org: '',
      phone: '',
      touched: {
        name:  false,
        org:   false,
        email: false,
        phone: false
      }
    };
  }

  handleNameChange = (event) => {
    this.setState( {name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value })
  };

  handleOrgChange = (event) => {
    this.setState({ org: event.target.value })
  };

  handlePhoneChange = (event) => {
    this.setState({ phone: event.target.value })
  };

  handleBlur = (field) => (event) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }

  validate = (name, org, email, phone) => {
    // true means invalid, so our conditions got reversed
    return {
      name: name.length === 0,
      org: org.length === 0,
      phone: phone.length === 0,
      email: email.length === 0,
    };
  };



  render(){
    const{ name, org, email, phone } = this.state;
    const isEnabled =
      name.length > 0
      && org.length > 0
      && email.length > 0
      && phone.length > 0;

    function validate(name, org, email, phone) {
      // true means invalid, so our conditions got reversed
      return {
        name: name.length === 0,
        org: org.length === 0,
        phone: phone.length === 0,
        email: email.length === 0,
      };
    };

    const errors = validate(name, org, email, phone);

    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };


    return (
      <GeneralLayout
        heroTitle = "Hire Us"
        heroSubtitle = "Let’s create a public success story together. Tell us about your challenge or idea, and we’ll get in touch to discuss a plan of action. "
      >
        <section className = "section section__contact">
          <section className = "usa-grid">
            <form action="https://formspree.io/iris.ibekwe@civicactions.com"
                  method="POST"
                  className = "text-container"
            >
              <div className = "form__field">
                <label htmlFor ="name">Name<abbr title = "This field is mandatory">*</abbr></label>
                <input type="text"
                       id="name"
                       name="Name"
                       required aria-required="true"
                       value={this.state.name}
                       onChange={this.handleNameChange}
                       onBlur={this.handleBlur('name')}
                       className={shouldMarkError('name') ? "error" : ""}
                />
              </div>

              <div className = "form__field">
                <label htmlFor ="organization">Organization<abbr title="This field is mandatory">*</abbr> </label>
                <input type="text"
                       id="organization"
                       name="Organization"
                       required aria-required="true"
                       value={this.state.org}
                       onChange={this.handleOrgChange}
                       onBlur={this.handleBlur('org')}
                       className={shouldMarkError('org') ? "error" : ""}
                />
              </div>

              <div className = "form__field">
                <label htmlFor ="email">Email<abbr title="This field is mandatory">*</abbr> </label>
                <input id = "email"
                       type="email"
                       name="_replyto"
                       required aria-required="true"
                       value={this.state.email}
                       onChange={this.handleEmailChange}
                       onBlur={this.handleBlur('email')}
                       className={shouldMarkError('email') ? "error" : ""}
                />
              </div>

              <div className = "form__field">
                <label htmlFor ="phone">Phone<abbr title="This field is mandatory">*</abbr> </label>
                <input type="tel"
                       id="tel"
                       name="User Phone"
                       required aria-required="true"
                       value={this.state.phone}
                       onChange={this.handlePhoneChange}
                       className={shouldMarkError('phone') ? "error" : ""}
                />
              </div>

              <div className = "form__field">
                <label htmlFor ="url">Website </label>
                <input type="url" id="url" name="User Website" />
              </div>

              <div className = "form__field">
                <label htmlFor ="purpose">How can we help you? </label>
                <textarea id="purpose" name="How Can We help You"/>
              </div>

              <div className = "form__field">
                <label htmlFor ="url">How did you hear about us? </label>
                <input type="text" id="url" name="How did you hear about us" />
              </div>
              <input type="text" name="_gotcha" className ="form__gotcha" />

              <div className = "form__field form__submit">
                <button type="submit" value="Send" disabled={!isEnabled} > Submit </button>
              </div>
              <input type="hidden" name="_next" value="http://localhost:8000/thank-you" />
            </form>
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
  }

};

export default Contact;