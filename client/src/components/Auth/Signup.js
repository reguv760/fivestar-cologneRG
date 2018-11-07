import React, { Component } from "react";

// graphql mutation:::
import { Mutation } from "react-apollo";
import { SIGNUP_USER_MUTATION } from "../../queries";

// custom component:::
import Error from "../Error";

const initState = {
  username: "",
  email: "",
  password: "",
  passwordConfirmation: ""
};

class Signup extends Component {
  state = {
    ...initState
  };

  clearForm = () => {
    this.setState({
      ...initState
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    // console.log(name, ':', value);

    // declare state variables to init:::
    // /modify state variables using setState:::
    this.setState({
      [name]: value
    });
  };

  // add to form button:::
  handleSubmit = (event, signupUser) => {
    event.preventDefault();
    signupUser().then(data => {
      // console.log(data);
      this.clearForm();
    });
    // console.log('form submitted ' + signupUser);
  };

  validateForm = () => {
    const { username, email, password, passwordConfirmation } = this.state;

    const isInvalid =
      !username || !email || !password || password !== passwordConfirmation;

    return isInvalid;
  };

  render() {
    // destructuring variables:::
    const { username, email, password, passwordConfirmation } = this.state;
    return (
      <div className="App">
        <h2 className="App"> Signup </h2>
        <Mutation
          variables={{ username, email, password }}
          mutation={SIGNUP_USER_MUTATION}
        >
          {/* expression  + render props function */}
          {(signupUser, { data, loading, error }) => {
            if (loading) return <div>Loading...</div>;
            // if (error) return <div>Error {error.message}</div>;
            console.log(data);

            return (
              <form
                className="form"
                onSubmit={event => this.handleSubmit(event, signupUser)}
              >
                <label htmlFor="username">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    onChange={this.handleChange}
                    value={username}
                  />
                  Username{" "}
                </label>{" "}
                <label htmlFor="email">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                    value={email}
                  />
                  Email{" "}
                </label>{" "}
                <label htmlFor="password">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                    value={password}
                  />
                  Password{" "}
                </label>{" "}
                <label htmlFor="passwordConfirmation">
                  <input
                    type="password"
                    name="passwordConfirmation"
                    id="passwordConfirmation"
                    placeholder="Confirm Password"
                    onChange={this.handleChange}
                    value={passwordConfirmation}
                  />
                  Confirm Password{" "}
                </label>{" "}
                <div>
                  <button
                    type="submit"
                    className="button-primary"
                    disabled={loading || this.validateForm()}
                  >
                    {" "}
                    Signup
                  </button>

                  {error && <Error errorMsg={error} />}
                </div>
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default Signup;
