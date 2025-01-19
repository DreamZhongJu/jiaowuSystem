import { request } from './request.js'
import qs from 'qs'

// 获取学生列表
export function StudentManageList() {
  return request({
    url: '/student/get',
    method: 'GET'
  })
}

// 获取教师列表
export function TeacherManageList(data) {
  return request({
    url: '/teacher/get',
    method: 'GET',
    data: qs.stringify(data)
  })
}

// 获取课程列表
export function CourseManageList(data) {
  return request({
    url: '/course/get',
    method: 'GET',
    data: qs.stringify(data)
  })
}

// 获取专业列表
export function MajorManageList(data) {
  return request({
    url: '/major/get',
    method: 'GET',
    data: qs.stringify(data)
  })
}

// 获取账号信息
export function AccountManageList(data) {
  return request({
    url: '/account/get',
    method: 'POST',
    data: qs.stringify(data)
  })
}
// 获取管理员信息
export function getAdminInfo(data) {
  return request({
    url: '/admin/getinfo',
    method: 'POST',
    data: qs.stringify(data)
  })
}
