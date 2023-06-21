import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as firebase from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD2VYsIhF5H0jzP7sKxLMggzeu0J3B4J8E",
  authDomain: "controle-de-gastos-c0004.firebaseapp.com",
  projectId: "controle-de-gastos-c0004",
  storageBucket: "controle-de-gastos-c0004.appspot.com",
  messagingSenderId: "581809882348",
  appId: "1:581809882348:web:ac520ea8385e08ac5691c9",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebaseAuth.initializeAuth(app);

firebaseAuth.signInWithEmailAndPassword(
  auth, 'zimmerdani@gmail.com', '123456'
).then(user => console.log(user)
).catch(error => console.log('error', error));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
