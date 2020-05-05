import {request} from "./request"
// 为什么要这么封装？对首页的请求做统一的管理，降低请求跟首页的耦合度，方便管理首页的请求
// home.js做到了请求跟组件的中间层    n个request -> home.js <- 组件
export function getHomeMultiData(){
  return request({
    url:"/home/multidata"
  })
}

