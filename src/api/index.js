const server = 'https://api.theuniworld.net'

export default {
  userLogin: data => fetch(`${server}/token/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }),
}
