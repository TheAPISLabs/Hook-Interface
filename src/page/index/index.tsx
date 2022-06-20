import React from "react";
import Column from "src/components/Column";
import { isMobile } from "src/helpers/utilities";

import styled from "styled-components";
import "./index.css";
import passImg from "../../assets/PassCard.png";
import planImg from "../../assets/pricing.png";
// import { useWeb3React } from "@web3-react/core";
const HookWrap = styled.div`
  padding: 22px 286px 404px 286px;
  background: #000000;
`;
const HookTitle = styled.div`
  font-family: "Inter";
  font-weight: 700;
  font-size: 74px;
  line-height: 90px;
  letter-spacing: -1.48px;
  color: #ffffff;
`;
const HookIntroduce = styled.div`
  width: 1206px;
  height: 200px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
  text-align: center;
  color: #696571;
  margin-top: 74px;
`;
const ComAndPass = styled.div`
  display: flex;
  width: 1344px;
  justify-content: space-between;
  height: 690px;
`;
const Coming = styled.div`
  width: 526px;
  height: 137px;
  border: 1px solid #8965d2;
  border-radius: 16px;
  font-family: "Inter";
  font-weight: 700;
  font-size: 60px;
  line-height: 137px;
  letter-spacing: -1.2px;
  color: #ffffff;
  margin-top: 241px;
`;
const PassCardImg = styled.img`
  width: 638px;
  height: 690px;
`;
const LaunchingBox = styled.div`
  width: 1344px;
  height: 318px;
  margin-bottom: 107px;
`;
const RewardsBox = styled.div`
  width: 1344px;
  height: 270px;
  margin-bottom: 107px;
`;
const LaunchingTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  letter-spacing: -0.72px;
  color: #ffffff;
  line-height: 44px;
  text-align: left;
`;
const Launching = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
  color: #696571;
  text-align: left;
  margin-top: 34px;
`;
const PricingBox = styled.div`
  width: 1344px;
  height: 880px;
`;
const PricingTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -0.72px;
  text-align: left;
  color: #ffffff;
`;
const PricingImg = styled.img`
  width: 1344px;
  height: 824px;
  margin-top: 45px;
`;
interface IHome {
  killSession: () => void;
  connected: boolean;
  connect: () => void;
  fetching: boolean;
}
export default function Home({ connected, killSession, connect, fetching }: IHome) {
  return isMobile() ? (
    <></>
  ) : (
    <>
      <HookWrap>
        <Column maxWidth={1344}>
          <HookTitle>Hook Collector Pass</HookTitle>
          <HookIntroduce>
            Hook pass will be the key to premium features and experiences. For a better experience
            where technology adoption creates cutting-edge disruptive experiences for gamers.
          </HookIntroduce>
          <ComAndPass>
            <Coming>Coming Soon</Coming>
            <PassCardImg src={passImg} />
          </ComAndPass>
          <LaunchingBox>
            <LaunchingTitle>#1:All-in-One Launching</LaunchingTitle>
            <Launching>
              The Hook pass holders could get access to the blockchain gaming <br /> features <br />
              that allows players to launch trending crypto games within a few clicks, <br />
              and support a smooth swap of the assets their time gains.
            </Launching>
          </LaunchingBox>
          <RewardsBox>
            <LaunchingTitle>#2:Rewards Model: </LaunchingTitle>
            <Launching>
              1. Basic rewards(daily engagement), <br />
              2 PvP rewards (competition between comment writers), <br />
              3 PvE rewards <br />
              4.Monopoly rewards (Pass holder will upgrade and boost the reward)
            </Launching>
          </RewardsBox>
          <LaunchingBox>
            <LaunchingTitle>#3:Community</LaunchingTitle>
            <Launching>
              Our goal is to enable crypto game interconnectivity across blockchain. <br />
              The Hook community will set networking channels with artists,
              <br /> developers,
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
