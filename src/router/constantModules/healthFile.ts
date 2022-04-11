/*
 * @Author: yjh
 * @Date: 2022-04-11 10:34:47
 * @LastEditors: yjh
 * @LastEditTime: 2022-04-11 10:36:22
 * @Description: 请填写简介
 */
import { RouteRecordRaw } from 'vue-router'
const HealthFileRouter: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "healthFile" */'@/views/healthFile')
  }
]
export default HealthFileRouter
