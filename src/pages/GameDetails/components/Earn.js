// eslint-disable-next-line no-restricted-imports
import 'braft-editor/dist/index.css'

// Chakra imports
import { Avatar, Button, Card, Notification } from '@douyinfe/semi-ui'
// Assets
import likedIcon from 'assets/img/users/liked.png'
import BraftEditor from 'braft-editor'
// import Card from 'components/card/Card.js'
import React, { useEffect, useState } from 'react'

// import { AiOutlineLike } from 'react-icons/ai'
import { gameCommentLiked, getComments, writeComment } from '../../../hook/hook'
import { BASE64 } from './base64'
// import DateUploaded from './MainMenu'
import { dateDiff } from './until.js'
import { isMobile } from './until.js'
export default function Comments(props) {
  // eslint-disable-next-line react/prop-types
  const { gpId } = props
  const uId = localStorage.getItem('uId')
  const [isShow, ShowFun] = useState(false)
  const [CommentsDate, setCommentsDate] = useState([])
  const [content, setContent] = useState(BraftEditor.createEditorState('null'))
  const [grId, setgrId] = useState('')
  const [parentId, setParentId] = useState('')
  const [rootParentId, setRootParentId] = useState('')
  const [page, setPage] = useState('')
  const [pageSize, setPageSize] = useState(isMobile() ? 3 : 7)
  const [sort, setSort] = useState('')
  // const toast = useToast()
  const [commentShow, setCommentShow] = useState(false)
  const [sortField, SetsortField] = useState('ALL')
  const getCommentsDate = () => {
    getComments(gpId, page, pageSize, sort, sortField, uId).then((res) => {
      setCommentsDate(res.data.data.records)
    })
  }
  useEffect(() => {
    getCommentsDate()
  }, [])
  const chooseSort = (sortField) => {
    getComments(gpId, page, pageSize, sort, sortField, uId).then((res) => {
      setCommentsDate(res.data.data.records)
    })
  }
  return (
    <div
      style={{
        background: '#111C44',
        borderRadius: '24px',
        padding: '30px 28px',
        margin: '30px 0 45px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '12px',
        }}
      >
        <span
          style={{
            color: ' rgba(255,255,255,1)',
            fontSize: '24px',
            fontWeight: ' 500',
            textAlign: 'left',
            lineHeight: '32px',
            paddingLeft: '0',
            marginBottom: '24px',
          }}
          className="font-Inter-SemiBold"
        >
          Comments
        </span>
        {/* <DateUploaded sortField={sortField} SetsortField={SetsortField} chooseSort={chooseSort}></DateUploaded> */}
      </div>
      <Card
        style={{
          width: '100%',
          padding: '0',
          backgroundColor: 'transparent',
        }}
        direction="column"
        w="100%"
        p="0px"
        bgColor="transparent"
      >
        <div>
          {CommentsDate.map((item, key) => {
            return (
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  padding: '20px 16px',
                  marginBottom: '12px',
                  borderRadius: '12px',
                  paddingRight: '5px',
                }}
                key={key}
                _hover={{ bgColor: 'rgba(228, 228, 228, 0.1)' }}
              >
                <Avatar h="48px" w="48px" src={item.img} me="14px" mr={{ sm: '24px', md: '14px' }} />
                <div>
                  <div style={{ fontSize: '13px' }}>
                    <span style={{ color: '#5F75EE' }}>{item.userName}</span>
                    <span as="span" style={{ color: '#B2B3BD', marginLeft: '3px' }}>
                      {dateDiff(item.time, null)}
                    </span>
                  </div>
                  <span
                    style={{
                      margin: '10px 0',
                      color: '#B2B3BD',
                      fontSize: '14px',
                      lineHeight: '24px',
                      wordBreak: 'break-all',
                    }}
                  >
                    <div dangerouslySetInnerHTML={{ __html: BASE64.decrypt(item.content) }}></div>
                  </span>
                  <div
                    style={{
                      display: 'flex',
                    }}
                  >
                    {!item.isLiked ? (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          cursor: 'pointer',
                        }}
                        onClick={() => {
                          if (!uId) {
                            Notification.open({
                              title: `please sign in`,
                              position: 'top',
                              status: 'warning',
                              isClosable: true,
                              duration: 3,
                            })
                            //   Notification.open({
                            //     title: 'Hi, Bytedance',
                            //     content: 'ies dance dance dance',
                            //     duration: 3,
                            // })
                            return
                          }
                          gameCommentLiked(item.grId, 1, uId).then((res) => {
                            if (res.data) {
                              getCommentsDate()
                            }
                          })
                        }}
                      >
                        {/* <Icon w="4" h="4" as={AiOutlineLike} /> */}
                        <span
                          style={{
                            color: '#808191',
                            fontSize: '14px',
                            marginLeft: '6px',
                            fontWeight: 600,
                          }}
                        >
                          {' '}
                          Like
                        </span>
                      </div>
                    ) : (
                      <div
                        style={{
                          display: 'flex',
                        }}
                        cursor="pointer"
                        onClick={() => {
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
                          gameCommentLiked(item.grId, 0, uId).then((res) => {
                            if (res.data) {
                              getCommentsDate()
                            }
                          })
                        }}
                      >
                        <img src={likedIcon} />
                        <span
                          style={{
                            color: '#808191',
                            fontSize: '14px',
                            marginLeft: '6px',
                            fontWeight: 600,
                          }}
                        >
                          {' '}
                          Like
                        </span>
                      </div>
                    )}

                    {/* <img src={commentIcon}></img>
                        <img m="0 16px" src={collectIcon}></img>
                        <img src={expandIcon}></img> */}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        {CommentsDate.length >= (isMobile() ? 3 : 7) ? (
          !commentShow ? (
            <div
              style={{
                textAlign: 'center',
                cursor: 'pointer',
                margin: '4px 0',
                display: 'inline-block',
                color: '#5F75EE',
              }}
              onClick={() => {
                setCommentShow(true)
                getComments(gpId, page, '', sort, sortField, uId).then((res) => {
                  setCommentsDate(res.data.data.records)
                })
              }}
            >
              <Button
                style={{
                  display: 'none',
                  width: '82.9vw',
                  bgColor: '#6C5DD3',
                  height: '14.7vw',
                  fontWeight: 500,
                  fontSize: '14px',
                  borderRadius: '16px',
                }}
                variant="brand"
                _hover={{
                  bgColor: 'rgba(108,93,211 ,0.6)',
                }}
              >
                Load More
              </Button>
              <span
                style={{
                  display: 'block',
                }}
              >
                View More
              </span>
            </div>
          ) : (
            ''
          )
        ) : (
          ''
        )}
        <BraftEditor
          contentStyle={{ height: 100 }}
          language="en"
          value={content}
          style={{
            border: '1px solid rgba(225, 225, 225, 0.2)',
            marginBottom: '20px',
            color: '#fff',
          }}
          onChange={(editorState) => {
            setContent(editorState)
          }}
          placeholder="comment length should be above 10 and below 500 characters."
        />

        <Button
          style={{
            width: '180px',
            height: '56px',
            margin: '32px auto',
            fontWeight: 400,
            fontSize: '14px',
            borderRadius: ' 16px',
            opacity: 1,
            background: 'rgba(117,81,255,1)',
            color: '#fff',
            position: 'relative',
            left: '50%',
            marginLeft: '-25%',
          }}
          variant="brand"
          onClick={() => {
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
            let str = content
              .toHTML()
              .replace(/<[^>]+>|&[^>]+;/g, '')
              .trim()
            if (str.length < 10 || str.length > 500) {
              Notification.open({
                title: `comment length should be above 10 and below 500 characters`,
                position: 'top',
                status: 'warning',
                isClosable: true,
                duration: 3,
              })
              return
            }
            writeComment(BASE64.encoder(content.toHTML()), gpId, grId, parentId, rootParentId, '', uId).then((res) => {
              if (res.data.code == 200) {
                Notification.open({
                  title: `Comment successful`,
                  position: 'top',
                  status: 'success',
                  duration: 3,
                })
                setContent(BraftEditor.createEditorState('null'))
                getCommentsDate()
              } else {
                Notification.open({
                  title: `error`,
                  position: 'top',
                  status: 'error',
                  isClosable: true,
                  duration: 3,
                })
              }
            })
          }}
        >
          {' '}
          Write comment
        </Button>
      </Card>
    </div>
  )
}
