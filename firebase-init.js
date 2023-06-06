var xhr1 = new XMLHttpRequest();
xhr1.open('GET', 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js', true);
xhr1.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = this.responseText;
    document.head.appendChild(script);
  }
};
xhr1.send();

var xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth-compat.js', true);
xhr2.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = this.responseText;
    document.head.appendChild(script);
  }
};
xhr2.send();

// 
const firebaseConfig = {
  apiKey: "AIzaSyD2VYsIhF5H0jzP7sKxLMggzeu0J3B4J8E",
  authDomain: "controle-de-gastos-c0004.firebaseapp.com",
  projectId: "controle-de-gastos-c0004",
  storageBucket: "controle-de-gastos-c0004.appspot.com",
  messagingSenderId: "581809882348",
  appId: "1:581809882348:web:ac520ea8385e08ac5691c9"
};
firebase.initializeApp(firebaseConfig);