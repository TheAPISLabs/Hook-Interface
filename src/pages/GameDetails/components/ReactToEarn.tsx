import '../index.css'

// import data from '@emoji-mart/data'
// import Picker from '@emoji-mart/react'
import React from 'react'
import styled from 'styled-components/macro'

// import { BASE64 } from './base64'
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
  // const EarnsBox = styled.div`
  //   height: 819px;
  // `
  // const SolidBox = styled.div`
  //   border: 1px solid rgba(225, 225, 225, 0.2);
  //   border-radius: 16px;
  //   height: 80px;
  //   display: flex;
  //   justify-content: space-between;
  // `
  // const Backers = styled.div`
  //   width: 48px;
  //   height: 48px;
  //   border: 2px solid #0049c6;
  //   border-radius: 50%;
  //   position: relative;
  // `
  // const BackersImg = styled.div`
  //   height: 996px;
  // `
  // const BackersHover = styled.img`
  //   width: 200px;
  //   position: absolute;
  //   max-width: none;
  //   top: -20px;
  //   left: -70px;
  // `
  // const TheUserBox = styled.div`
  //   width: 240px;
  //   height: 43px;
  //   display: flex;
  //   justify-content: space-between;
  // `
  // const TheUser = styled.div`
  //   width: 197px;
  //   display: flex;
  //   justify-content: space-between;
  // `
  // const TheUsers = styled.img`
  //   width: 32px;
  //   height: 32px;
  //   border-radius: 50%;
  // `
  // const TheAdd = styled.img`
  //   width: 43px;
  //   height: 43px;
  //   border-radius: 50%;
  // `
  // useEffect(() => {
  //   new Picker({ data, ref })
  //   // getGameIconByGpId(gpId, uId).then((res) => {
  //   //   SetGameIcons(res.data.data.records)
  //   // })
  // }, [])
  return (
    <Earns>
      <EarnTitle>React to earn</EarnTitle>
      {/* <EarnsBox>
        {gameIcons.map((item: any, index: any) => {
          return (
            <SolidBox key={index}>
              <Backers>
                <BackersImg data-idx={`${index}`}> {BASE64.decrypt(item.icon)}</BackersImg>
                <BackersHover src={''}></BackersHover>
              </Backers>
              <TheUserBox>
                <TheUser>
                  {item.userIcons &&
                    item.userIcons.map((item: any, index: any) => {
                      return <TheUsers key={index}></TheUsers>
                    })}
                </TheUser>
                <TheAdd></TheAdd>
              </TheUserBox>
            </SolidBox>
          )
        })}
      </EarnsBox> */}
    </Earns>
  )
}
