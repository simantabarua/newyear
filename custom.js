$('section').fireworks({ 
    sound: true, 
    opacity: 0.8, 
    width: '100%', 
    height: '100%' 
});
2 / 2


const textElement = document.getElementById("text");
let textIndex = 0;
const messages = ["Happy", "New", "Year","2023"];
setInterval(() => {
  textElement.style.opacity = 0;
  setTimeout(() => {
    textElement.innerHTML = messages[textIndex];
    textElement.style.opacity = 1;
    textElement.style.color = "blue";
    textIndex = (textIndex + 1) % messages.length;
  }, 500);
}, 1000);

<script type="module">

// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyC20NS96bFTBrGO0xLjKF2ctpakZ6dvE80",

  authDomain: "newyar-aaf1b.firebaseapp.com",

  projectId: "newyar-aaf1b",

  storageBucket: "newyar-aaf1b.appspot.com",

  messagingSenderId: "527743328769",

  appId: "1:527743328769:web:e40ce908efbcb2da6d9600",

  measurementId: "G-87J8ETRGQF"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

</script>