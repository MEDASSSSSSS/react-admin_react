import storeUtils from '../utils/storageUtils'
import { combineReducers } from 'redux'


const initUser = storeUtils.getData('USER_KEY')

function user(state=initUser,action){
  switch(action.type){
    default:
      return state
  }
}
const initHeadTitle = '首页'

function headTitle(state=initHeadTitle,action){
  switch(action.type){
    default:
      return state
  }
}


export default combineReducers({
  user,
  headTitle
})