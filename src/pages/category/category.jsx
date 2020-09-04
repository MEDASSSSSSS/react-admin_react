import React, { Component } from 'react'
import {Button,Card, Table} from 'antd'
import {PlusOutlined} from '@ant-design/icons';
import LinkBtn from '../../components/linkBtn'

import './category.less'

export default class Category extends Component {
  render() {
    const btn = (
      <Button type="primary">
        <PlusOutlined />
        添加
      </Button>
    )
    const columns = [
      {
        title:'分类名称',
        dataIndex:'categoryName',
        key:'categoryName'
      },
      {
        title:'操作',
        dataIndex:'actions',
        key:'actions',
        width:250,
        render:()=>
          (
          <span>
            <LinkBtn>修改分类</LinkBtn>
            <LinkBtn>查看子分类</LinkBtn>
          </span>
          )
        
      },
    ]
    const dataSource = [
      {
        key:1,
        categoryName:'测试1',
        _id:'drewqfvdsgefdsa',
      },
      {
        key:2,
        categoryName:'测试1',
        _id:'drewqfvdsgefdsa',
      },
    ]
    return (
      <div className="category">
        <Card 
          title="一级分类" 
          extra={btn} style={{ width: '100%',height:'100%' }}
          bodyStyle={{height:'100%'}}>
          <Table
            style={{ height:'100%' }}
            bordered
            columns={columns}
            dataSource={dataSource}
          >
          </Table>
        </Card>
      </div>
    )
  }
}
