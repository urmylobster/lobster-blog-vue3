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

export function getPostById(data : any) {
  return request({
    url: `/posts/getById/${data.id}`,
    method: 'GET',
  })
}

export function updatePosts(data : InsertDataType) {
  return request({
    url: '/posts/update',
    method: 'POST',
    data
  })
}

export function searchPosts(data : object) {
  return request({
    url: '/posts/search',
    method: 'GET',
    params: data
  })
}