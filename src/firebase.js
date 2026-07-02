import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVsatg8coAg0QB6ZfEz_yP0LTFRaTNXXI",
  authDomain: "device-streaming-b8e91047.firebaseapp.com",
  projectId: "device-streaming-b8e91047",
  storageBucket: "device-streaming-b8e91047.firebasestorage.app",
  messagingSenderId: "766878321127",
  appId: "1:766878321127:web:64a00e061be6458de19542"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
