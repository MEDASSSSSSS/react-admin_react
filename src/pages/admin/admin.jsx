import React, { Component } from 'react'
import {Redirect,Route,Switch} from 'react-router-dom'
import memoryUtils from "../../utils/memoryUtils"
import {Layout} from 'antd'
import Header from '../../components/header'
import LeftNav from '../../components/left-nav'

import Home from '../home/home'
import Category from '../category/category'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
import Produce from '../product/product'
import Role from '../role/role'
import User from '../user/user'


const {Sider,Footer,Content} = Layout


export default class Admin extends Component {
  render() {
    const user = memoryUtils.user;
    if(!user || !user.username){
      return (<Redirect to='/login'/>)
    }
    return (
      <Layout style={{height:'100%'}}>
        <Sider>
          <LeftNav></LeftNav>
        </Sider>
        <Layout>
          <Header>header</Header>
          <Content style={{margin:'20px',backgroundColor:'#fff'}}>
            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/category" component={Category}></Route>
              <Route path="/product" component={Produce}></Route>
              <Route path="/role" component={Role}></Route>
              <Route path="/user" component={User}></Route>
              <Route path="/charts/bar" component={Bar}></Route>
              <Route path="/charts/line" component={Line}></Route>
              <Route path="/charts/pie" component={Pie}></Route>
              <Redirect to="/home"></Redirect>
            </Switch>
          </Content>
          <Footer style={{textAlign:'center',color:"#ccc"}}>footer</Footer>
        </Layout>
      </Layout>
    )
  }
}
