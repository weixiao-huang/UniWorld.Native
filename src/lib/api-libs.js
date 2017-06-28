import { handleApiErrors } from './api-errors'

export const baseApi = (apiFunc, id, token) => apiFunc(id)(token)
  .then(handleApiErrors)
