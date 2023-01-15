import React from "react";
import LoginForm from "../components/LoginForm";
import PageNavigation from "../components/PageNavigation";

function Login() {
  return (
    <main>
      <PageNavigation pageName="login" />
      <LoginForm />
    </main>
  );
}

export default Login;
