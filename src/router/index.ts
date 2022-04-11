/*
 * @Author: yjh
 * @Date: 2022-04-11 10:29:28
 * @LastEditors: yjh
 * @LastEditTime: 2022-04-11 14:33:20
 * @Description: 请填写简介
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const constantFiles = require.context('./constantModules', true, /\.ts$/)
let constantModules: Array<RouteRecordRaw> = []
constantFiles.keys().forEach((key) => {
  if (key === './index.ts') return
  constantModules = constantModules.concat(constantFiles(key).default)
})

export const constantRoutes: Array<RouteRecordRaw> = [
  ...constantModules
]

const router = createRouter({
	history: createWebHashHistory(),
	routes: constantRoutes
})

export default router
