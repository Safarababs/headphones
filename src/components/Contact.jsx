import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">contact</h1>

      <h1 className="title">contact us for latest updates</h1>

      <form action="">
        <div className="inputBox">
          <input type="text" placeholder="first name" />
          <input type="text" placeholder="last name" />
        </div>

        <div className="inputBox">
          <input type="email" placeholder="your email" />
          <input type="password" placeholder="your password" />
        </div>

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="message"
        ></textarea>

        <input type="submit" value="message" className="btn" />
      </form>
    </section>
  );
};

export default Contact;
