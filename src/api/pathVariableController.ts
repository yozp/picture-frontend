// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** getRegExp GET /api/javabeat/${param0} */
export async function getRegExpUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRegExpUsingGETParams,
  options?: { [key: string]: any }
) {
  const { regexp1: param0, ...queryParams } = params
  return request<string>(`/api/javabeat/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  })
}

/** getLogin GET /api/user/${param1}/roles/${param0} */
export async function getLoginUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getLoginUsingGETParams,
  options?: { [key: string]: any }
) {
  const { roleId: param0, userId: param1, ...queryParams } = params
  return request<string>(`/api/user/${param1}/roles/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  })
}
