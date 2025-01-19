import { request } from './request.js'
import qs from 'qs'

// 获取教师信息
export function getTeacherInfo(data) {
  return request({
    url: '/teacher/get',
    method: 'POST',
    data: qs.stringify(data)
  })
}

// 课程管理
export function getStudentCourse(data) {
  return request({
    url: '/course/getcourse',
    method: 'POST',
    data: qs.stringify(data)
  })
}

// 课程成绩统计
export function getCountScore(data) {
  return request({
    url: '/score/countscore',
    method: 'POST',
    data: qs.stringify(data)
  })
}

// 成绩修改
export function updateScore(data) {
  return request({
    url: '/score/updatescore',
    method: 'POST',
    data: qs.stringify(data)
  })
}
