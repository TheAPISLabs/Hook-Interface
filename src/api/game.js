import axios from 'axios'

const DefaultUrl = 'https://test.hook.cool/api'
// const DefaultUrl = 'http://devhook.natapp1.cc'
// const DefaultUrl = 'http://192.168.31.23:8898/'

export async function getGameItemsData(params) {
  return await axios.get(`${DefaultUrl}/game/getGameItems`, {
    params,
  })
}
export async function getCommentsDate(params) {
  return await axios.get(`${DefaultUrl}/game/getComments`, {
    params,
  })
}
export async function witeComments(params) {
  return await axios.post(`${DefaultUrl}/game/comment`, params)
}
export async function getGameIconsByGpId(params) {
  return await axios.get(`${DefaultUrl}/game/getGameIconByGpId`, { params })
}
export async function liked(params) {
  return await axios.post(`${DefaultUrl}/game/liked`, params)
}

export async function getGameIcon() {
  return await axios.get(`${DefaultUrl}/game/getGameIcon`)
}
export async function setGameIcon(params) {
  return await axios.post(`${DefaultUrl}/game/userSetGameIcon`, params)
}
export async function getNormal(params) {
  return await axios.get(`${DefaultUrl}/game/normal`, { params })
}

export async function getTwitter() {
  return await axios.get(`${DefaultUrl}/game/socialMedia`)
}
export async function uploadIcon(params) {
  return await axios.post(`${DefaultUrl}/game/uploadGameIcon`, params)
}
export async function commentLiked(params) {
  return await axios.post(`${DefaultUrl}/game/commentLiked`, params)
}
export async function tokenTokentransData(params) {
  return await axios.get(`${DefaultUrl}/game/tokenTokentrans`, { params })
}

export async function delSetGameIcon(params) {
  return await axios.post(`${DefaultUrl}/game/delUserSetGameIcon`, params)
}
export async function getGameType(params) {
  return await axios.get(`${DefaultUrl}/game/getGameType`, params)
}
