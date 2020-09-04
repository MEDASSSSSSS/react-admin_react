import React, { Component } from 'react'
import './index.less'
import { connect } from 'react-redux'

import {reqWeather} from '../../api/controller/proxyRequest'
import { formatDate } from '../../utils/dateUtils'
import memoryUtils from '../../utils/memoryUtils'
import { withRouter } from 'react-router-dom'
import menuConfig from '../../config/menuConfig'
import storageUtils from '../../utils/storageUtils'
import { Modal } from 'antd'
import LinkBtn from '../linkBtn'

const { confirm } = Modal;
class Header extends Component {
  state = {
    currentTIme: formatDate(Date.now()),
    curWeather:'晴',
    curUserName:memoryUtils.user.username
  }
  
  getTime = ()=>{
    this.timer = setInterval(()=>{
      const currentTIme = formatDate(Date.now());
      this.setState({
        currentTIme
      })
    },1000)
  }

  getWeather = async ()=>{
   const res = await reqWeather();
   this.setState({
    curWeather:res.now.text || '晴',
   })
  }

  getTitle = ()=>{
    const path = this.props.location.pathname;
    let menuLen = menuConfig.length;
    for(var i = 0; i < menuLen ; i++){
      if(menuConfig[i].path === path){
        return menuConfig[i].title;
      }else if(menuConfig[i].children){
        const result = menuConfig[i].children.find(item => item.path === path)
        if(result){
          return result.title;
        }
      }
    }
    return ''
  }

  signOut = ()=>{
    confirm({
      title:'确认退出？',
      onOk:()=>{
        storageUtils.removeData('USER_KEY')
        memoryUtils.user = {}
        this.props.history.replace('/login')
      }
    })
  }

  componentDidMount(){
    this.getWeather();
    this.getTime()
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  render() {
    const title = this.props.headTitle;
    return (
      <div className="my-header">
        <div className="header-top">
          <span>欢迎，{this.state.curUserName}</span>
          <LinkBtn onClick={this.signOut}>退出</LinkBtn>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">{title}</div>
          <div className="header-bottom-right">
            <span>{this.state.currentTIme}</span>
            <span>{this.state.curWeather}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state=>({headTitle:state.headTitle}),)(withRouter(Header))
