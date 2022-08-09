import { Component } from "react";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpFormFields: {
        displayName: "",
        email: "",
        password: "",
        repeatPassword: ""
      }
    };
  }

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
          <label>Name</label>
          <input
            required
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
          />
          <br />

          <label>Email</label>
          <input
            required
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <br />

          <label>Password</label>
          <input
            required
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <br />

          <label>Repeat password</label>
          <input
            required
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
          />
          <br />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
