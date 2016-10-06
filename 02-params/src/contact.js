import React from "react";

var Contact = ({location}) => {
  console.log("Contact", location);

  return <div className="contact">
    {location.query == null ?
      <div>
        <h1>Contact</h1>
        <p>Please complete the following form</p>
        <form action="/contact" method="GET">
          <input name="firstName" placeholder="first name" />
          <input name="email" type="email" placeholder="email" />
          <textarea name="message" placeholder="enter your message" />
          <input type="submit" value="Send" />
        </form>
      </div>
     :
     <div>
      <h2>Thank you, {location.query.firstName}!</h2>
      <p>{location.query.message}</p>
      <p>
        Your message shown above has been successfully submitted.
        We will be in contact with your shortly.
      </p>
    </div>
    }
  </div>
}

export default Contact;
