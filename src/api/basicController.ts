// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** hello GET /api/hello */
export async function helloUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.helloUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<string>('/api/hello', {
    method: 'GET',
    params: {
      // name has a default value: unknown user
      name: 'unknown user',
      ...params,
    },
    ...(options || {}),
  })
}

/** hello PUT /api/hello */
export async function helloUsingPut(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.helloUsingPUTParams,
  options?: { [key: string]: any }
) {
  return request<string>('/api/hello', {
    method: 'PUT',
    params: {
      // name has a default value: unknown user
      name: 'unknown user',
      ...params,
    },
    ...(options || {}),
  })
}

/** hello POST /api/hello */
export async function helloUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.helloUsingPOSTParams,
  options?: { [key: string]: any }
) {
  return request<string>('/api/hello', {
    method: 'POST',
    params: {
      // name has a default value: unknown user
      name: 'unknown user',
      ...params,
    },
    ...(options || {}),
  })
}

/** hello DELETE /api/hello */
export async function helloUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.helloUsingDELETEParams,
  options?: { [key: string]: any }
) {
  return request<string>('/api/hello', {
    method: 'DELETE',
    params: {
      // name has a default value: unknown user
      name: 'unknown user',
      ...params,
    },
    ...(options || {}),
  })
}

/** hello PATCH /api/hello */
export async function helloUsingPatch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.helloUsingPATCHParams,
  options?: { [key: string]: any }
) {
  return request<string>('/api/hello', {
    method: 'PATCH',
    params: {
      // name has a default value: unknown user
      name: 'unknown user',
      ...params,
    },
    ...(options || {}),
  })
}

/** html GET /api/html */
export async function htmlUsingGet(options?: { [key: string]: any }) {
  return request<string>('/api/html', {
    method: 'GET',
    ...(options || {}),
  })
}

/** html PUT /api/html */
export async function htmlUsingPut(options?: { [key: string]: any }) {
  return request<string>('/api/html', {
    method: 'PUT',
    ...(options || {}),
  })
}

/** html POST /api/html */
export async function htmlUsingPost(options?: { [key: string]: any }) {
  return request<string>('/api/html', {
    method: 'POST',
    ...(options || {}),
  })
}

/** html DELETE /api/html */
export async function htmlUsingDelete(options?: { [key: string]: any }) {
  return request<string>('/api/html', {
    method: 'DELETE',
    ...(options || {}),
  })
}

/** html PATCH /api/html */
export async function htmlUsingPatch(options?: { [key: string]: any }) {
  return request<string>('/api/html', {
    method: 'PATCH',
    ...(options || {}),
  })
}

/** saveUser GET /api/save_user */
export async function saveUserUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.saveUserUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<string>('/api/save_user', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** saveUser PUT /api/save_user */
export async function saveUserUsingPut(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.saveUserUsingPUTParams,
  options?: { [key: string]: any }
) {
  return request<string>('/api/save_user', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** saveUser POST /api/save_user */
export async function saveUserUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.saveUserUsingPOSTParams,
  options?: { [key: string]: any }
) {
  return request<string>('/api/save_user', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** saveUser DELETE /api/save_user */
export async function saveUserUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.saveUserUsingDELETEParams,
  options?: { [key: string]: any }
) {
  return request<string>('/api/save_user', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** saveUser PATCH /api/save_user */
export async function saveUserUsingPatch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.saveUserUsingPATCHParams,
  options?: { [key: string]: any }
) {
  return request<string>('/api/save_user', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** user GET /api/user */
export async function userUsingGet(options?: { [key: string]: any }) {
  return request<API.User>('/api/user', {
    method: 'GET',
    ...(options || {}),
  })
}

/** user PUT /api/user */
export async function userUsingPut(options?: { [key: string]: any }) {
  return request<API.User>('/api/user', {
    method: 'PUT',
    ...(options || {}),
  })
}

/** user POST /api/user */
export async function userUsingPost(options?: { [key: string]: any }) {
  return request<API.User>('/api/user', {
    method: 'POST',
    ...(options || {}),
  })
}

/** user DELETE /api/user */
export async function userUsingDelete(options?: { [key: string]: any }) {
  return request<API.User>('/api/user', {
    method: 'DELETE',
    ...(options || {}),
  })
}

/** user PATCH /api/user */
export async function userUsingPatch(options?: { [key: string]: any }) {
  return request<API.User>('/api/user', {
    method: 'PATCH',
    ...(options || {}),
  })
}
