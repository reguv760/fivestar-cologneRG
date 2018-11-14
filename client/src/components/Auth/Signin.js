import React, { Component } from 'react';

// graphql mutation:::
import { Mutation } from 'react-apollo';
import { SIGNIN_USER_MUTATION } from '../../queries';

// custom component:::
import Error from '../Error';

const initState = {
  username: '',
  password: '',
};

class Signin extends Component {
  state = {
    ...initState,
  };

  clearForm = () => {
    this.setState({
      ...initState,
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    // console.log(name, ':', value);

    // declare state variables to init:::
    // /modify state variables using setState:::
    this.setState({
      [name]: value,
    });
  };

  // add to form button:::
  handleSubmit = (event, signinUser) => {
    event.preventDefault();

    // call sign in function!
    signinUser().then(({ data: { signinUser } }) => {
      // console.log(data.signinUser.token);
      console.log(signinUser);
      // research localStorage, sessions, cookies
      localStorage.setItem('token', signinUser.token);
      this.clearForm();
    });
    // console.log('form submitted ' + signupUser);
  };

  validateForm = () => {
    const { username, password } = this.state;

    const isInvalid = !username || !password;

    return isInvalid;
  };

  render() {
    // destructuring variables:::
    const { username, password } = this.state;
    return (
      <div className="App">
        <h2 className="App"> Signin Form </h2>
        <Mutation
          variables={{ username, password }}
          mutation={SIGNIN_USER_MUTATION}
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
                  Username
                </label>
                <label htmlFor="password">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                    value={password}
                  />
                  Password
                </label>
                <div>
                  <button
                    type="submit"
                    className="button-primary"
                    disabled={loading || this.validateForm()}
                  >
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

export default Signin;
