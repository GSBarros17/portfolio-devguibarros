import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDuC1fjPyhbHBYhDyun2gLiyEufrv6cwK0",
  authDomain: "portfolio-devguibarros.firebaseapp.com",
  projectId: "portfolio-devguibarros",
  storageBucket: "portfolio-devguibarros.appspot.com",
  messagingSenderId: "158493101779",
  appId: "1:158493101779:web:b77cbcf37b11240adcce26",
  measurementId: "G-2KBCW6DNEH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics)