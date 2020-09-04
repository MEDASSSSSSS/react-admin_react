import React from 'react';
import logo from './logo.svg';
import {Button,message} from 'antd'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'


class App extends React.Component {


  handleClick = () =>{
    message.success('success')
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/" component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
