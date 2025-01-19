import { request } from './request.js'
import qs from 'qs'

// 获取学生信息
export function getStudentInfo(data) {
  return request({
    url: '/student/get',
    method: 'POST',
    data: qs.stringify(data)
  })
}

// 学生成绩管理
export function getStudentScore(data) {
  return request({
    url: '/score/getscore',
    method: 'POST',
    data: qs.stringify(data)
  })
}

