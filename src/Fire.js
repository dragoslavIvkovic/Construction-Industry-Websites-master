import firebase from "firebase/app";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyBfJ7WAVPuj2RLg8nTurrUIxj4e6Qxyoi0",
  authDomain: "construction-website-a04cc.firebaseapp.com",
  projectId: "construction-website-a04cc",
  storageBucket: "construction-website-a04cc.appspot.com",
  messagingSenderId: "557020909561",
  appId: "1:557020909561:web:a9397c39d4e66beef1f728",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export const auth = fire.auth();
export default fire;
