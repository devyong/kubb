import client from '@kubb/plugin-client/clients/fetch'
import type { LoginUserQueryResponse, LoginUserQueryParams, LoginUser400 } from './models.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/fetch'

export function getLoginUserUrl() {
  return '/user/login'
}

/**
 * @summary Logs user into the system
 * {@link /user/login}
 */
export async function loginUser(params?: LoginUserQueryParams, config: Partial<RequestConfig> = {}) {
  const res = await client<LoginUserQueryResponse, ResponseErrorConfig<LoginUser400>, unknown>({
    method: 'GET',
    url: getLoginUserUrl().toString(),
    params,
    ...config,
  })
  return res.data
}
