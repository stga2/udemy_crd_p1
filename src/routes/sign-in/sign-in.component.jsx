import { Component } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

class SignIn extends Component {
  async logGoogleUser() {
    const response = await signInWithGooglePopup();
    createUserDocumentFromAuth(response.user);
    console.log(response);
  }

  render() {
    return (
      <div>
        <h1>Sign in</h1>
        <button onClick={this.logGoogleUser}>Click me</button>
      </div>
    );
  }
}

export default SignIn;
