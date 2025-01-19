import { request } from '@/network/request';

export function loginSub(data) {
  return request({
    url: '/user/login',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }, // 设置请求头为 JSON
    data: JSON.stringify(data), // 将数据序列化为 JSON 格式
  });
}

export function registerSub(data) {
  return request({
    url: '/user/register',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }, // 设置请求头为 JSON
    data: JSON.stringify(data), // 将数据序列化为 JSON 格式
  });
}

export function updatepwd(data) {
  return request({
    url: '/updatepwd',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }, // 设置请求头为 JSON
    data: JSON.stringify(data), // 将数据序列化为 JSON 格式
  });
}