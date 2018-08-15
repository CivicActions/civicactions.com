import React from 'react';
import GeneralLayout from './../components/layouts/GeneralLayout';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      org: '',
      phone: ''
    };
  }

  handleNameChange = (event) => {
    this.setState( {name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value })
  };

  handleOrgChange = (event) => {
    this.setState({ email: event.target.value })
  };

  handlePhoneChange = (event) => {
    this.setState({ email: event.target.value })
  };

  render(){
    const{ name, org, email, phone } = this.state;
    const isEnabled =
      name.length > 0
      && org.length > 0
      && email.length > 0
      && phone.length > 0;

    console.log(isEnabled);

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
                <label htmlFor ="name">Name </label>
                <input type="text"
                       id="name"
                       name="user_name"
                       required aria-required="true"
                       value={this.state.name}
                       onChange={this.handleNameChange}
                />
              </div>

              <div className = "form__field">
                <label htmlFor ="organization">Organization </label>
                <input type="text" id="organization" name="organization_name" required aria-required="true"/>
              </div>

              <div className = "form__field">
                <label htmlFor ="email">Email </label>
                <input id = "email" type="email" name="_replyto" required aria-required="true" />
              </div>

              <div className = "form__field">
                <label htmlFor ="phone">Phone </label>
                <input type="tel" id="tel" name="user_phone" required aria-required="true" />
              </div>

              <div className = "form__field">
                <label htmlFor ="url">Website </label>
                <input type="url" id="url" name="user_website" />
              </div>

              <div className = "form__field">
                <label htmlFor ="purpose">How can we help you? </label>
                <textarea id="purpose" name="user_purpose"/>
              </div>

              <div className = "form__field">
                <label htmlFor ="url">How did you hear about us? </label>
                <input type="url" id="url" name="user_website" />
              </div>

              <div className = "form__field form__submit">
                <button type="submit" value="Send" disabled={!isEnabled} />
              </div>
              <input type="hidden" name="_next" value="http://localhost:8000/" />
            </form>
          </section>
        </section>

        <section className = "section section__contact-options">
          <section className = "usa-grid">
            <h2>options</h2>
          </section>
        </section>
      </GeneralLayout>
    );
  }

};

export default Contact;