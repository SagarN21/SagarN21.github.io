import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";

import Application from "./Form";

const Contact = () => {


  return (
    <>
      <section className="nav-link contact" id="contact">
        <div className="nav-link-contact">
          <h2>
            Contact <span>Me!</span>
          </h2>
          <h4>
            Talent wins games, but teamwork and intelligence win championships.
          </h4>
          <p>
            Fill the form to connect if any query{" "}
            <i className="fas fa-smile"></i>
          </p>
          <div className="list">
            <li id="contact-phone">
              <a
                href="https://api.whatsapp.com/send?phone=+918971800357"
                target="_blank">
                +91-7892176780
              </a>
            </li>
            <li>
              <a
                href="mailto:sagarnaik597@gmail.com"
                id="contact-email"
                target="_blank">
                sagarnaik597@gmail.com{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sagar-naik-96b59b129/"
                id="contact-linkedin">
                {" "}
                Linkedin : Sagar Naik
              </a>
            </li>
          </div>
          <div className="contact-icons">
            <a
              id="contact-github"
              href="https://github.com/SagarN21"
              target="_blank">
              <i>
                <AiFillGithub />
              </i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+918971800357"
              target="_blank">
              <i>
                <AiOutlineWhatsApp />
              </i>
            </a>
            <a
              id="contact-linkedin"
              href="https://www.linkedin.com/in/ankush-kumar-227058171/"
              target="_blank">
              <i>
                <BsLinkedin />
              </i>
            </a>
          </div>
        </div>

        <div className="contact-form">
          
            <Application/>
        </div>
      </section>
    </>
  );
};

export default Contact;