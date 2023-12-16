import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcDToxBVRnpZ4313h8vpogCX1Dv06UGok",
  authDomain: "my-bank-auth.firebaseapp.com",
  projectId: "my-bank-auth",
  storageBucket: "my-bank-auth.appspot.com",
  messagingSenderId: "1039720325732",
  appId: "1:1039720325732:web:a048d5b10bc5bf36593571",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
