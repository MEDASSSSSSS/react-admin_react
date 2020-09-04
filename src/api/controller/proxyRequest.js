import request from '../request'
import { message } from 'antd'

export const reqWeather = (district_id=222405) => {
  const ak = 'OGQfBIGOl2Wp6Y5ifZbtYZFYg7Q1AU2i'
  const url = `/api/weather/v1/?district_id=${district_id}&data_type=all&ak=${ak}`
  const resPro = new Promise((reslove,reject)=>{
    request(url).then((res)=>{
      if(res.data.status === 0){
        reslove(res.data.result)
      }else{
        message.err(res.data.message)
      }
    }).catch((err)=>{
      message.err(err.message)
    })
  })
  return resPro
}
