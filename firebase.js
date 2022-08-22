// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaTr0SYQGj8N0aeTsmSN_v-23n4nYQvEU",
  authDomain: "td-diary.firebaseapp.com",
  projectId: "td-diary",
  storageBucket: "td-diary.appspot.com",
  messagingSenderId: "994059338588",
  appId: "1:994059338588:web:3913755ef57ce7cb97f799",
  measurementId: "G-R0Z7D40L3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// ブラウザのみで動作させる
if(typeof window !== 'undefined'){
  const analytics = getAnalytics(app);
}