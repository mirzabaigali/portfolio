import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { RiPhoneFill } from "react-icons/ri";
import { MdEmail, MdPlace } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");
  const nameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();
  const form = useRef();

  useEffect(() => {
    AOS.init();
  }, []);

  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const checkValidation = () => {
    const name = nameInput.current.value;
    const email = emailInput.current.value;
    if (!nameRegex.test(name)) {
      setFormStatus("Please enter a valid name.");
      return false;
    }
    if (!emailRegex.test(email)) {
      setFormStatus("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current.checkValidity()) {
      setFormStatus("Please fill in all required fields.");
      return;
    }
    if (!checkValidation()) {
      return;
    }

    emailjs
      .sendForm(
        "service_1n6kv9l",
        "template_ieckbej",
        form.current,
        "rtuH0Px395qdlKwai"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus(
            "Form submitted successfully! We will be in touch soon."
          );
          console.log("message sent");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setFormStatus(
            "An error occurred while submitting the form. Please try again later."
          );
        }
      );
  };

  return (
    <>
      <section id="contact" className="container mt-3">
        <div className="row">
          <div
            className="col-lg-6"
            data-aos="zoom-out-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="card_left">
              <p>
                <span>
                  <RiPhoneFill /> +91 8977403988
                </span>
              </p>
              <p>
                <span>
                  <MdEmail /> mirzaarifali.ba@gmail.com
                </span>
              </p>
              <p>
                <span>
                  <MdPlace /> HYDERABAD,INDIA
                </span>
              </p>
            </div>
          </div>
          <div
            className="col-lg-6"
            data-aos="zoom-out-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <form ref={form} onSubmit={sendEmail}>
              <div className="card">
                <div className="mt-3">
                  <span className="mx-3 text-black-50">
                    get in touch <br />
                    <a href="true" className="singup">
                      Contact
                    </a>
                  </span>
                </div>
                <div className="inputBox1">
                  <input
                    type="text"
                    name="user_name"
                    required="required"
                    ref={nameInput}
                    pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
                  />
                  <span className="user">Name</span>
                </div>

                <div className="inputBox">
                  <input
                    type="text"
                    name="user_email"
                    required="required"
                    ref={emailInput}
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
                  />
                  <span>Email</span>
                </div>

                <div className="inputBox">
                  <textarea
                    required="required"
                    id="message"
                    name="message"
                    className="textarea"
                    ref={messageInput}
                    rows="3"
                    cols="40"
                    maxLength="500"
                  ></textarea>
                  <span>Message</span>
                </div>
                <button className="enter" type="submit">
                  send
                </button>

                {formStatus ? (
                  <div
                    className={`form-status${
                      formStatus ? " success" : " error"
                    }`}
                  >
                    {formStatus}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
      <div
        className="container-fluid mt-3"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="row">
          <div className="col-md-12">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11815.521627891963!2d78.47160977575463!3d17.33265011195813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbd5654172a41%3A0xd3dbb0c22420002e!2sTaj%20Falaknuma%20Palace%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1681438580149!5m2!1sen!2sin"
              width="100%"
              height="450px"
              style={{ border: "none" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
