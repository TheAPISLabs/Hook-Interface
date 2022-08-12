import '../index.css'

// index.d.ts
// declare module 'emoji-mart
import React from 'react'
import styled from 'styled-components/macro'

export default function Earn(props: any) {
  // const [gameIcons, SetGameIcons] = useState([])
  // const ref = useRef()

  const Earns = styled.div`
    height: 871px;
  `
  const EarnTitle = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 24px;
    font-weight: 500;
    text-align: left;
  `
  // const EarnsBigBox = styled.div`
  //   height: 819px;
  // `
  // const EarnBox = styled.div`
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   width: 100%;
  //   padding: 16px 20px;
  //   margin-bottom: 12px;
  //   border-radius: 16px;
  //   border: 1px solid rgba(225, 225, 225, 0.2);
  // `
  // const EmojiBox = styled.div`
  //   position: relative;
  // `

  // const uId = localStorage.getItem('uId')
  // const [gameIcons, SetGameIcons] = useState([])
  // const { gpId } = props
  // const [animate, setAnimate] = useState(false)
  // const [idx, setIdx] = useState('')
  // const toast = useToast()
  // const [showEmojiModa, setShowEmojiModa] = useState(false)
  // const [emoji, setEmojia] = useState('')
  // function EmojiPicker(props) {
  //   const ref = React.useRef()
  //   React.useEffect(() => {
  //     new Picker({ ...props, data, ref })
  //   }, [])
  //   return <div ref={ref} />
  // }
  // const checkEmoji = (emoji, event) => {
  //   setEmojia(emoji.native)
  // }
  // const ref = useRef()
  // useEffect(() => {
  //   new Picker({ data, ref })
  //   getGameIconByGpId(gpId, uId).then((res) => {
  //     SetGameIcons(res.data.data.records)
  //   })
  // }, [])
  return (
    <Earns>
      <EarnTitle>React to earn</EarnTitle>
      {/* <EarnsBigBox>
        {gameIcons.map((item: any, index: any) => {
          return (
            <EarnBox key={index}>
              <EmojiBox>
                <EmojiBoxBorder>
  
</EmojiBoxBorder>
              </EmojiBox>
            </EarnBox>
          )
        })}
      </EarnsBigBox> */}
    </Earns>
  )
}
