// Chakra imports
// import { Avatar, AvatarGroup, div, Button, div, Image, Text, useToast } from '@chakra-ui/react'
import { Avatar, AvatarGroup, Button, Card, Notification } from '@douyinfe/semi-ui'
import data from '@emoji-mart/data'
// import Card from 'components/card/Card.js'
import { Picker } from 'emoji-mart'
import React, { useEffect, useRef, useState } from 'react'

// Assets
import addIcon from '../../../assets/img/users/addIcon.png'
import amin from '../../../assets/img/users/amin.gif'
import { delUserSetGameIcon, getGameIconByGpId, uploadGameIcon, userSetGameIcon } from '../../../hook/hook'
import { BASE64 } from './base64.js'

export default function Earn(props) {
  const uId = localStorage.getItem('uId')
  const [gameIcons, SetGameIcons] = useState([])
  // eslint-disable-next-line react/prop-types
  const { gpId } = props
  const [animate, setAnimate] = useState(false)
  const [idx, setIdx] = useState('')
  // const toast = useToast()
  const [showEmojiModa, setShowEmojiModa] = useState(false)
  const [emoji, setEmojia] = useState('')
  function EmojiPicker(props) {
    const ref = React.useRef()
    React.useEffect(() => {
      new Picker({ ...props, data, ref })
    }, [])
    return <div ref={ref} />
  }
  const checkEmoji = (emoji, event) => {
    setEmojia(emoji.native)
  }
  const ref = useRef()
  useEffect(() => {
    new Picker({ data, ref })
    getGameIconByGpId(gpId, uId).then((res) => {
      SetGameIcons(res.data.data.records)
    })
  }, [])

  return (
    <div>
      <span
        style={{
          color: ' rgba(255,255,255,1)',
          fontSize: '24px',
          fontWeight: ' 500',
          textAlign: 'left',
          lineHeight: '32px',
          marginBottom: '10px',
        }}
        className="font-Inter-SemiBold"
      >
        React to earn
      </span>
      <Card
        style={{
          width: '100%',
          padding: '0',
          backgroundColor: 'transparent',
          height: '585px',
        }}
        // direction="column"

        className="yscroll"
      >
        {/* {gameIcons} */}
        {gameIcons.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: '9px 16px',
                marginBottom: '12px',
                borderRadius: '16px',
                border: '1px solid rgba(225, 225, 225, 0.2)',
                display: 'flex',
              }}
            >
              <div
                style={{
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    height: '44px',
                    width: '44px',
                    marginLeft: '14px',
                    background: '#0c1437',
                    cursor: 'pointer',
                    borderRadius: '50%',
                    border: '2px solid #0049C6',
                    fontSize: '30px',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                  className={idx == index ? (animate ? 'animate' : '') : ''}
                  data-idx={`${index}`}
                  onClick={(e) => {
                    setAnimate(!animate)
                    setTimeout(() => {
                      setAnimate(false)
                    }, 1100)
                    setIdx(e.target.getAttribute('data-idx'))
                    if (!uId) {
                      Notification.open({
                        title: `please sign in`,
                        position: 'top',
                        status: 'warning',
                        isClosable: true,
                        duration: 3,
                      })
                      return
                    }
                    if (item.isLiked) {
                      delUserSetGameIcon(item.giId, '', gpId, uId).then((res) => {
                        if (res.data.code == 200) {
                          getGameIconByGpId(gpId, uId).then((res) => {
                            SetGameIcons(res.data.data.records)
                          })
                        } else {
                        }
                      })
                      return
                    }
                    userSetGameIcon(item.giId, '', gpId, uId).then((res) => {
                      if (res.data.code == 200) {
                        getGameIconByGpId(gpId, uId).then((res) => {
                          SetGameIcons(res.data.data.records)
                        })
                      } else {
                        Notification.open({
                          title: res.data.msg,
                          position: 'top',
                          status: 'warning',
                          isClosable: true,
                          duration: 3,
                        })
                      }
                    })
                  }}
                >
                  {/* {item.icon} */}
                  <span data-idx={`${index}`}> {BASE64.decrypt(item.icon)}</span>
                </div>
                <img
                  src={amin}
                  style={{
                    display: idx == index ? (animate ? 'block' : 'none') : 'none',
                    width: '200px',
                    position: 'absolute',
                    maxWidth: 'none',
                    top: '-20px',
                    left: '-60px',
                  }}
                />
              </div>
              <AvatarGroup max={9} size="sm" fontSize="12px" fontWeight="700" color="#fff">
                {item.userIcons
                  ? item.userIcons.map((avt, key) => (
                      <Avatar
                        key={key}
                        w={{ base: '28px', '2xl': '32px' }}
                        height={{ base: '28px', '2xl': '32px' }}
                        borderWidth="0"
                        src={avt.userIcon}
                      />
                    ))
                  : ''}
              </AvatarGroup>
            </div>
          )
        })}
      </Card>
      <div style={{ paddingRight: '15px' }}>
        <div
          style={{
            alignItems: 'center',
            width: '100%',
            padding: '9px 16px',
            marginBottom: '12px',
            borderRadius: '16px',
            border: '1px solid rgba(225, 225, 225, 0.2)',
          }}
        >
          {emoji ? (
            ''
          ) : (
            <div
              style={{
                border: '2px solid #353D59',
                height: '44px',
                width: '44px',
                borderRadius: '50%',
                cursor: 'pointer',
                position: 'relative',
              }}
              onClick={() => {
                setEmojia('')
                setShowEmojiModa(!showEmojiModa)
              }}
            >
              <img
                src={addIcon}
                style={{
                  width: '28px',
                  margin: '2px auto',
                  display: 'block',
                }}
              />
              <span
                style={{
                  display: 'none',
                  width: '6.8vw',
                  height: '6.8vw',
                  background: '#D8D8D8',
                  borderRadius: '50%',
                  position: 'absolute',
                  right: '-3px',
                }}
              ></span>
            </div>
          )}
          {showEmojiModa && emoji ? (
            <div
              style={{
                alignItems: 'center',
              }}
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <span fontSize="30px" margin="0 10px">
                {emoji}
              </span>

              {emoji ? (
                <Button
                  style={{
                    width: '60px',
                    bgColor: '#6C5DD3',
                    height: '20px',
                    fontWeight: '500',
                    fontSize: '18px',
                  }}
                  variant="brand"
                  onClick={() => {
                    let emcode = BASE64.encoder(emoji)
                    if (!uId) {
                      Notification.open({
                        title: `please sign in`,
                        position: 'top',
                        status: 'warning',
                        isClosable: true,
                        duration: 3,
                      })
                      return
                    }
                    uploadGameIcon('', emcode).then((res) => {
                      if (res.data.code == 200) {
                        Notification.open({
                          title: `successful`,
                          position: 'top',
                          status: 'success',
                          isClosable: true,
                          duration: 3,
                        })
                        setEmojia('')
                        setShowEmojiModa(!showEmojiModa)
                        getGameIconByGpId(gpId, uId).then((emojiRes) => {
                          SetGameIcons(emojiRes.data.data.records)
                        })
                      }
                    })
                  }}
                >
                  OK
                </Button>
              ) : (
                ''
              )}
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <div>
        {showEmojiModa ? (
          <EmojiPicker
            onEmojiSelect={(emoji, event) => {
              checkEmoji(emoji, event)
            }}
            theme="dark"
            bgColor="red"
            native
            emojiSize={25}
            sheetSize={32}
            emojiButtonColors="['rgba(102, 51, 153, .2)']"
            data={data}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
