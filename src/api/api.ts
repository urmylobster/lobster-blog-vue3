import request from '@/utils/request';
import { InsertDataType } from '@/utils/type';

export function getPostsList(){
  return request({
    url: '/posts/list',
    method: 'GET',
  })
}

export function addPosts(data : InsertDataType) {
  return request({
    url: '/posts/insert',
    method: 'POST',
    data
  })
}