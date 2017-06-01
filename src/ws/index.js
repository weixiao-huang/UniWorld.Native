
export default{
  wsByToken: url => token => new WebSocket(url+'?token='+token)
}


