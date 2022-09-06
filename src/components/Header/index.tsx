import './index.css'

import { IconSearch } from '@douyinfe/semi-icons'
import { Input } from '@douyinfe/semi-ui'
import { Avatar } from '@douyinfe/semi-ui'
import { getSearchDatas, setSearchHeats, userIsLogin, userLogout } from 'hook/hook'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
export default function Header() {
  const history = useHistory()
  const [inputValue, setInputValue] = useState('')
  const [isLogin, setIsLogin] = useState(false)
  const [isShowMenu, setIsShowMenu] = useState(false)
  const loginOut = () => {
    const token = localStorage.getItem('token')
    const uid = localStorage.getItem('uid')

    userLogout(uid, token)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      userIsLogin(token).then((res) => {
        console.log(res)
        setIsLogin(res.data.data)
      })
    }
  }, [])

  return (
    <div className="Headers">
      <div className="headerItems">
        <Input
          placeholder={'Search...'}
          prefix={<IconSearch />}
          onChange={(e) => {
            setInputValue(e)
          }}
          showClear
          onKeyDown={(res) => {
            if (res.key == 'Enter') {
              getSearchDatas(inputValue.toLowerCase()).then((searchRes) => {
                if (searchRes.data.code == 200) {
                  if (searchRes.data.data.tokenBalance.code == 1) {
                    localStorage.setItem('searchData', JSON.stringify(searchRes.data.data))
                    localStorage.setItem('searchAddress', inputValue.toLowerCase())
                    setSearchHeats(inputValue.toLowerCase())
                    history.push({ pathname: '/layout/addressinfo' })
                  } else {
                    history.push({ pathname: '/layout/errorpage' })
                  }
                }
              })
            }
          }}
        ></Input>
        {isLogin ? (
          <div className="AvatarBox">
            <Avatar
              onClick={() => {
                setIsShowMenu(!isShowMenu)
              }}
              size="small"
              style={{ color: '#fff', backgroundColor: '#4318FF', margin: 4 }}
              alt="User"
            >
              U
            </Avatar>
            {isShowMenu && (
              <div className="avatarMenu">
                <div onClick={loginOut}>login out</div>
              </div>
            )}
          </div>
        ) : (
          <div
            onClick={() => {
              history.push({ pathname: '/signin' })
            }}
            className="signInBox"
          >
            Sign In
          </div>
        )}
      </div>
    </div>
  )
}
