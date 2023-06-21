import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { isEmailValid } from './helpers/EmailHelper'
import ValidationError from "./components/validation-error/ValidationError";

function App() {
  const [form, setform] = useState({
    email: {
      hasChanged: false,
      value: "",
    },
    password: {
      hasChanged: false,
      value: "",
    },
  });

  return (
    <main className="centralize">
      <h1>Login</h1>
      <form action="">
        <input type="email" placeholder="Email" value={form.email.value}
          onChange={(event) => setform({ ...form, email: {
              hasChanged: true, value: event.target.value
          }})} 
          data-testid="email"
        />
        <ValidationError
          hasChanged={form.email.hasChanged}
          errorMessage='Email é obrigatório'
          testId='email-required'
          type='required'
          value={form.email.value}
        />
        <ValidationError
          hasChanged={form.email.hasChanged}
          errorMessage='Email é invalido'
          testId='email-invalid'
          type='email'
          value={form.email.value}
        />
        <input type="password" placeholder="Senha" value={form.password.value}
          onChange={(event) => setform({ ...form, password: {
              hasChanged: true, value: event.target.value
          }})} 
          data-testid="password"
        />
        <ValidationError
          hasChanged={form.password.hasChanged}
          errorMessage='Password é obrigatório'
          testId='password-required'
          type='required'
          value={form.password.value}
        />
        {
          form.password.hasChanged && !form.password.value && (
            <div data-testid="password-required"><span>Senha é obrigatório</span></div>
          )
        }
        <button type="button" className="clear" 
          data-testid="recover-password-button"
          disabled={!isEmailValid(form.email.value)}>
          Recuperar Senha
        </button>
        <button type="button" className="solid"
          data-testid="login-button"
          disabled={!isEmailValid(form.email.value) || !form.password.value}>
          Entrar
        </button>
        <button type="button" className="outline">
          Registrar
        </button>
      </form>
    </main>
  );
}

export default App;
