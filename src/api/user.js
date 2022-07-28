import axios from 'axios'

const DefaultUrl = 'https://test.hook.cool/api'
// const DefaultUrl = 'https://192.168.31.23:8898'
// const DefaultUrl = 'http://devhook.natapp1.cc/'
export async function register(params) {
  return await axios.post(`${DefaultUrl}/user/register`, {
    ...params,
  })
}
export async function getUser(params, token) {
  return await axios.get(`${DefaultUrl}/user/getUser`, {
    params,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
}
export async function setUserAddress(params) {
  return await axios.post(`${DefaultUrl}/user/setAddress`, {
    ...params,
  })
}
export async function setUpdataLoginPwdByCode(params) {
  return await axios.post(`${DefaultUrl}/user/updataLoginPwdByCode`, {
    ...params,
  })
}
export async function setUpdataLoginPwdByPwd(params) {
  return await axios.post(`${DefaultUrl}/user/updataLoginPwdByPwd`, {
    ...params,
  })
}
export async function setUpdataUser(params) {
  return await axios.post(`${DefaultUrl}/user/updataUser`, {
    ...params,
  })
}
export async function isLogin(token) {
  return await axios.get(`${DefaultUrl}/user/isLogin`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
}

export async function loginByCode(params) {
  return await axios.post(`${DefaultUrl}/user/loginByCode`, {
    ...params,
  })
}

export async function loginByPwd(params) {
  return await axios.post(`${DefaultUrl}/user/loginByPwd`, {
    ...params,
  })
}
export async function logout(params, token) {
  return await axios.post(
    `${DefaultUrl}/user/logout`,
    {
      ...params,
    },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  )
}
export async function emailCode(params) {
  return await axios.post(`${DefaultUrl}/email/setEmailCode`, {
    ...params,
  })
}

export async function forgotPassword(params) {
  return await axios.post(`${DefaultUrl}/user/forgotPassword`, {
    ...params,
  })
}
export async function resetPassword(params) {
  return await axios.post(`${DefaultUrl}/user/resetPassword`, {
    ...params,
  })
}
