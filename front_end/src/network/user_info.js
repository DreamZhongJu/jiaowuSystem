import { request } from "@/network/request";

export function getUserInfo(userId) {
    return request({
        url: '/user/search', // 不再使用路径参数
        method: 'GET',
        params: { userId }, // 使用查询参数
    });
}

export function updateUserInfo(userId, data) {
    return request({
        url: `/user/edit/${userId}`, // 将 userId 放入路径中
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }, // 设置请求头为 JSON
        data: JSON.stringify(data), // 将数据序列化为 JSON 格式
    });
}

export function getUserRole(id) {
    return request({
        url: `/role/search`, // 将 userId 放入路径中
        method: 'GET',
        params: { id }, // 使用查询参数
    });
}