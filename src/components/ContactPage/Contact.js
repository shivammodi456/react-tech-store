import React, { Component } from "react";

import Title from "../Title";

class Contact extends Component {
  render() {
    return (
      <>
        <section className="py-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <Title title="contact us" />
              <form
                className="mt-5"
                action={`https://formspree.io/${process.env.REACT_APP_MAIL_ID}`}
                method="POST"
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="Shivam Modi"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="yourname@gmail.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Message"
                    row="10"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
