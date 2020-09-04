import React, { Component } from 'react'
import "./login.less"
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import memoryUtils from "../../utils/memoryUtils"
import storeUtils from "../../utils/storageUtils"
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  

  layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  
  onSubmit = values => {
    console.log( values);
    memoryUtils.user = values;
    storeUtils.setData('USER_KEY',values)
    this.props.history.replace('/')
  }

  onValidateFaild = value => {
    message.error(value)
  }

  render() {
    if(memoryUtils.user && memoryUtils.user.username){
      return <Redirect to='/' />
    }
    return (
      <div className="login">
        <header className="login-header">
          <h1>后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登录</h2>
          <Form
            onFinish={this.onSubmit}
          >
            <Form.Item
              validateFirst={true}
              name="username"
              rules={[{ required: true, message: '请输入用户名!' },
              {type:'string',min:4,message:'不可少于于4位'},
              {type:'string',max:12,message:'不可多于于12位'},
              {pattern:/^[0-9a-zA-Z_]+$/g,message:'只能包含英文数字及下划线'}]}
            >
              <Input 
                prefix={<UserOutlined style={{color:'rgba(0,0,0,25'}}/>} 
                placeholder="用户名"
              />
            </Form.Item>

            <Form.Item
              name="password"
              validateFirst={true}
              rules={[{ required: true, message: '请输入密码!' },
            {type:'string',min:4,message:'不可少于于4位'},
            {type:'string',max:12,message:'不可多于于12位'},
            {pattern:/^[0-9a-zA-Z_]+$/g,message:'只能包含英文数字及下划线'}]}
            >
              <Input
                type="password" 
                prefix={<UnlockOutlined style={{color:'rgba(0,0,0,25'}}/>} 
                placeholder="密码"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}