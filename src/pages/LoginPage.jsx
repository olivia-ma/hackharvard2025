import React from "react";
import AuthForm from "../components/AuthForm";

export default function LoginPage() {
  return (
    <div style={{ padding: "4rem", color: "white", textAlign: "center" }}>
      <h1>Login / Sign Up</h1>
      <AuthForm />
    </div>
  );
}
