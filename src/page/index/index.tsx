import React, { useState } from "react";
import Column from "src/components/Column";
import { isMobile } from "src/helpers/utilities";

import styled from "styled-components";
import "./index.css";
import passImg from "../../assets/PassCard.png";
import planImg from "../../assets/pricing.png";
// import { useWeb3React } from "@web3-react/core";
const HookWrap = styled.div`
  padding: 70px 350px 404px 350px;
  background: #000000;
`;
const HookTitle = styled.div`
  font-weight: 900;
  font-size: 60px;
  line-height: 90px;
  letter-spacing: -1.2px;
  color: #ffffff;
  -webkit-animation: animal 0.5s forwards linear;
  -webkit-transform-origin: center center;
  -ms-transform-origin: center center;
  transform-origin: center center;
`;
const HookIntroduce = styled.div`
  width: 1107px;
  height: 174px;
  font-family: Poppins;
  font-weight: 500;
  font-size: 20px;
  line-height: 43px;
  text-align: center;
  color: #ffffff;
  margin-top: 30px;
  -webkit-animation: animals 0.5s 0.5s forwards linear;
  -webkit-transform-origin: center center;
  -ms-transform-origin: center center;
  transform-origin: center center;
  opacity: 0;
`;
const ComAndPass = styled.div`
  display: flex;
  width: 1210px;
  justify-content: space-between;
  height: 580px;
  -webkit-animation: animal1 0.5s 1s forwards linear;
  -webkit-transform-origin: center center;
  -ms-transform-origin: center center;
  transform-origin: center center;
  opacity: 0;
`;
const Coming = styled.div`
  width: 407px;
  height: 90px;
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  line-height: 90px;
  letter-spacing: -1.2px;
  color: #ffffff;
  text-shadow: 0px -2px 9px #b687ef;
  margin-top: 241px;
`;
const PassCardImg = styled.img`
  width: 574px;
  height: 580px;
  transform: rotate(0deg);
  transition: all 1s;
`;
const LaunchingBox = styled.div`
  width: 1210px;
  height: 196px;
  margin-bottom: 145px;
`;
const RewardsBox = styled.div`
  width: 1210px;
  height: 238px;
  margin-bottom: 145px;
`;
const LaunchingTitle = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 54px;
  letter-spacing: -0.72px;
  color: #ffffff;
  text-align: left;

  -webkit-transform-origin: center center;
  -ms-transform-origin: center center;
  transform-origin: center center;
  opacity: 0;
`;
const Launching = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 43px;
  color: #ffffff;
  text-align: left;
  margin-top: 25px;
  opacity: 0;
`;
const PricingBox = styled.div`
  width: 1210px;
  height: 880px;
`;
const PricingTitle = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 54px;
  letter-spacing: -0.72px;
  color: #ffffff;
  text-align: left;
`;
const PricingImg = styled.img`
  width: 1208px;
  height: 748px;
  margin-top: 45px;
`;
interface IHome {
  killSession: () => void;
  connected: boolean;
  connect: () => void;
  fetching: boolean;
}
export default function Home({ connected, killSession, connect, fetching }: IHome) {
  const [transforms, setTransforms] = useState("rotate(0deg)");
  const [animations, setAnimations] = useState("");
  const [animationse, setAnimationse] = useState("");
  const [animationses, setAnimationses] = useState("");

  return isMobile() ? (
    <></>
  ) : (
    <>
      <HookWrap
        onWheel={e => {
          if (e.nativeEvent.deltaY <= 0) {
            console.log("up", e.nativeEvent.deltaY);
            setTransforms("rotate(0deg)");
          } else {
            console.log("down", e.nativeEvent);
            if (e.nativeEvent.screenY > 200) {
              setAnimations("animal 0.5s forwards linear");
            }
            if (e.nativeEvent.screenY > 200) {
              setAnimationse(" animals 0.5s 1s forwards linear");
            }
            if (e.nativeEvent.screenY > 200) {
              setAnimationses(" animals 0.5s 2s forwards linear");
            }
            setTransforms("rotate(10deg)");
          }
        }}
      >
        <Column maxWidth={1210}>
          <HookTitle>Hook Collector Pass</HookTitle>
          <HookIntroduce>
            Hook pass will be the key to premium features and experiences.
            <br /> For a better experience where technology adoption creates cutting-edge disruptive
            experiences for gamers.
          </HookIntroduce>
          <ComAndPass>
            <Coming>Coming Soon</Coming>
            <PassCardImg src={passImg} style={{ transform: transforms }} />
          </ComAndPass>
          <LaunchingBox>
            <LaunchingTitle style={{ WebkitAnimation: animations }}>
              #1:All-in-One Launching
            </LaunchingTitle>
            <Launching style={{ WebkitAnimation: animations }}>
              The Hook pass holders could get access to the blockchain gaming features <br />
              that allows players to launch trending crypto games within a few clicks, <br />
              and support a smooth swap of the assets their time gains.
            </Launching>
          </LaunchingBox>
          <RewardsBox>
            <LaunchingTitle style={{ WebkitAnimation: animationse }}>
              #2:Rewards Model:{" "}
            </LaunchingTitle>
            <Launching style={{ WebkitAnimation: animationse }}>
              1. Basic rewards(daily engagement), <br />
              2 PvP rewards (competition between comment writers), <br />
              3 PvE rewards <br />
              4.Monopoly rewards (Pass holder will upgrade and boost the reward)
            </Launching>
          </RewardsBox>
          <LaunchingBox>
            <LaunchingTitle style={{ WebkitAnimation: animationses }}>#3:Community</LaunchingTitle>
            <Launching style={{ WebkitAnimation: animationses }}>
              Our goal is to enable crypto game interconnectivity across blockchain. <br />
              The Hook community will set networking channels with artists, developers,
              <br />
              community leads looking to start projects.
            </Launching>
          </LaunchingBox>
          <PricingBox>
            <PricingTitle>Pricing & Plans</PricingTitle>
            <PricingImg src={planImg} />
          </PricingBox>
        </Column>
      </HookWrap>
    </>
  );
}
