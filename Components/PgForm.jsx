import React from "react";
import emailjs from "emailjs-com";

export default function PgForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ifv1ji3",
        "template_it6g5es",
        e.target,
        "MtDNw3vFu6MMDdzTG"
      )
      .then((res) => {
        console.log(res);
      }).catch(err=> console.log(err));
  }
  return (
    <>
      <div className="row crd-form">
        <div className="col-md-12">
          <form onSubmit={sendEmail} autocomplete="off">
            <input type="text" name="name" placeholder="Full name" required />
            <input
              type="email"
              name="user-email"
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="number"
              placeholder="Phone number"
              required
            />
            <textarea
              name="message"
              id=""
              cols="45"
              placeholder="Ask your question"
              rows="10"
              required
            ></textarea>
            <div className="mt-3 ms-3">
              <input type="submit" value="Send" className="hero-buttn" />
              {/* <a href="" >
                Send
              </a> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
