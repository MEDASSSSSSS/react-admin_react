import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu} from 'antd'
import './index.less'
import { connect } from 'react-redux'
import { setHeadTitle } from '../../redux/actions'
import menuConfig from '../../config/menuConfig'

const {SubMenu} = Menu;

 class LeftNav extends Component {
  
  getMenuNodes = (menuList)=>{
    const pathKey = this.props.location.pathname.split('/').slice(-1)[0];
    return menuList.map(firstNav => {
      if(firstNav.children && firstNav.children.length){
        const cItem = firstNav.children.find(submenu => submenu.key === pathKey)
        cItem && (this.openKey = [firstNav.key]);
        return (
          <SubMenu
            key={firstNav.key}
            title={(<span>{firstNav.title}</span>)}
          >
            {this.getMenuNodes(firstNav.children)}
          </SubMenu>
        )
      }else{
        return (<Menu.Item key={firstNav.key}>
          <Link to={firstNav.path}  onClick={()=> this.props.setHeadTitle(firstNav.title)}>
            <span>{firstNav.title}</span>
          </Link>
        </Menu.Item>)
      }
    })
  }
  // componentWillMount(){
  //   this.menuNodes = this.getMenuNodes(menuConfig)
  // }
  render() {
    const path = this.props.location.pathname.split('/').slice(-1);
    const menuNodes = this.getMenuNodes(menuConfig)
    const submenuKey = this.openKey;
    return (
      <div className="left-nav">
        <Link to='/' className="left-nav-header">
          <h1>管理后台</h1>
        </Link>
        <Menu
          mode='inline'
          theme='dark'
          defaultOpenKeys={submenuKey}
          selectedKeys={path}
        >
          {menuNodes}
        </Menu>
      </div>
    )
  }
}
// withRouter 会向组件传递三个属性，history、location、match
export default connect(state =>({}),{setHeadTitle})(withRouter(LeftNav))
