import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import PropTypes from 'prop-types';

// apollo client:::
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './assets/scss/main.scss';

// custom components:::
import App from './components/App';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';
import StyleGuide from './components/StyleGuide';
import withSession from './components/withSession';

// create Apollo Client for graphql connection:::
const client = new ApolloClient({
  uri: 'http://localhost:4444/graphql',
  fetchOptions: {
    credentials: 'include',
  },
  request: operation => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token,
      },
    });
  },
  onError: ({ networkError }) => {
    if (networkError) {
      console.log('Network Error', networkError);

      // check for certain server error codes
      // if (networkError.statusCode === 401) {
      // localStorage.setItem('token', '');
      // or remove item
      //  localStorage.removeItem('token');
      // }
    }
  },
});

// stateless functional component::::
const Root = ({ refetch }) => (
  <Router>
    <div id="wrapper">
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/signin" render={() => <Signin refetch={refetch} />} />
        <Route path="/signup" render={() => <Signup refetch={refetch} />} />
        <Route path="/styleguide" component={StyleGuide} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
);

// stateless propType used by Root:::
// { refetch } is based to Route and into signin + signup components:::

Root.propTypes = {
  refetch: PropTypes.func,
};

Root.defaultProps = {
  refetch: undefined,
};

const RootWithSession = withSession(Root);

ReactDOM.render(
  <ApolloProvider client={client}>
    <RootWithSession />
  </ApolloProvider>,
  document.getElementById('root')
);
