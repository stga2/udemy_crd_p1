import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY1e_XvwcCQgsXtt6vWpmHW5P57Xo7dt0",
  authDomain: "crown-clothing-7c054.firebaseapp.com",
  projectId: "crown-clothing-7c054",
  storageBucket: "crown-clothing-7c054.appspot.com",
  messagingSenderId: "135124012699",
  appId: "1:135124012699:web:31bc8d64d4f1e1aaa0403e"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  console.log(userSnapshot.exists());

  if (userSnapshot.exists()) return userDocRef;

  // If not create a new user
  const { email, displayName } = userAuth;
  const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt
    });
  } catch (error) {
    console.log("aaagh", error.message);
  }

  return userDocRef;
};
