import React from "react";
import PageNavigation from "../components/PageNavigation";
import RegisterForm from "../components/RegisterForm";

function Register() {
  return (
    <main>
      <PageNavigation pageName="login" />
      <RegisterForm />
    </main>
  );
}

export default Register;
