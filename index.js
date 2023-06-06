firebase.auth().onAuthStateChanged(user => {
  if (user) {
    window.location.href = "pages/home/home.html";
  }
});

function onChangeEmail(){
  toggleEmailErrors();
  toggleButtonDisable();
}

function onChangePassword() {
  toggleButtonDisable();
  togglePasswordErrors();
}

function login() {
  showLoading();
  firebase.auth().signInWithEmailAndPassword(form.email().value, form.password().value).then(response => {
    hideLoading();
    window.location.href = "pages/home/home.html";
  }).catch(error => {
    hideLoading();
    alert(getErrorMessage(error));
  });
}

function getErrorMessage(error) {
  if (error.code == "auth/user-not-found") {
    return "Usuário não cadastrado";
  } else if (error.code == "auth/wrong-password"){
    return "Usuário ou Senha inválidos";
  }
  return error.message;
}

function register() {
  window.location.href = "pages/register/register.html"
}

function recoverPassword() {
  showLoading();
  firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
    hideLoading();
    alert('Email enviado com sucesso');
  }).catch(error => {
    hideLoading();
    alert(getErrorMessage(error));
  })
}

function isEmailValid(){
  const email = form.email().value;
  if (!email) {
    return false
  }
  return validateEmail(email);
}

function toggleEmailErrors() {
  const email = form.email().value;
  form.emailRequiredError().style.display = email ? "none" : "block";

  if (validateEmail(email)){
    form.emailInvalidError().style.display = email ? "none" : "block";
  }
}

function togglePasswordErrors() {
  const password = form.password().value;
  form.passwordRequiredError().style.display = password ? "none" : "block";

  if (!isPasswordValid) {
    form.passwordInvalidError().style.display = password ? "none" : "block";
  }
}

function toggleButtonDisable() {
  const emailValid = isEmailValid();
  form.recoverPassword().disabled = !emailValid;

  const passwordValid = isPasswordValid();
  form.loginButton().disabled = !emailValid || !passwordValid;
}

function isPasswordValid(){
  const password = form.password().value;
  if (!password) {
    return false
  }
  return true;
}

const form = {
  email: () => document.getElementById('email'),
  emailInvalidError: () => document.getElementById('email-invalid-error'),
  emailRequiredError: () => document.getElementById('email-required-error'),
  password: () => document.getElementById('password'),
  passwordInvalidError: () => document.getElementById('password-invalid-error'),
  passwordRequiredError: () => document.getElementById('password-required-error'),
  recoverPassword: () => document.getElementById('recover-password-button'),
  loginButton: () => document.getElementById('login-button')
}