import axios from 'axios'

const DefaultUrl = 'https://test.hook.cool/api'
// const DefaultUrl = 'http://192.168.31.23:8898/'
// const DefaultUrl = 'http://devhook.natapp1.cc/'
export async function getFigureData(params) {
  return await axios.get(`${DefaultUrl}/mini/getFigureData`, {
    params,
  })
}

export async function getGlassnodeFigureData(params) {
  return await axios.get(`${DefaultUrl}/mini/getGlassnodeFigureData`, {
    params,
  })
}

export async function getMarketCapitalization(params) {
  return await axios.get(`${DefaultUrl}/mini/getMarketCapitalization`, {
    params,
  })
}
export async function getSearchHeat(params) {
  return await axios.get(`${DefaultUrl}/search/getSearchHeat`, {
    params,
  })
}
export async function getCmcData(params) {
  return await axios.get(`${DefaultUrl}/mini/getCmcData`, {
    params,
  })
}
export async function getTag(params) {
  return await axios.get(`${DefaultUrl}/search/getTag`, {
    params,
  })
}
export async function setSearchHeat(searchName) {
  return await axios.post(`${DefaultUrl}/search/setSearchHeat`, {
    searchName,
  })
}
export async function setTag_address(params) {
  return await axios.get(`${DefaultUrl}/search/setTag_address/${params}`)
}

export async function getSearchData(params) {
  return await axios.get(`${DefaultUrl}/track/tokenbalance`, {
    params,
  })
}

export async function getTxData(params) {
  return await axios.get(`${DefaultUrl}/track/normal`, {
    params,
  })
}
export async function getEthPrice() {
  return await axios.get(
    'https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=ethereum&start=1&limit=1&category=spot&sort=cmc_rank_advanced'
  )
}
