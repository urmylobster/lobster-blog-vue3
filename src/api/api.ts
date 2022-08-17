import request from '@/utils/request';

export function getPostsList() {
  return request({
    url: 'list',
    method: 'get',
  })
}