import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
/* import { getAnalytics } from "firebase/analytics";
 */
const firebaseConfig = {
  apiKey: "AIzaSyD25nX4Nm2COrkE-Tj88ZrNrenBnEEf2vQ",
  authDomain: "teleyverdon.firebaseapp.com",
  projectId: "teleyverdon",
  storageBucket: "teleyverdon.appspot.com",
  messagingSenderId: "842044347507",
  appId: "1:842044347507:web:93aa1d936c0da2372b8606",
  measurementId: "G-R6K4JS9WRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
/* const analytics = getAnalytics(app); */
