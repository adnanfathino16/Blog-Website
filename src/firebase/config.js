import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDsbDn7hvHqSGs5QPFlRS44TRqiK7Gu2Q0",
  authDomain: "vueblog-5b3cb.firebaseapp.com",
  projectId: "vueblog-5b3cb",
  storageBucket: "vueblog-5b3cb.appspot.com",
  messagingSenderId: "346298885206",
  appId: "1:346298885206:web:177862944758c87357c7f7",
};

firebase.initializeApp(firebaseConfig);

const projectFireStore = firebase.firestore();

export { projectFireStore };
