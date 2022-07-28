import {
  getCmcData,
  getFigureData,
  getGlassnodeFigureData,
  getMarketCapitalization,
  getSearchData,
  getSearchHeat,
  getTag,
  getTxData,
  setSearchHeat,
} from '../api/dashbord'
import {
  commentLiked,
  delSetGameIcon,
  getCommentsDate,
  getGameIcon,
  getGameIconsByGpId,
  getGameItemsData,
  getGameType,
  getNormal,
  getTwitter,
  liked,
  setGameIcon,
  tokenTokentransData,
  uploadIcon,
  witeComments,
} from '../api/game'
import {
  emailCode,
  forgotPassword,
  getUser,
  isLogin,
  loginByCode,
  loginByPwd,
  logout,
  register,
  resetPassword,
  setUpdataLoginPwdByCode,
  setUpdataLoginPwdByPwd,
  setUpdataUser,
  setUserAddress,
} from '../api/user'
// overview
export const getMarketCapAndVolume = (type) => {
  return getMarketCapitalization({ type })
}
export const getEthAndBtcData = (methods, type) => {
  return getGlassnodeFigureData({ methods, type })
}
export const getGraphData = (time) => {
  return getFigureData({ time })
}

export const getSearchRank = (limit) => {
  return getSearchHeat({ limit })
}
export const getCmcDatas = (limit, start, type) => {
  return getCmcData({ limit, start, type })
}

// track

export const getSearchDatas = (address) => {
  return getSearchData({ address })
}

export const getTxDatas = (address, limit, start) => {
  return getTxData({ address, limit, start })
}
export const setSearchHeats = (searchName) => {
  return setSearchHeat(searchName)
}

// user

export const userRegister = (email, password, code, userName) => {
  return register({ email, password, code, userName })
}
export const getUserInfo = (email, token) => {
  return getUser({ email }, token)
}
export const setAddress = (uid, address) => {
  return setUserAddress({ uid, address })
}
export const updataLoginPwdByCode = (uid, code, passwordNew) => {
  return setUpdataLoginPwdByCode({ uid, code, passwordNew })
}
export const updataLoginPwdByPwd = (uid, password, passwordNew) => {
  return setUpdataLoginPwdByPwd({ uid, password, passwordNew })
}
export const UpdataUser = (uId) => {
  return setUpdataUser({ uId })
}
export const userIsLogin = (token) => {
  return isLogin(token)
}
export const userLoginByCode = (email, code) => {
  return loginByCode({ email, code })
}
export const userLoginByPwd = (email, password) => {
  return loginByPwd({ email, password })
}
export const userLogout = (uId, token) => {
  return logout({ uId }, token)
}
export const sendCode = (email) => {
  return emailCode({ email })
}
export const forgotPwd = (email) => {
  return forgotPassword({ email })
}
export const getTags = (address) => {
  return getTag({ address })
}
//game
export const getGameItemsDatas = (page, pageSize, sortField) => {
  return getGameItemsData({ page, pageSize, sortField })
}
export const getComments = (gpId, page, pageSize, sort, sortField, uId) => {
  return getCommentsDate({ gpId, page, pageSize, sort, sortField, uId })
}
export const getGameIcons = () => {
  return getGameIcon()
}
export const writeComment = (content, gpId, grId, parentId, rootParentId, time, uid) => {
  return witeComments({
    content,
    gpId,
    grId,
    parentId,
    rootParentId,
    time,
    uid,
  })
}
export const getGameIconByGpId = (gpId, uId) => {
  return getGameIconsByGpId({ gpId, uId })
}

export const likedStatus = (likedGpId, likedUserId, status) => {
  return liked({ likedGpId, likedUserId, status })
}

export const getTwitterList = () => {
  return getTwitter()
}
export const userSetGameIcon = (giId, giuId, gpId, uid) => {
  return setGameIcon({ giId, giuId, gpId, uid })
}
export const getGameNormal = (address, limit, start) => {
  return getNormal({ address, limit, start })
}
export const uploadGameIcon = (giId, icon) => {
  return uploadIcon({ giId, icon })
}
export const gameCommentLiked = (grId, status, uid) => {
  return commentLiked({ grId, status, uid })
}
export const tokenTokentrans = (limit, start, tokenAddress) => {
  return tokenTokentransData({ limit, start, tokenAddress })
}
export const delUserSetGameIcon = (giId, giuId, gpId, uid) => {
  return delSetGameIcon({ giId, giuId, gpId, uid })
}
export const resetPasswords = (uId, password) => {
  return resetPassword({ uId, password })
}
export const getGameTypes = () => {
  return getGameType({})
}
