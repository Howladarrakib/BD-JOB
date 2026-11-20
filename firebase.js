
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
  getAuth,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyArqUadtFApeblIJGaU5aPHASkcvrKNTJc",
  authDomain: "bd-job-85768.firebaseapp.com",
  projectId: "bd-job-85768",
  storageBucket: "bd-job-85768.firebasestorage.app",
  messagingSenderId: "1028353082550",
  appId: "1:1028353082550:web:827629bf347e2e409cd217"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const authReady = setPersistence(
  auth,
  browserLocalPersistence
);
