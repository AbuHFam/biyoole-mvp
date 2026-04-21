import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDajsafysp-D5o7e4x03q9shL4lxMff63A",
  authDomain: "biyoole-mvp.firebaseapp.com",
  projectId: "biyoole-mvp",
  storageBucket: "biyoole-mvp.firebasestorage.app",
  messagingSenderId: "531213578286",
  appId: "1:531213578286:web:7a703a8eb6bc8888dbafbf"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
