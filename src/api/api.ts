import request from '@/utils/request';

export function getPostsList(){
  return request({
    url: '/posts/list',
    method: 'get',
  })
}