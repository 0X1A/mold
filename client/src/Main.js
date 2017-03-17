import React, {Component} from 'react';
import LoginForm from './LoginForm';
import NavbarContainer from './containers/NavbarContainer';
import PostContainer from './containers/PostContainer';
import PageContainer from './containers/PageContainer';
import FrontPage from './FrontPage';
import Dash from './Dash';
import {
  Route,
} from 'react-router-dom';
import PostCompose from './components/PostCompose';

export default class Main extends Component {
  render() {
    return(
      <div>
        <NavbarContainer />
        <Route exact={true} path="/" component={FrontPage} />
        <Route exact={true} path="/login" component={LoginForm} />
        <Route path="/dash" component={Dash} />
        <Route path="/p/:post_url" component={({ match }) => (<PostContainer params={match.params}/>)} />
        <Route path="/s/:page_url" component={({ match }) => (<PageContainer params={match.params}/>)} />
      </div>
    );
  }
}
