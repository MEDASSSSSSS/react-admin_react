import request from '../request'

export function login (username,password){
  return request('/login',{username,password})
}