import { Component } from "react";
import {
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpFormFields: {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {
      displayName,
      email,
      password,
      confirmPassword
    } = this.state.signUpFormFields;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const { user } = userCredential;
      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("User already exists");
      }
      console.log("user creation encountered error", error);
    }
  };

  handleChange = (event) => {
    // debugger;
    const { name, value } = event.target;
    this.setState({
      signUpFormFields: { ...this.state.signUpFormFields, [name]: value }
    });
  };

  render() {
    const {
      displayName,

      email,
      password,
      confirmPassword
    } = this.state.signUpFormFields;

    console.log(this.state.signUpFormFields);

    return (
      <div>
        <form>
          <FormInput
            label="Name"
            required
            name="displayName"
            value={displayName}
            type="text"
            onChange={this.handleChange}
          />

          <FormInput
            label="Email"
            required
            name="email"
            value={email}
            type="email"
            onChange={this.handleChange}
          />

          <FormInput
            label="Password"
            required
            name="password"
            value={password}
            type="password"
            onChange={this.handleChange}
          />

          <FormInput
            label="Repeat password"
            required
            name="confirmPassword"
            value={confirmPassword}
            type="password"
            onChange={this.handleChange}
          />

          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
