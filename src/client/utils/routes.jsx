import React from 'react';
import { Route, Router } from 'react-router-dom';
import SignInView from './../components/SignIn.jsx';
import SignUpView from './../components/SignUp.jsx';
import { GetUser } from './../Utils/api.jsx';
import App from '.././App.jsx';
import history from './history.jsx';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route exact path="/" render={(props) => <App {...props} />} />
            <Route path="/signup" render={(props) =>
            <Sidebar.Pushable as={Segment}>
              <Sidebar width="thin" as={Menu} animation='overlay' direction='top' visible={true} inverted>
                <Menu.Item name='home'>
                  <Icon name='home' />
                  Singles Feed
                </Menu.Item>
                <Menu.Item name='chat'>
                  <Icon name='chat' />
                  My Chats
                </Menu.Item>
              </Sidebar>
               <Sidebar.Pusher>
                <Segment basic>
                  <SignUpView {...props} />
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
            } />
      </div>
    </Router>
  );
}