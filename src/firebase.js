// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCs0DcpYQnOp2ia6MfQHGoEV1F_FdauojM",
    authDomain: "purplepeople-6e1ad.firebaseapp.com",
    projectId: "purplepeople-6e1ad",
    storageBucket: "purplepeople-6e1ad.appspot.com",
    messagingSenderId: "1082836138594",
    appId: "1:1082836138594:web:4938e0dd4220e2b6a76f3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
