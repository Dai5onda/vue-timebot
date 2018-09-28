import request from '@/utils/request'
import qs from 'qs'

export function fetchList(query) {
  return request({
    url: query,
    method: 'get',
    params: ''
  })
}
export function fetchEntity(query, id) {
  return request({
    url: `${query}/${id}`,
    method: 'get',
    params: ''
  })
}
export function fetchAllEntities(query) {
  return request({
    url: `${query}/all`,
    method: 'get',
    params: ''
  })
}
export function createEntity(row, query) {
  return request({
    url: query,
    method: 'post',
    params: row,
    paramsSerializer: params => qs.stringify(row, { arrayFormat: 'brackets' })
  })
}
export function deleteEntity(row, query) {
  return request({
    url: `${query}/${row.id}`,
    method: 'delete',
    params: row,
    paramsSerializer: params => qs.stringify(row, { arrayFormat: 'brackets' })
  })
}

export function updateEntity(row, query) {
  return request({
    url: `${query}/${row.id}`,
    method: 'put',
    params: row,
    paramsSerializer: params => qs.stringify(row, { arrayFormat: 'brackets' })
  })
}
