import React from "react";
import ContactForm from "../components/ContactForm";
import PageNavigation from "../components/PageNavigation";

function Contact() {
  return (
    <main>
      <PageNavigation pageName="contact" />
      <ContactForm />
    </main>
  );
}

export default Contact;
