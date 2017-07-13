import { server } from './constants'

export const getByToken = url => token => fetch(`${server}${url}`, {
  method: 'GET',
  headers: { Authorization: `token ${token}` },
})

export const getWithoutToken = url => fetch(`${server}${url}`)


export const putByToken = url => data => token => fetch(`${server}${url}`, {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `token ${token}`,
  },
  body: JSON.stringify(data),
})

export const postByToken = url => data => token => fetch(`${server}${url}`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `token ${token}`,
  },
  body: JSON.stringify(data),
})

export const postWithoutToken = url => data => fetch(`${server}${url}`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})

export const wsByToken = url => token => new WebSocket(`${url}?token=${token}`)
