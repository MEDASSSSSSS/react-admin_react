import store from 'store'

export default{
  //保存
  setData:(key,val)=>{
    store.set(key,val)
  },
  //读取
  getData:(key)=>{
    return store.get(key) || {}
  },
  //删除
  removeData:(key)=>{
    store.remove(key)
  }
}