
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from  'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAg5oK0tiXvquZWJ2Rn9PhQR6UmUtFntp8",
  authDomain: "authentication-52a8b.firebaseapp.com",
  projectId: "authentication-52a8b",
  storageBucket: "authentication-52a8b.appspot.com",
  messagingSenderId: "655185439515",
  appId: "1:655185439515:web:c7680a6f624e1209c941be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result)=>{
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("profilePic", profilePic)
    }).catch(error => console.log(error))
}