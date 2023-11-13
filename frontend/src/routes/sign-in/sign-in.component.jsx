import { Component } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

class SignIn extends Component {
  async logGoogleUser() {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
    console.log('logGoogleUser', { userDocRef });
  }

  async getUserFromRedirect() {
    const response = await getRedirectResult(auth);
    if (!response) {
      return;
    }
    const userDocRef = await createUserDocumentFromAuth(response.user);
    console.log(userDocRef)
  }

  componentDidMount() {
    this.getUserFromRedirect();
  }

  render() {
    return (
      <div>
        <h1>Sign in</h1>
        <button onClick={this.logGoogleUser}>Pop up</button>
        <button onClick={signInWithGoogleRedirect}>Redirect</button>
        <SignUpForm />
      </div>
    );
  }
}

export default SignIn;
