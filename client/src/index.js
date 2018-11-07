import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

//apollo client:::
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//styles
//import './index.css';

//custom components:::
import App from './components/App';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';

//create Apollo Client for graphql connection:::
const client = new ApolloClient({
  uri: 'http://localhost:4444/graphql',
});

///stateless functional component::::
const Root = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById('root')
);
